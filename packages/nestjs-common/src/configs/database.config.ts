import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class DatabaseConfig {
  public constructor(private configService: ConfigService) {}

  public get url(): string {
    return this.configService.get("DATABASE_URL") || "";
  }
}
