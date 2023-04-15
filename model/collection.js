class Collection{

    constructor(series = []){
        this.series = series;
    };

    addSerie(serie) {
        this.series.push(serie);
    };

    removeSerie(serie) {
        this.series = this.series.filter((element) => element !== serie);
    };

    sortByTitle() {
        return this.series.sort((serie1, serie2) => serie1.compareByTitle(serie2));
    };

    sortByUpVotes() {
        return this.series.sort((serie1, serie2) => serie1.compareByUpVotes(serie2));
    };

    sortByDownVotes() {
        return this.series.sort((serie1, serie2) => serie1.compareByDownVotes(serie2));
    };

    sortByBestSeries() {
        return this.series.sort((serie1, serie2) => serie1.compareByBest(serie2));
    };

    static fromObjectArray(objectArray) {
        const newSerieList = new Collection();
        for (let i = 0; i < objectArray.length; i++) {
            const serieObject = objectArray[i];
            const newSerie = new Serie.fromSeriesObject(serieObject);
            newSerieList.addSerie(newSerie);
        };
        return newSerieList;
    };

};