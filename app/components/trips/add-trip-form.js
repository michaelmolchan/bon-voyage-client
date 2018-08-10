import Component from '@ember/component'

export default Component.extend({
  trip: {},
  editing: false,
  actions: {
    addTrip: function (trip) {
      console.log('add trip called on add-trip-form.js', trip)
      this.sendAction('addTrip', this.get('trip'))
      this.toggleProperty('editing')
      this.set('trip', {})
    },
    // showAddList () {
    //   this.toggleProperty('addingNew')
    // },
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
