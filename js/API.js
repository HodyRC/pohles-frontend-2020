var API = {
  endpoint: '/api',

  submitReservation: function (data) {
    return $.post(this.endpoint + '/reservation/new', data, 'json')
  }
}
