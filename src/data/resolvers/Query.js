module.exports = {
  greeting(RootQuery, args, context) {
    const { firstName } = args

    return {
      greeting: `Hello friend, ${firstName}!`
    }
  }
}
