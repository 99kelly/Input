const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const releaseDate = document.querySelector('.userInputYear');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const yearToDisplay = document.querySelector('.movieYear')

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let movieYearInStorage = localStorage.getItem('year')

if(titleInStorage && imageUrlInStorage && movieYearInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.482), rgba(255, 192, 203, 0.509)), url('${imageUrlInStorage}')`;
    yearToDisplay.textContent = movieYearInStorage;
}


btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieYearInput = releaseDate.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('year', movieYearInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    yearToDisplay.textContent = movieYearInput;
    container.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.482), rgba(255, 192, 203, 0.509)), 
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    releaseDate.value = '';
    moviePosterUrl.value = '';
});