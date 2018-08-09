import Component from '@ember/component'

export default Component.extend({
  actions: {
    addtrip: function () {
      console.log('add trip called on add-trip-form.js')
      this.sendAction('addtrip', this.get('trips'))
    }
  }
})
