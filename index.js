

// https://ghibli-api.vercel.app/api/films  http://www.omdbapi.com/?i=tt3896198&apikey=31123595//

async function main() {
    const movies = await fetch("https://ghibli-api.vercel.app/api/films");
    const moviesData = await movies.json();
    console.log(
    moviesData.map( 
        (movies) => `<div class="movie-card">
            <div class="movie-card__container">
                <h3>Title</h3>
                <p><b>Release Date: </b> fghjklkjhgfd</p>
                <p><b>Description: </b> dfghjkjhgfd</p>
            </div>
        </div>`
            )
            .join("")
            );
    
    }

main();



