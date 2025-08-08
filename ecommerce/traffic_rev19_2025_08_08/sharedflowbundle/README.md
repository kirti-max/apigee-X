
# Apigee Proxy: Ecommerce API

This repository contains an Apigee shared flow to handle traffic  for ecommerce API Gateway 
   - Used verifyApiKey to get quota and spike limit
   - Used quota and spike limit policy 
   - Raised fault for any error . 

## Structure

- `apiproxy/`: Contains all Apigee proxy configuration
  - `policies/`: Policy XML files
  - `proxies/`: Proxy endpoints
  - `targets/`: Target endpoints
  - `resources/`: JavaScript or shared resources
  - `Banking.xml`: Main proxy configuration
