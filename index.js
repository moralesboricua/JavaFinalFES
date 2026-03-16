

// https://ghibli-api.vercel.app/api/films  http://www.omdbapi.com/?i=tt3896198&apikey=31123595//



async function main(filter) {
    

    const movies = await fetch("https://ghibli-api.vercel.app/api/films");
    const moviesData = await movies.json();
        const userListElement = document.querySelector(".movies");

        let filteredArray = moviesData.data;
        
        if (filter === 'Oldest to newest') {
            console.log(filter);
            filteredArray = filteredArray.sort((a, b) => a.release_date - b.release_date);
        }
        else if (filter === 'Newest to oldest') {
            filteredArray = filteredArray.sort((a, b) => b.release_date - a.release_date);
        }
        else if (filter === 'Alphabetical A to Z') {
            filteredArray = filteredArray.sort((a, b) => a.title.localeCompare(b.title));
        }
        else if (filter === 'Alphabetical Z to A') {
            filteredArray = filteredArray.sort((a, b) => b.title.localeCompare(a.title));
        }
     console.log(moviesData);
    userListElement.innerHTML = filteredArray.map((movies) => moviesHTML(movies)).join("");
        
        }
        
main();


function filterMovies(event) {
    main(event.target.value);
}

function moviesHTML(movies) {
    return `<div class="movie-card">
            <div class="movie-card__container">
            <figure class="book__img--wrapper">
                <img src="${movies.image}" alt="" class="book__img">
            </figure>
                <h3>${movies.title}</h3>
                <p><b>Release Date: </b>${movies.release_date}</p>
                <p><b>Description: </b>${movies.description}</p>
            </div>
        </div>`;
}

new Promise((resolve) => {
    setTimeout(async() => {
        resolve([
            
        ])
    }, 1000)
})

       

