import { Schema as Schema2 } from "../v2";
import { Schema as Schema3 } from "../v3";

@Schema2()
@Schema3()
export abstract class BaseError {

  public message: string = "";
  public code: string = "";
  public folio: string = "";

  constructor(message: string, code: string) {

    Object.defineProperty(this, "message", {
      configurable: false,
      get: () => { return message; },
      set: undefined
    });

    Object.defineProperty(this, "code", {
      configurable: false,
      get: () => { return code; },
      set: undefined
    });

    const folio: string = this.generateFolio(10);

    Object.defineProperty(this, "folio", {
      configurable: false,
      get: () => { return folio; },
      set: undefined
    });

  }

  private generateFolio(len?: number, charset?: string): string {
    const l = len || 10;
    const c = charset || "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let folio: string = "";
    for(let i = 0, n = c.length; i < l; ++i) {
      folio += c.charAt(Math.floor(Math.random() * n));
    }
    return folio;
  }
}