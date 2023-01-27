class CustomError extends Error {
  constructor(msg) {
    super(msg);

    console.log(msg);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
  }
}

try {
  throw new CustomError("This error from custom error");
} catch (error) {
  console.log(error);
}
