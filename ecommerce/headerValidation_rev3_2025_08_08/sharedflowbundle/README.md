
# Apigee Proxy: ecommerce API

This repository contains an Apigee shared flow for raising faults after header validation in ecommerce gateway project
   - Assigning error
   - Giving them particular format
   - raising fault

## Structure

- `apiproxy/`: Contains all Apigee proxy configuration
  - `policies/`: Policy XML files
  - `proxies/`: Proxy endpoints
  - `targets/`: Target endpoints
  - `resources/`: JavaScript or shared resources
  - `Banking.xml`: Main proxy configuration
