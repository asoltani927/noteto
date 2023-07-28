import { Logger as WinstonLogger } from "winston";
import { LogLevel } from "./enums/log-level.enum";

export class Logger {
  public constructor(private readonly logger: WinstonLogger) {}

  public error(message: string, ...optionalParams: unknown[]): void {
    this.logger.log(LogLevel.Error, message, ...optionalParams);
  }

  public warn(message: string, ...optionalParams: unknown[]): void {
    this.logger.log(LogLevel.Warn, message, ...optionalParams);
  }

  public info(message: string, ...optionalParams: unknown[]): void {
    this.logger.log(LogLevel.Info, message, ...optionalParams);
  }

  public verbose(message: string, ...optionalParams: unknown[]): void {
    this.logger.log(LogLevel.Verbose, message, ...optionalParams);
  }

  public debug(message: string, ...optionalParams: unknown[]): void {
    this.logger.log(LogLevel.Debug, message, ...optionalParams);
  }
}
