context.setVariable("headerValidation.failed", false);
var requiredHeaders =["x-api-key","Authorization","user-ID"]
var apiKey = context.getVariable("request.header.x-api-key");
var userId = context.getVariable("request.header.user-ID");
var auth = context.getVariable("request.header.Authorization");
var missingHeaders =[];



if (!apiKey || apiKey == "")
{
    context.setVariable("headerValidation.failed" , true);
    context.setVariable("headerValidation.reason", "missingApiKey");
}
if (!userId || userId == "")
{
    context.setVariable("headerValidation.failed" , true);
    context.setVariable("headerValidation.reason", "missingUserId");
}
if (!auth || auth == "")
{
    context.setVariable("headerValidation.failed" , true);
    context.setVariable("headerValidation.reason", "missingAuthorization");
}


for (j=0;j<requiredHeaders.length;j++)
   {
    var headerName = requiredHeaders[j];
    var headerValues = context.getVariable("request.header."+headerName);
    if (!headerValues || headerValues ==="")
    {
       missingHeaders.push(headerName);

    }
   }
       if (missingHeaders.length>1)
       {
        context.setVariable("headerValidation.failed" , true);
        context.setVariable("headerValidation.reason", "missingMandatoryHeaders");
       }
    
   
