let netflixSeriesList = new Collection();

displayNetflixSeries();

DataService.getSeries().then(data => {
    fillSeriesArrayFromServer(data);
    displayNetflixSeries();
});

function fillSeriesArrayFromServer(data) {
    for (let i = 0; i < data.length; i++) {
        const object = data[i];
        const serie = new Serie(object.title, object.creator, object.seasons, object.isCompleted, object.upVotes, object.downVotes, object.imageUrl, object.id);
        netflixSeriesList.addSerie(serie);
    };
};

function orderByTitle() {
    netflixSeriesList.sortByTitle();
    const orderSpan = document.getElementById('order-span');
    orderSpan.innerHTML = 'Order by TITLE';
    displayNetflixSeries();
};

function orderByUpVotes() {
    netflixSeriesList.sortByUpVotes();
    const orderSpan = document.getElementById('order-span');
    orderSpan.innerHTML = 'Order by UP VOTES';
    displayNetflixSeries();
};

function orderByDownVotes() {
    netflixSeriesList.sortByDownVotes();
    const orderSpan = document.getElementById('order-span');
    orderSpan.innerHTML = 'Order by DOWN VOTES';
    displayNetflixSeries();
};

function orderByBestSeries() {
    netflixSeriesList.sortByBestSeries();
    const orderSpan = document.getElementById('order-span');
    orderSpan.innerHTML = 'Order by BEST VOTES';
    displayNetflixSeries();
};

function displayNetflixSeries() {
    createListForSeries();
    functionForUpVotesButton();
    functionForDownVotesButton();
};

function createListForSeries() {
    const seriesBox = document.getElementById('series-box');
    seriesBox.innerHTML = '';
    const seriesArray = netflixSeriesList.series;
    for (let i = 0; i < seriesArray.length; i++) {
        const serie = seriesArray[i];
        seriesBox.innerHtml += `<div class='serie'>
                                    <img class='serie-img' src='${serie.imageUrl}' alt='Serie img'>
                                    <ul class='description-list'>
                                        <li>Title: ${serie.title}</li>
                                        <li>Creator: ${serie.creator}</li>
                                        <li>Seasons: ${serie.seasons}</li>
                                        <li>Status: ${serie.ifIsCompleted}</li>
                                        <li>Positive Votes: ${serie.upVotes}</li>
                                        <li>Negative Votes: ${serie.downVotes}</li>
                                    </ul>
                                    <span class='rating-span'>Rating: ${serie.rating()}</span>
                                    <button id='upVotes-btn${i}'><img class='votes-btn' src='./assets/thumbs-up-solid.svg' alt='up-icon'></button>
                                    <button id='downVotes-btn${i}'><img class='votes-btn' src='./assets/thumbs-down-solid.svg' alt='down-icon'></button>
                                </div>`;
    };
};

function functionForUpVotesButton() {
    for (let i = 0; i < netflixSeriesList.length; i++) {
        const serie = netflixSeriesList[i];
        const upVotesButton = document.getElementById('upVotes-btn' + i);
        upVotesButton.addEventListener('click', (event) => serie.upVotes + 1);
        displayNetflixSeries();
    };
};

function functionForDownVotesButton() {
    for (let i = 0; i < netflixSeriesList.length; i++) {
        const serie = netflixSeriesList[i];
        const downVotesButton = document.getElementById('downVotes-btn' + i);
        downVotesButton.addEventListener('click', (event) => serie.downVotes + 1);
        displayNetflixSeries();
    };
};