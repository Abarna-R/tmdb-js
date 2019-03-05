
var myList = document.querySelector('.trending');

fetch("https://api.themoviedb.org/3/trending/tv/week?api_key=fbaab79c9fc8de31118a05228463c1e2")

  .then(function(response) { return response.json(); })

  .then(function(data) {

    for (var i = 0; i < data.results.length; i++) {
      var divCard1 = document.createElement('div');
          divCard1.style.backgroundColor='#E4E6C3';
          divCard1.className='card col  col-md-3 shadow-lg p-1 mb-3 rounded float-left'; 
         myList.appendChild(divCard1);
      var listItem = document.createElement('img');
      listItem.setAttribute("src","https://image.tmdb.org/t/p/w300"+data.results[i].poster_path);
      divCard1.appendChild(listItem);
      var div1=document.createElement('div');
      div1.className='container-fluid btn btn-info my-2 my-sm-0 ';
      divCard1.appendChild(div1);
      var button1=document.createElement('button');
      button1.type='submit';
      button1.style.backgroundColor= '#FAFAFF';
      button1.textContent= 'Add to favorites';
      div1.appendChild(button1);
    }

  });
  async function searchFunction()
  {   
      var response={};
      var cards = document.getElementById('search-cards');
      var search = document.getElementById('input');
      var searchtxt = search.value;
          var starttxt=`https://api.themoviedb.org/3/search/movie?api_key=fbaab79c9fc8de31118a05228463c1e2&language=en-US&query=${searchtxt}&page=${1}&include_adult=false`;
          var response = await fetch(starttxt);
          var results = await response.json();   
  if(cards.children.length===0)
      {
      for(var i=0;i<20;i++)
      {
          var container = document.querySelector('#search-cards');
          var divCard = document.createElement('div');
          divCard.style.backgroundColor='#E4E6C3';
          divCard.className='card col col-md-3 shadow-lg p-1 mb-3 rounded float-left'; 
          // divCard.style.width='25vw';
          // divCard.style.height='75vh';
          container.appendChild(divCard);
          var imageUrl = 'https://image.tmdb.org/t/p/w500';
          var image = document.createElement('img');
          image.className='card-img-top';   
          // image.style.width='21vw';
          image.style.maxHeight='50vh'; 
          image.style.minHeight='50vh';  
          image.src = imageUrl.concat(results['results'][i]['poster_path']);
          divCard.appendChild(image);
  
          var cardBody = document.createElement('div');
          cardBody.className = 'card-body';          
          divCard.appendChild(cardBody);
          var cardTitle = document.createElement('h5');
          cardTitle.style.height='5vh';
          cardTitle.className = 'card-title'; 
          
          cardTitle.textContent = results['results'][i]['title'];
      
          cardBody.appendChild(cardTitle);
  
          var ul = document.createElement('ul');
          ul.className='list-group list-group-flush'; 
          divCard.appendChild(ul);
          var li = document.createElement('li');
          li.className='list-group-item bg-info';   
          var txt ='Release date : '  
          li.textContent = txt.concat(results['results'][i]['release_date']);
          ul.appendChild(li);
   }
    }
    else if(cards.children.length>0&& cards.children.length<=12)
    {
      document.querySelector('#search-cards').innerHTML="";
      searchFunction();
    }
  }  
  
  
              
