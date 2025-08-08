var errors={
"internal_error":{
    status : 500,
    reason : "internal server error",
    response : {
      error : "internal_error",
      message : "An unexpected error occur"
    }
  }
}
var code = context.getVariable("flow.error.code");
var error = errors[code] || errors["internal_error"];
context.setVariable("myError.Code", error.status);
context.setVariable("myError.Phrase", error.reason);
context.setVariable("myError.Payload", JSON.stringify(error.response));



