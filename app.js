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
    displayNetflixSeries();
};

function orderByUpVotes() {
    netflixSeriesList.sortByUpVotes();
    displayNetflixSeries();
};

function orderByDownVotes() {
    netflixSeriesList.sortByDownVotes();
    displayNetflixSeries();
};

function orderByBestSeries() {
    netflixSeriesList.sortByBestSeries();
    displayNetflixSeries();
};

function displayNetflixSeries() {
    const seriesBox = document.getElementById('series-box');
    seriesBox.innerHTML = '';
    const seriesArray = netflixSeriesList.series;
    for (let i = 0; i < seriesArray.length; i++) {
        const serie = seriesArray[i];
        // seriesBox.innerHtml += `<div id='series'>
        //                             <img class='serie-img' src='${serie.imageUrl}' alt='Series img'>
        //                             <ul class='description-list'>
        //                                 <li>Title: ${serie.title}</li>
        //                                 <li>Creator: ${serie.creator}</li>
        //                                 <li>Seasons: ${serie.seasons}</li>
        //                                 <li>Status: ${serie.ifIsCompleted}</li>
        //                                 <li>Positive Votes: ${serie.upVotes}</li>
        //                                 <li>Negative Votes: ${serie.downVotes}</li>
        //                             </ul>
        //                             <span class='rating-span'>Rating: ${serie.rating()}</span>
        //                             <button id='upVotes-btn${i}'><img class='votes-btn' src='./assets/thumbs-up-solid.svg' alt='up-icon'></button>
        //                             <button id='downVotes-btn${i}'><img class='votes-btn' src='./assets/thumbs-down-solid.svg' alt='down-icon'></button>ù
        //                         </div>`;
        const divSeries = document.createElement('div');
        divSeries.classList.add('series');

        const serieImg = document.createElement('img');
        serieImg.classList.add('series-img');
        serieImg.src = serie.imageUrl;

        const seriesUl = document.createElement('ul');

        const titleList = document.createElement('li');
        const creatorList = document.createElement('li');
        const seasonsList = document.createElement('li');
        const statusList = document.createElement('li');
        const positiveList = document.createElement('li');
        const negativeList = document.createElement('li');

        const titleText = document.createTextNode(`Title: ${serie.title}`);
        const creatorText = document.createTextNode(`Creator: ${serie.creator}`);
        const seasonsText = document.createTextNode(`Seasons: ${serie.seasons}`);
        const statusText = document.createTextNode(`Status: ${serie.ifIsCompleted}`);
        const positiveText = document.createTextNode(`Positive Votes: ${serie.upVotes}`);
        const negativeText = document.createTextNode(`Negative Votes: ${serie.downVotes}`);

        titleList.appendChild(titleText);
        creatorList.appendChild(creatorText);
        seasonsList.appendChild(seasonsText);
        statusList.appendChild(statusText);
        positiveList.appendChild(positiveText);
        negativeList.appendChild(negativeText);

        seriesUl.appendChild(titleList);
        seriesUl.appendChild(creatorList);
        seriesUl.appendChild(seasonsList);
        seriesUl.appendChild(statusList);
        seriesUl.appendChild(positiveList);
        seriesUl.appendChild(negativeList);

        const ratingSpan = document.createElement('span');
        ratingSpan.classList.add('rating-span');
        const ratingText = document.createTextNode('Rating: ' + serie.rating() + '%');
        ratingSpan.appendChild(ratingText);

        
        const upVotesBtn = document.createElement('button');
        const downVotesBtn = document.createElement('button');
        
        upVotesBtn.classList.add('upVotes-btn');
        downVotesBtn.classList.add('downVotes-btn');

        const upVotesImg = document.createElement('img');
        const downVotesImg = document.createElement('img');

        upVotesImg.src = './assets/up.svg';
        downVotesImg.src = './assets/down.svg';

        upVotesImg.classList.add('upVotes-img');
        downVotesImg.classList.add('downVotes-img');

        upVotesBtn.appendChild(upVotesImg);
        downVotesBtn.appendChild(downVotesImg);

        upVotesBtn.addEventListener('click', (event) => {
            serie.upVotesPlus();
            displayNetflixSeries();
            DataService.putSerie(serie).than(updateSerie => {
                displayNetflixSeries();
            });
        });
        downVotesBtn.addEventListener('click', (event) => {
            serie.downVotesPlus();
            displayNetflixSeries();
            DataService.putSerie(serie).than(updateSerie => {
                displayNetflixSeries();
            });
        });
        
        divSeries.appendChild(serieImg);
        divSeries.appendChild(seriesUl);
        divSeries.appendChild(ratingSpan);
        divSeries.appendChild(upVotesBtn);
        divSeries.appendChild(downVotesBtn);

        seriesBox.appendChild(divSeries);
    };
};