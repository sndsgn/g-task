var List = Backbone.Collection.extend({
  model: Task,
  //url: 'https://www.googleapis.com/tasks/v1'
  
  addTask: function() {

    $.get(
      'https://www.googleapis.com/tasks/v1/' + id + '',
      function(data) {

       this.add({
         id: id,
       }); 
      }.bind(this)
      );
  }


//https://github.com/DannyDelott/HowsTheWeather/blob/master/js/collections/Weather.js
});
