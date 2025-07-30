var errors = {
  "Unauthorized":{
    status : 401,
    reason : "Unauthorized",
    response : {
      error : "Unauthorized",
      message : "Invalid or expired access token"
    }
  },
  "invalid_token":{
    status : 401,
    reason : "Unauthorized",
    response : {
      error : "invalid_token",
      message : "Access token is missing or client not authorized"
    }
  },
  "gateway_timeout":{
    status : 504,
    reason : "gateway_timeout",
    response : {
      error : "gateway_timeout",
      message : "Backend did not respond"
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
};


//to get error code

var errorCode = context.getVariable("flow.error.code");
context.setVariable ("code" ,errorCode);

//to map error from errors var , or set default if no error is matched 
var error = errors[errorCode] || errors["internal_error"];


//value to be set for raise fault
context.setVariable ("myError.status",error.status);
context.setVariable("myError.reason",error.reason);
context.setVariable("myError.payload",JSON.stringify(error.response));