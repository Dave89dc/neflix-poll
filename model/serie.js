class Serie{

    constructor(title, creator, seasons, isCompleted = false, upVotes, downVotes, imageUrl, id){
        this.title = title;
        this.creator = creator;
        this._seasons = seasons;
        this._isCompleted = isCompleted;
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

    get isCompleted() {
        return this._isCompleted;
    }

    set isCompleted(status) {
        if(typeof status === 'boolean') {
            this._isCompleted = status;
            return this._isCompleted;
        };
        return this._isCompleted;
    };

    static fromSeriesObject(serieObject) {
        return new Serie(serieObject.title, serieObject.creator, serieObject.seasons, serieObject.isCompleted, serieObject.upVotes, serieObject.downVotes, serieObject.imageUrl, serieObject.id);
    };

    get ifIsCompleted() {
        if(this._isCompleted) {
            return 'Completed';
        };
        return 'In progress';
    };

    upVotesPlus() {
        const n = this.upVotes;
        this.upVotes = n + 1;
        return this.upVotes;
    };

    downVotesPlus() {
        const n = this.downVotes;
        this.downVotes = n + 1;
        return this.downVotes;
    };

    rating() {
        if(this.upVotes !== 0) {
            const totVotes = (this.upVotes + this.downVotes) / 100;
            const result = this.upVotes / totVotes;
            return Math.trunc(result);
        }
        return 0;
    };

    compareByTitle(serie2) {
        return this.title.localeCompare(serie2.title);
    };

    compareByUpVotes(serie2) {
        if (this.upVotes > serie2.upVotes) {
            return -1;
        }else if ( this.upVotes < serie2.upVotes) {
            return 1;
        } else {
            return 0;
        };
    };

    compareByDownVotes(serie2) {
        if (this.downVotes > serie2.downVotes) {
            return -1;
        }else if (this.downVotes < serie2.downVotes) {
            return 1;
        } else {
            return 0;
        };
    };

    compareByBest(serie2) {
        const rating1 = this.rating();
        const rating2 = serie2.rating();
        if(rating1 > rating2) {
            return -1;
        } else if(rating1 < rating2) {
            return 1;
        } else {
            return 0;
        };
    };

    tiDbModel() {
        const dbModel = {
            title: this.title,
            creator: this.creator,
            seasons: this._seasons,
            isCompleted: this._isCompleted,
            upVotes: this.upVotes,
            downVotes: this.downVotes,
            imageUrl: this.imageUrl,
            id: this.id
        };
        return dbModel;
    };

};