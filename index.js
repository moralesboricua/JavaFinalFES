

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
    userListElement.innerHTML = filteredArray.slice(0, 6).map((movies) => moviesHTML(movies)).join("");
                                            //^^slice is choosing where to start in the results, and how many results to print
        }
        
main();




function filterMovies(event) {
    main(event.target.value);
}

function moviesHTML(movies) {
    return `<div class="movie-card">
            <div class="movie-card__container">
            <figure class="movie__img--wrapper">
                <img src="${movies.image}" alt="" class="movie__img">
            </figure>
            <div class="movie__card--spacer">
                <h3>${movies.title}</h3>
                <p><b>Release Date: </b>${movies.release_date}</p>
                <p><b>Description: </b>${movies.description}</p>
            </div>    
            </div>
        </div>`;
}

//function moviesHTML(movie) {
  //const bg = movie.image;
  //const bgUrl = `background-image: url('${movie.image}')`;
  //return `
    //<div class="movie-card" style="${bgUrl}">
      //<div class="movie-card__container">
        //<h3>${movie.title}</h3>
        //<p><b>Release Date: </b>${movie.release_date}</p>
        //<p><b>Description: </b>${movie.description}</p>
      //</div>
    //</div>`;
//}
       

