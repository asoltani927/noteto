import { INestApplication } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { Test } from "@nestjs/testing";
import { AppConfig } from "./app-base.config";

describe("AppConfig", () => {
  let app: INestApplication;
  let config: AppConfig;

  beforeEach(async () => {
    app = (
      await Test.createTestingModule({
        imports: [
          ConfigModule.forRoot({
            ignoreEnvFile: true,
            ignoreEnvVars: true,
            validate: () => ({
              TZ: "val1",
              NODE_ENV: "production",
              STAGE: "review",
              RELEASE: "val3",
            }),
          }),
        ],
        providers: [AppConfig],
      }).compile()
    ).createNestApplication();

    config = app.get(AppConfig);
  });

  afterEach(async () => {
    await app.close();
  });

  it.each`
    name            | value
    ${"tz"}         | ${"val1"}
    ${"nodeEnv"}    | ${"production"}
    ${"stage"}      | ${"review"}
    ${"release"}    | ${"val3"}
    ${"isDeployed"} | ${true}
  `("expects $name to be $value", ({ name, value }) => {
    expect(config[name as keyof AppConfig]).toEqual(value);
  });
});
