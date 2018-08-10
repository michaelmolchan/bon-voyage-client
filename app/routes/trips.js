import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('trip')
  },
  // editing: true,
  actions: {
    goToTrip (trip) {
      this.transitionTo('trip', trip.id)
    },
    addTrip: function (trip) {
      this.get('store').createRecord('trip', trip).save()
    },
    deleteTrip: function (trip) {
      console.log('trip is ', trip)
      trip.destroyRecord()
    },
    updateTrip: function (trip) {
      console.log('trip is ', trip)
      // this.set('trip', trip)
    },
    toggleEditing (trip) {
      console.log('editing:', this.get('editing'))
      this.toggleProperty('editing')
      console.log('editing:', this.get('editing'))
    }
  }
})
