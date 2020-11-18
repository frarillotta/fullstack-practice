import axios from "axios"

export class OMDBClient {
    private omdbURLBase: string;
    private apiKey: string;

    constructor() {

        this.omdbURLBase = "http://www.omdbapi.com/";
        this.apiKey = "&apikey=d678e86d"

    }


    public async getMovieFromId(title) {

        const operation = "?i="

        return this.get(operation, title);

    }


    public async searchForMovie(query) {

        const operation = "?s="

        return this.get(operation, query);

    }


    private async get(operation, query) {

        console.log('operation', operation, query)

        const requestUrl = this.omdbURLBase + operation + query + this.apiKey;

        console.log(requestUrl);
        return (await axios.get(requestUrl)).data;

    }

}
