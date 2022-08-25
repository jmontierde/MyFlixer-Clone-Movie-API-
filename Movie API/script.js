/* Example API Request 
https://api.themoviedb.org/3/movie/550?api_key=241c515673ad0808bf7395c472686f48 */

// const apiKey = 'api_key=241c515673ad0808bf7395c472686f48';
// const baseURL = 'https://api.themoviedb.org/3';
// const apiURL = `${baseURL}/discover/movie?sort_by=popularity.desc&${apiKey}` 
// const imgURL = 'https://image.tmdb.org/t/p/w500/';
// const movieSubContainer = document.querySelector('.movie-subContainer');
// function getMovies(){
//     fetch(apiURL)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.results)
//         movieSubContainer.innerHTML = '';

//         data.results.forEach(movie => {
//         const {title, poster_path, vote_average, overview} = movie;

//         console.log(movie.title);

//         const movieEl = document.createElement('div');
//         movieEl.classList.add('movie-list');
//         movieEl.innerHTML = `
//             <img src="${imgURL + poster_path}" alt="">
//             <h3 class="title">${title}</h3 class="title">
//         `
//         movieSubContainer.appendChild(movieEl);
//         })
//     })
// }
// getMovies()




fetch('https://api.cognitive.microsofttranslator.com/languages?api-version=3.0&scope=translation')
.then(res => res.json())
.then(data => {
    console.log(data);
})
// function showMovies(data){
//     movieSubContainer.innerHTML = '';
//     data.forEach(movie => {
//     const {title, poster_path, vote_average, overview} = movie;

//         const movieEl = document.createElement('div');
//         movieEl.classList.add('movie-list');
//         movieEl.innerHTML = `
//             <img src="${imgURL+poster_path}" alt="">
//             <h3 class="title">${title}</h3 class="title">
//         `
//         movieSubContainer.appendChild(movieEl);
//     });
   
// }


// function getMovies(){
//     fetch(apiURL)
//     .then(res => res.json())
//     .then(data => {
//         let html = '';
//         data.forEach(movie => {
//         const {title, poster_path, vote_average, overview} = movie;

//             html += `
//                 <img src="${imgURL+poster_path}" alt="">
//                 <h3 class="title">${title}</h3 class="title">
//             `
//         });

//         movieSubContainer.appendChild(html);
//     }) 
// }
// getMovies(); 
