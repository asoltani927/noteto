import { ConfigModule } from "@nestjs/config";
import { Test } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import { DatabaseConfig } from "./database.config";

describe("DatabaseConfig", () => {
  let app: INestApplication;
  let config: DatabaseConfig;

  beforeEach(async () => {
    app = (
      await Test.createTestingModule({
        imports: [
          ConfigModule.forRoot({
            ignoreEnvFile: true,
            ignoreEnvVars: true,
            validate: () => ({
              DATABASE_URL: "val1",
            }),
          }),
        ],
        providers: [DatabaseConfig],
      }).compile()
    ).createNestApplication();

    config = app.get(DatabaseConfig);
  });

  afterEach(async () => {
    await app.close();
  });

  it.each`
    name     | value
    ${"url"} | ${"val1"}
  `("expects $name to be $value", ({ name, value }) => {
    expect(config[name as keyof DatabaseConfig]).toEqual(value);
  });
});
