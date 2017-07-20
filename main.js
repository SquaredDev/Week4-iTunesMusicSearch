//#RecipeSearchDailyProject

let title = document.querySelector('title');
let heading = document.querySelector('#heading');
let main = document.querySelector('#main');
let footing = document.querySelector('#footing');
let recipeI = document.querySelector('#recipe');
let searchI = document.getElementById('search');
let pic= document.getElementsByClassName('pic')
let audio = document.querySelector('.player');

const site = "https://itunes.apple.com/search?term="
let recipe = " "
let ingred = " "
let url = site + "hits"

searchI.addEventListener ("click", function(event) {
  recipe = recipeI.value
  url = site + recipe
  doFetch();
})

function doFetch() {
  fetch(url)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log(response.status);
          return;
        }
        response.json().then(function(data) {
          let titleStr = `${data.title} Search`

            let audioStr = ``
          // <section class="player">
          //   <audio class="music-player" controls="controls" src=""></audio>
          //   <hr>
          // </section>

            let mainStr = ``
          data.results.map(function(item) {
              mainStr += `<div class="boxes">`
              mainStr += `<div class="pic"><img class="profilePic" src="${item.artworkUrl100}"></div>`
              mainStr += `<audio class="music-player" controls="controls" src="${item.previewUrl}"></audio>`
              mainStr += `<p class="rName"><a href="${item.trackViewUrl}">${item.trackName}</a><br><a href="${item.artistViewUrl}">${item.artistName}</a><br>
              <a href="${item.collectionViewUrl}">${item.collectionName}</a></p>`
              mainStr += `</div>`
              main.innerHTML = mainStr
          })


          let footingStr = `<hr><footer>${data.title} Version ${data.version} <a href="${data.href}">${data.href}</a></footer>`
          footing.innerHTML = footingStr
        });
      }
    )
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
}

searchI.addEventListener ("click", function(event) {
  recipe = recipeI.value
  url = site + recipe
  doFetch();
})

doFetch()

if (pic.innerHTML === '<img class="profilePic" src="">') {
  console.log('what?');
}
