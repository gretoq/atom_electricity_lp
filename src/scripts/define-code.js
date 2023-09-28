'use strict';

function defineCode(id) {
  const incput = document.querySelector(id);
  window.intlTelInput(incput, {
    allowDropdown: false,
    separateDialCode: true,
    showFlags: false,
    autoPlaceholder: 'off',
    autoInsertDialCode: true,
    nationalMode: true,
    initialCountry: 'auto',
    initialCountry: 'auto',
    geoIpLookup: function (callback) {
      // Fetch from ipapi to get know users location and paste their phone code
      fetch('https://ipapi.co/json')
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          callback(data.country_code);
        })
        .catch(function () {
          callback('us');
        });
    },
    utilsScript:
      'https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js',
  });
}
