# graphql-aws-lambda
A GraphQL backed, Serverless (AWS Lambda variety) Demo

# Goals
This was a quick demo to try deploying a GraphQL API backed by [Apollo Server](https://www.apollographql.com/docs/apollo-server/servers/lambda.html) to AWS Lambda using [Serverless](https://serverless.com/)

I wanted:
 * Modularized GraphQL files and imports
 * Simple (no external connections) resolving of data
 * To have the GraphQL Inspector available
 
### To Use
1. Install Node 8.10 (latest version of node supported by AWS at the time of this README)
2. Install Serverless
3. Set up your AWS Provider Credentials
4. Clone this project and then:

```
> npm i
> sls deploy -v
```

5. Open the GraphQL Inspector URL and query away.
