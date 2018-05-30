module.exports = {
  greeting(RootQuery, args, context) {
    const { firstName } = args
    const { GreetingService } = context.connectors

    return GreetingService.fetchGreeting(firstName)
  }
}
