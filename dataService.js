  var app = angular.module('pickUpSoccer');

app.factory('dataService', function(){

	var locations = [
    { text: 'Xango Field', city: 'Lehi', time: 'Noon'},
    { text: 'XSI Field', city: 'Lehi', time: '1pm'},
    { text: 'Traverse Mountain Park', city: 'American Fork', time: '7:30'},
    { text: 'BYU Soccer fields', city: 'Provo', time: '8am'}
  ];

return {
  getData: function() {
    return locations;
  },

  addData: function(location) {

       if (location.text && location.city && location.time) {
          locations.push(location);

       };
       
    },

    removeData: function(location) {
      for (var i = 0; i < locations.length; i++) {
        if (location.text === locations[i].text) {
          locations.splice([i],1);
        }
      }

    
    }
  };

});