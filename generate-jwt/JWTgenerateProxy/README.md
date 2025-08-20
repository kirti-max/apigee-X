
# Apigee Proxy: JWT generation

This repository contains an Apigee proxy for 
JWT token generation 
   - generated JWT token.
   - RaiseFault for every error scenarios + fallback flow  

## Structure

- `apiproxy/`: Contains all Apigee proxy configuration
  - `policies/`: Policy XML files
  - `proxies/`: Proxy endpoints
  - `targets/`: Target endpoints
  - `resources/`: JavaScript or shared resources
  - `Banking.xml`: Main proxy configuration
