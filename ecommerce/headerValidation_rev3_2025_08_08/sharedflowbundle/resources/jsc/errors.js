var errors={
  "missingUserId" : {
    status : 401,
    reason : "invalid_request",
    response : {
      error : "Header missing",
      message : "Missing userId Header"
  }
},
"missingMandatoryHeaders" : {
    status : 401,
    reason : "invalid_request",
    response : {
      error : "Mandatory Headers missing",
      message : "Missing Headers"
  }
},
"missingApiKey" : {
    status : 401,
    reason : "invalid_request",
    response : {
      error : "Header missing",
      message : "Missing APIkey Header"
  }
},

"InvalidApiKey" : {
    status : 401,
    reason : "invalid_request",
    response : {
      error : "invalid request",
      message : "invalid APIkey Header"
  }
},
"missingAuthorization" : {
    status : 401,
    reason : "invalid_request",
    response : {
      error : "Header missing",
      message : "Missing Authorizarion Header"
  }
},
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



