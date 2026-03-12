

// https://ghibli-api.vercel.app/api/films  http://www.omdbapi.com/?i=tt3896198&apikey=31123595//

async function main() {
    const movies = await fetch("https://ghibli-api.vercel.app/api/films");
    const moviesData = await movies.json();
        const userListElement = document.querySelector(".movies-list");
    console.log(moviesData);
    userListElement.innerHTML = moviesData.data.map( 
        (movies) => `<div class="movie-card">
            <div class="movie-card__container">
                <h3>Title</h3>
                <p><b>Release Date: </b></p>
                <p><b>Description: </b></p>
            </div>
        </div>`
            )
              .join("")
        
        }

main();



