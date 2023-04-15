class Serie{

    constructor(title, creator, seasons, isCompleted = false, upVotes, downVotes, imageUrl, id){
        this.title = title;
        this.creator = creator;
        this._seasons = seasons;
        this.isCompleted = isCompleted;
        this.upVotes = upVotes;
        this.downVotes = downVotes;
        this.imageUrl = imageUrl;
        if(id) {
            this.id = id;
        }
    };

    get seasons() {
        return this._seasons;
    };

    set seasons(newSeasons) {
        this._seasons = newSeasons;
        return this._seasons;
    };

    static fromSeriesObject(serieObject) {
        return new Serie(serieObject.title, serieObject.creator, serieObject.seasons, serieObject.isCompleted, serieObject.upVotes, serieObject.downVotes, serieObject.imageUrl, serieObject.id);
    };

    get ifIsCompleted() {
        if(this.isCompleted) {
            return 'Completed';
        };
        return 'In progress';
    };

    rating() {
        const totVotes = (this.upVotes + this.downVotes) / 100;
        const result = this.upVotes / totVotes;
        return result + '%';
    }

    compareByTitle(serie2) {
        return this.title.localeCompare(serie2.title);
    };

    compareByUpVotes(serie2) {
        if (this.upVotes > serie2.upVotes) {
            return 1;
        }else if ( this.upVotes < serie2.upVotes) {
            return -1;
        } else {
            return 0;
        };
    };

    compareByDownVotes(serie2) {
        if (this.downVotes > serie2.downVotes) {
            return 1;
        }else if (this.downVotes < serie2.downVotes) {
            return -1;
        } else {
            return 0;
        };
    };

    compareByBest(serie2) {
        const differenceVotes1 = this.upVotes - this.downVotes;
        const differenceVotes2 = serie2.upVotes - serie2.downVotes;
        if(differenceVotes1 > differenceVotes2) {
            return 1;
        } else if(differenceVotes1 < differenceVotes2) {
            return -1;
        } else {
            return 0;
        };
    };

    tiDbModel() {
        const dbModel = {
            title: this.title,
            creator: this.creator,
            seasons: this._seasons,
            isCompleted: this.isCompleted,
            upVotes: this.upVotes,
            downVotes: this.downVotes,
            imageUrl: this.imageUrl,
            id: this.id
        };
        return dbModel;
    };

};