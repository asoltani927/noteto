import { LogLevel } from "./log-level.enum";

describe("LogLevelEnum", () => {
  it("has all the log levels", () => {
    expect(LogLevel).toEqual({
      Debug: "debug",
      Error: "error",
      Info: "info",
      Verbose: "verbose",
      Warn: "warn",
    });
  });
});
