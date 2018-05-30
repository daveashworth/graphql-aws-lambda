const { each } = require("lodash")

const Connectors = require("./connectors")
// const db = require("./db/db")

module.exports = class Context {
  constructor(event, context) {
    this.connectors = {}
    this.event = event
    this.lambdaContext = context

    each(Connectors, (Connector, name) => {
      this.connectors[name] = new Connector(this)
    })

    each(this.connectors, (connector) => {
      if (connector.initialize) {
        connector.initialize()
      }
    })
  }
}
