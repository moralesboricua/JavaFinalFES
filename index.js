

// https://ghibli-api.vercel.app/api/films  http://www.omdbapi.com/?i=tt3896198&apikey=31123595//

async function main(filter) {
    const movies = await fetch("https://ghibli-api.vercel.app/api/films");
    const moviesData = await movies.json();
        const userListElement = document.querySelector(".movies");

        
        if (filter === 'Oldest to newest') {
            console.log(filter);
            const filteredMovies = movies.sort((a, b) => {a.release_date - b.release_date});
            console.log(filteredMovies)
        }
    
    userListElement.innerHTML = moviesData.data.map((movies) => moviesHTML(movies)).join("");
        
        }
        
main();

function filterMovies(event) {
    main(event.target.value);
}

function moviesHTML(movies) {
    return `<div class="movie-card">
            <div class="movie-card__container">
                <h3>${movies.title}</h3>
                <p><b>Release Date: </b>${movies.release_date}</p>
                <p><b>Description: </b>${movies.description}</p>
            </div>
        </div>`;
}
