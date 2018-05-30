const server = require("apollo-server-lambda")

const schema = require("./data/schema")

module.exports.graphqlHandler = server.graphqlLambda({ schema })
module.exports.graphiqlHandler = server.graphiqlLambda({
  endpointURL: '/dev/graphql'
})
