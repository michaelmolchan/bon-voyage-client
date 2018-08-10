import Component from '@ember/component'

export default Component.extend({
  editing: false,
  actions: {
    updateTrip: function () {
      console.log('updateTrip called on edit-trip.js', this.get('trip'))
      this.sendAction('updateTrip', this.get('trip'))
      // this.set('trip', {})
      this.toggleProperty('editing')
    },
    deleteTrip: function () {
      console.log('add trip called on add-trip-form.js')
      this.sendAction('deleteTrip', this.get('trip'))
    },
    reset () {
      this.set('trip', {})
      this.toggleProperty('editing')
    },
    toggleEditing (trip) {
      console.log('editing:', this.get('editing'))
      this.toggleProperty('editing')
      console.log('editing:', this.get('editing'))
    }
  }
})
