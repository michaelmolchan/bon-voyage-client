import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('trip')
  },
  actions: {
    goToList (trip) {
      this.transitionTo('trip', trip.id)
    }
  }
})
