class DataService{

    static getSeries(){
        return fetch('https://6436b2de3e4d2b4a12d94d2d.mockapi.io/NetflixSeries')
            .then(resp => resp.json());
    };

    static putSerie(serie){
        const jsonSerie = JSON.stringify(serie.tiDbModel());
        return fetch('https://6436b2de3e4d2b4a12d94d2d.mockapi.io/NetflixSeries/' + serie.id, {method: 'PUT', body: jsonSerie, headers: {'content-type':'application/json'}}).then(resp => resp.json());
    };

    static postSerie(serie){
        const jsonSerie = JSON.stringify(serie.tiDbModel());
        return fetch('https://6436b2de3e4d2b4a12d94d2d.mockapi.io/NetflixSeries/', {method: 'POST', body: jsonSerie, headers: {'content-type':'application/json'}}).then(resp => resp.json());
    };

};