// const header = document.querySelector('header');
// const addMovieButton = header.querySelector('button');
// const modal = document.getElementById('add-modal');

// const toggleModal = () => {
//     modal.classList.toggle('visible');
// }

// addMovieButton.addEventListener('click', toggleModal);


// Aquire Modal in three ways
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const addMovieModal = document.getElementById('add-modal');



// Select ADD BUTTON ways
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const startAddMovieButton = document.querySelector('header button');



//Select Backdrop by two ways
// const backdrop = document.body.firstElementChild;
const backdrop = document.getElementById('backdrop');


//Select cancel button
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');

//Select add button
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

//Select inputs
// const userInputs = addMovieModal.getElementsByTagName('input');
const userInputs = addMovieModal.querySelectorAll('input');

//Select section
const entryTextSection = document.getElementById('entry-text');

//Select movie list
const movieList = document.getElementById('movie-list');

//Select remove movie Modal
const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];


const closeMovieDeletionModal = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
}

const updateUI = () => {
    if (movies.length === 0 ) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
}

const deleteMovieHandler = (movieId) => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    // movieList.children[movieIndex].remove();
    movieList.removeChild(movieList.children[movieIndex]);
    closeMovieDeletionModal();
    updateUI();
}

const startDeleteMovieHandler = (movieId) => {
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();
    const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

    confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

    cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal);

    cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
    confirmDeletionButton.addEventListener('click', deleteMovieHandler.bind(null, movieId));
} 

const renderNewMovie = (id, title, imageUrl, rating) => {
    const newMovie = document.createElement('li');
    newMovie.className = 'movie-element';
    newMovie.innerHTML = `
        <div class='movie-element__image'>
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating} / 5</p>
        </div>
        `
    newMovie.addEventListener('click', startDeleteMovieHandler.bind(null, id));
    movieList.append(newMovie);
}

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
}

const clearMovieInputs = () => {
    for (const userInput of userInputs) {
        userInput.value = '';
    }
};

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
}

const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackdrop();
};

const cancelAddMovieHandler = () => {
    closeMovieModal();
    toggleBackdrop();
    clearMovieInputs();
}

const backdropClickHandler = () => {
    closeMovieModal();
    closeMovieDeletionModal();
    clearMovieInputs();
}


const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (titleValue.trim() === '' || imageUrlValue.trim() === '' || ratingValue.trim() === '' || +ratingValue < 1 || +ratingValue > 5) {
        alert('Please enter valid values (rating between 1 and 5)');
        return;
    }

    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackdrop();
    clearMovieInputs();
    renderNewMovie(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
}

startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);