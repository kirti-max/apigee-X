
# Apigee Proxy: Banking API

This repository contains an Apigee proxy for 
Genarating Oauth token 
   - Oauth 2.0 token generation using client credential grant type 
   - RaiseFault for faults
   - used in BankingProxy 

## Structure

- `apiproxy/`: Contains all Apigee proxy configuration
  - `policies/`: Policy XML files
  - `proxies/`: Proxy endpoints
  - `targets/`: Target endpoints
  - `resources/`: JavaScript or shared resources
  - `generate-Oauth.xml`: Main proxy configuration
