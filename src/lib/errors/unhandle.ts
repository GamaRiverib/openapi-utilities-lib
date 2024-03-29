import { Schema as Schema2, Property as Property2 } from "../v2";
import { Schema as Schema3, Property as Property3 } from "../v3";
import { BaseError } from "./base_error";

@Schema2()
@Schema3()
export class UnhandleError extends BaseError {

  static CODE = "UNHANDLE_ERROR";
  static DEFAULT_MESSAGE = "Something was wrong!";

  constructor(message?: string) {
    super(message || UnhandleError.DEFAULT_MESSAGE, UnhandleError.CODE);
  }

  @Property2({
    schema: {
      type: "string",
      example: UnhandleError.CODE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: UnhandleError.CODE
    },
    required: true
  })
  code: string;

  @Property2({
    schema: {
      type: "string",
      example: UnhandleError.DEFAULT_MESSAGE
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string",
      example: UnhandleError.DEFAULT_MESSAGE
    },
    required: true
  })
  message: string;

  @Property2({
    schema: {
      type: "string"
    },
    required: true
  })
  @Property3({
    schema: {
      type: "string"
    },
    required: true
  })
  folio: string;

}