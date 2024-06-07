import { ValidationError } from "joi";

const formatJoiError = (error: ValidationError | undefined) => {
  const details = error?.details || [];
  const errorObject: Record<string, unknown> = {};
  details.forEach((detail) => {
    errorObject[detail.path[0]] = detail.message;
  });
  return errorObject;
};

export default formatJoiError;
