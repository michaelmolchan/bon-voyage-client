import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('trip')
  },
  actions: {
    goToTrip (trip) {
      this.transitionTo('trip', trip.id)
    },
    addTrip: function (trip) {
      console.log(trip)
      this.get('store').createRecord('trip', trip).save()
    }
  }
})
