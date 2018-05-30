module.exports = class GreetingService {
  constructor(context) {
    this.context = context
  }

  fetchGreeting(firstName) {
    return {
      greeting: `Hello friend, ${firstName}`
    }
  }
}
