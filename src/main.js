import {getWeatherByCity} from './apiService.js';

const viewElems = {};

const getDOMElem = (id) => {
    return document.getElementById(id);
}

const connectHTMLElems = () => {
    viewElems.mainContainer = getDOMElem('mainContainer');
    viewElems.weatherSearchView = getDOMElem('weatherSearchView');
    viewElems.weatherForecastView = getDOMElem('weatherForecastView');

    viewElems.searchButton = getDOMElem('searchButton');
    viewElems.returnToSearchBtn = getDOMElem('returnToSearchBtn');
    viewElems.searchInput = getDOMElem('searchInput');

    viewElems.weatherCity = getDOMElem('weatherCity');
    viewElems.weatherIcon = getDOMElem('weatherIcon');

    viewElems.weatherCurrentTemp = getDOMElem('weatherCurrentTemp');
    viewElems.weatherMaxTemp = getDOMElem('weatherMaxTemp');
    viewElems.weatherMinTemp = getDOMElem('weatherMinTemp');
}

const setupListeners = () => {
    viewElems.searchInput.addEventListener("keydown", onEnterSubmit);
    viewElems.searchButton.addEventListener("click", onClickSubmit);
    viewElems.returnToSearchBtn.addEventListener("click", returnToSearch);
}

const initializeApp = () => {
    connectHTMLElems();
    setupListeners();
}

const onEnterSubmit = (event) => {
    // console.log(event);
    if(event.key === "Enter") {
        fadeInOut();
        let query = viewElems.searchInput.value;
        getWeatherByCity(query).then(data => {
            console.log(data);
            switchView();
            fadeInOut();
        });
    }
};

const onClickSubmit = () => {
    fadeInOut();
    let query = viewElems.searchInput.value;
    getWeatherByCity(query).then(data => {
        console.log(data);
        switchView();
        fadeInOut();
    });
};

const fadeInOut = () => {
    if(viewElems.mainContainer.style.opacity === "1" || 
       viewElems.mainContainer.style.opacity === "") {
        viewElems.mainContainer.style.opacity = '0';
    } else {
        viewElems.mainContainer.style.opacity = "1";
    }
}


const switchView = () => {
    if(viewElems.weatherSearchView.style.display !== 'none') {
        viewElems.weatherSearchView.style.display = 'none';
        viewElems.weatherForecastView.style.display = 'initial';
    } else {
        viewElems.weatherForecastView.style.display = 'none';
        viewElems.weatherSearchView.style.display = 'flex';
    }
}

const returnToSearch = () => {
    fadeInOut();
    setTimeout(() => {
        switchView();
        fadeInOut();
    }, 500);
}

document.addEventListener("DOMContentLoaded", initializeApp);