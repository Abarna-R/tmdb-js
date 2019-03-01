
var myList = document.querySelector('.trending');

fetch("https://api.themoviedb.org/3/trending/tv/week?api_key=fbaab79c9fc8de31118a05228463c1e2")

  .then(function(response) { return response.json(); })

  .then(function(data) {

    for (var i = 0; i < data.results.length; i++) {

      var listItem = document.createElement('img');

      listItem.setAttribute("src","https://image.tmdb.org/t/p/w500"+data.results[i].poster_path);

      myList.appendChild(listItem);

    }

  });
  var myLis = document.querySelector('.searched');



fetch("https://api.themoviedb.org/3/search/movie?api_key=fbaab79c9fc8de31118a05228463c1e2&language=en-US"+ func()+ "page=1&include_adult=false")

  .then(function(response) { return response.json(); })

  .then(function(data) {

    for (var i = 0; i < data.results.length; i++) {

      var listIte = document.createElement('img');

      listIte.setAttribute("src","https://image.tmdb.org/t/p/w500"+data.results[i].poster_path);

      myLis.appendChild(listItem);

    }

  });
// var api_key = 'fbaab79c9fc8de31118a05228463c1e2';
// $(document).ready(function(){
//     $.ajax({
//       url: 'http://api.themoviedb.org/3/search/movie?api_key=' + api_key + '&query=',
//       dataType: 'jsonp',
//       jsonpCallback: 'testing'
//     }).error(function() {
//       console.log('error')
//     }).done(function(response) {
//      if (response.total_results > 0) 
//       {
//       content = "";
//           for (i = 0; i < response.total_results; i++) 
//           {
//           url = response.results[i].poster_path;
//           content += "";
//           };
//       $("#poster").html(content);
//           }
//     });

//   });
              
