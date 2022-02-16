const allButton = document.getElementById('selector-all');
const movieButton = document.getElementById('selector-movie');
const serieButton = document.getElementById('selector-series');
const serie = document.getElementById('serie');
const movieOne = document.getElementById('movie-01');
const movieTwo = document.getElementById('movie-02');


allButton.addEventListener('click', conteudoCompleto);
movieButton.addEventListener('click', onlyMovie);
serieButton.addEventListener('click', onlySeries);

function conteudoCompleto(){
    movieOne.classList.remove('hide');
    movieTwo.classList.remove('hide');
    serie.classList.remove('hide');
}

function onlyMovie(){
    movieOne.classList.remove('hide');
    movieTwo.classList.remove('hide');
    serie.classList.add('hide');
}

function onlySeries(){
    movieOne.classList.add('hide');
    movieTwo.classList.add('hide');
    serie.classList.remove('hide');
}


