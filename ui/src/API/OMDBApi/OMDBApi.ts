import axios from "axios"

export class OMDBApi {

    private baseUrl: string;

    constructor() {

        this.baseUrl = "http://0.0.0.0:8080/"

    }


    searchFilm(title) {

        const query = "search/"

        const requestURL = query + title

        axios.get(requestURL)

    }

    queryFilm(id) {

        const query = "film/"

        const requestURL = query + id

        axios.get(requestURL)

    }

}
