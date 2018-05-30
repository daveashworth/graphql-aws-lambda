const { makeExecutableSchema } = require("graphql-tools")
const fs = require("fs")

require.extensions[".graphql"] = (module, filename) => {
  module.exports = fs.readFileSync(filename, "utf8")
}

const resolvers = require("../resolvers")

const Query = require("./Query.graphql")
const Greeting = require("./Greeting.graphql")

const typeDefs = [
  Query,
  Greeting
]

const executableSchema = makeExecutableSchema({
  resolvers,
  typeDefs
})

module.exports = executableSchema
