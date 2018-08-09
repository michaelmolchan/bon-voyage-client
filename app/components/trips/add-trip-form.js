import Component from '@ember/component'

export default Component.extend({
  trip: {},
  actions: {
    addTrip: function () {
      console.log('add trip called on add-trip-form.js')
      this.sendAction('addTrip', this.get('trip'))
    }
  }
})
