import axios from "axios";
const baseUrl = "http://0.0.0.0:8080/";

export class OMDBApi {

    static searchFilm(title) {

        const query = "search/";

        const requestURL = baseUrl + query + title;

        return axios.get(requestURL).then((response)=> {

            return response.data

        })

    }

    static queryFilm(id) {

        const query = "film/"

        const requestURL = baseUrl + query + id

        axios.get(requestURL)

    }

}
