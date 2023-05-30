// Use your own API key
const apiKey = "cafa1ccf";
const boton = document.getElementById("boton");
const botonRandom = document.getElementById("botonRandom");


botonRandom.addEventListener("click", function() {
  const randomPosition = Math.floor(Math.random() * peliculas.length);
  const randomMovie = peliculas[randomPosition];
  
  setTimeout(function() {
    window.scrollBy(0, 700);
  }, 800); // Sin retraso
  
  setTimeout(function() {
    getMovieData(randomMovie);
  }, 0); // Retraso de 200 milisegundos antes de llamar a getMovieData
});


boton.addEventListener('click', function() {
  const movieInput = document.getElementById('movieInput').value;
  setTimeout(function() {
    window.scrollBy(0, 700);
  }, 650); // Sin retraso
  
  setTimeout(function() {
    getMovieData(movieInput);
  }, 800);
});

let btn = null;
const apiYt = 'AIzaSyCDxZKywjasGyO5JMgq-djaSFqzdp2HqOU';



function getMovieData(title) {
  // Use fetch to make a GET request to OMDB with the title parameter
  fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => { 
      console.log(data)
      let movieDiv = document.getElementById("movie");

      // Create a row and divide it into two columns
      let movieRow = `<div class="row">
                        <div class="col-lg-6 col-xs-12 d-flex flex-column align-items-center text-center datos-container">
                          <img src="${data.Poster}">
                          <h1>${data.Title}</h1>
                          <p><strong>Género:</strong> ${data.Genre}</p>
                          <p><strong>Reparto:</strong> ${data.Actors}</p>
                          <p><strong>IMDB:</strong> ${data.imdbRating}</p>
                          <p><strong>Argumento:</strong> ${data.Plot}</p>
                        </div>
                        <div class="col-lg-6 col-xs-12 trailer-container">
                          <iframe id="trailer" src="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                      </div>`;

      // Replace the content of the div element with the new elements
      movieDiv.innerHTML = movieRow;

      // Create the delete button
      let deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Salir";
      deleteBtn.style.marginTop = "20px"; // Agrega margen superior
      deleteBtn.style.border = "none"; // Quita el borde
      deleteBtn.style.backgroundColor = "black"; // Cambia el color de fondo
      deleteBtn.style.color = "white"; // Cambia el color del texto
      deleteBtn.style.padding = "10px 20px"; // Agrega relleno
      deleteBtn.style.border = "1px solid white"
      deleteBtn.style.borderRadius = "5px"; // Agrega bordes redondeados
      deleteBtn.style.cursor = "pointer"; // Cambia el cursor al pasar sobre el botón
      deleteBtn.style.display = "block"; // Agrega un salto de línea después del botón
      deleteBtn.style.margin = "0 auto"; // Centra horizontalmente el botón
      deleteBtn.style.marginTop = "10 px";

      // Add event listener to the delete button to remove the movie container
      deleteBtn.addEventListener("click", function() {
        let movieDiv = document.getElementById("movie");
        movieDiv.classList.add("fade-out");
      
        // Espera un segundo antes de eliminar el contenido del div de la película
        setTimeout(function() {
          movieDiv.innerHTML = "";
          movieDiv.classList.remove("fade-out");
        }, 1000);
      });

      // Add the delete button to the movie container
      movieDiv.appendChild(deleteBtn);

      getYt(title);
    })
}

function getYt(title) {
// verificamos si ya existe un elemento de iframe en el contenedor principal
fetch(`https://www.googleapis.com/youtube/v3/search?part=id&q=${title} trailer&key=${apiYt}`)
.then(response => response.json())
.then(data => {
  const videoId = data.items[0].id.videoId;
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
  iframe.allow = 'autoplay; encrypted-media';
  iframe.allowfullscreen = true;
  iframe.style.width = '100%';
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  const movieDiv = document.getElementById('movie');
  movieDiv.querySelector('#trailer').src = iframe.src;
  movieDiv.classList.add("tracking-in-expand");
})
.catch(error => console.error(error));
}
      

const peliculas = [
  "The Godfather",
  "The Shawshank Redemption",
  "The Dark Knight",
  "The Godfather: Part II",
  "12 Angry Men",
  "Schindler's List",
  "The Lord of the Rings: The Return of the King",
  "Pulp Fiction",
  "Forrest Gump",
  "The Empire Strikes Back",
  "Inception",
  "The Lord of the Rings: The Two Towers",
  "The Matrix",
  "Goodfellas",
  "Star Wars",
  "One Flew Over the Cuckoo's Nest",
  "Seven Samurai",
  "Se7en",
  "City of God",
  "The Silence of the Lambs",
  "It's a Wonderful Life",
  "Life is Beautiful",
  "Saving Private Ryan",
  "The Green Mile",
  "Interstellar",
  "The Prestige",
  "American History X",
  "Gladiator",
  "The Usual Suspects",
  "Léon: The Professional",
  "The Lion King",
  "The Departed",
  "Whiplash",
  "Terminator 2: Judgment Day",
  "Back to the Future",
  "Alien",
  "Raiders of the Lost Ark",
  "Psycho",
  "The Shining",
  "The Terminator",
  "Jaws",
  "The Exorcist",
  "Jurassic Park",
  "The Godfather: Part III",
  "Apocalypse Now",
  "The Good, the Bad and the Ugly",
  "Taxi Driver",
  "The French Connection",
  "Rocky",
  "The Graduate",
  "The Bridge on the River Kwai",
  "Singin' in the Rain",
  "Gone with the Wind",
  "Casablanca",
  "The Maltese Falcon",
  "Vertigo",
  "Some Like It Hot",
  "On the Waterfront",
  "West Side Story",
  "A Streetcar Named Desire",
  "Ben-Hur",
  "The Ten Commandments",
  "Doctor Zhivago",
  "Lawrence of Arabia",
  "Gandhi",
  "The Sound of Music",
  "The Wizard of Oz",
  "King Kong",
  "Snow White and the Seven Dwarfs",
  "Gone Girl",
  "The Revenant",
  "Mad Max: Fury Road",
  "Birdman",
  "The Grand Budapest Hotel",
  "Her",
  "The Social Network",
  "Avatar",
  "Up",
  "Inside Out",
  "Toy Story",
  "Finding Nemo",
  "The Incredibles",
  "Ratatouille",
  "WALL-E",
  "The Lion King",
  "Aladdin",
  "Beauty and the Beast",
  "The Little Mermaid",
  "Mulan",
  "Frozen",
  "Moana",
  "Coco",
  "Toy Story 4",
  "The Lion King (2019)"
]

function isVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  var offset = -500; // Ajusta esta cantidad según tus necesidades

  return !(rect.bottom < 0 || rect.top - viewHeight + offset >= 0);
}

window.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    document.querySelectorAll(".paused").forEach(function(elm) {
      if (isVisible(elm)) {
        elm.classList.remove("paused");
      }
    });
  });
});

