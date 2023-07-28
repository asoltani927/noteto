import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NodeEnv } from "../typings/node-env";

@Injectable()
export class AppConfig {
  public constructor(protected configService: ConfigService) {}

  public get tz(): "UTC" {
    return this.configService.get("TZ") || "UTC";
  }

  public get nodeEnv(): NodeEnv {
    return this.configService.get("NODE_ENV") || ("development" as NodeEnv);
  }
  public get release(): string | undefined {
    return this.configService.get("RELEASE") || undefined;
  }

  public get isDeployed(): boolean {
    return this.nodeEnv === "production";
  }
}
