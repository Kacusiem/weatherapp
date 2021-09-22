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
}

const initializeApp = () => {
    connectHTMLElems();
    setupListeners();
}

document.addEventListener("DOMContentLoaded", initializeApp);

const onEnterSubmit = () => {

};

const onClickSubmit = () => {

};
