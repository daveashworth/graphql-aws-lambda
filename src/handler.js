const server = require("apollo-server-lambda")

const schema = require("./data/schema")
const Context = require("./data/Context")

module.exports.graphqlHandler = server.graphqlLambda((event, context) => {
  const myContext = new Context(event, context)

  return {
    schema,
    context: myContext
  }
})

module.exports.graphiqlHandler = server.graphiqlLambda({
  endpointURL: '/dev/graphql'
})
