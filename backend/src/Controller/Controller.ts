import {RestServer, Get, Post} from "@cheekypints/rest-ts"
import S from "fluent-schema";
import {Db, FilterQuery} from "mongodb";
import {MongoDbConnector, MongoDbConnectorSettings} from "@cheekypints/mongodb-connector";
import {KafkaProducer} from "../KafkaProducer/KafkaProducer";
import { OMDBClient } from "../OMDBClient/OMDBClient";
//TODO: put logger in or it'll keep crashing

export class Controller {

    private restServer: RestServer;
    private dbConnector: MongoDbConnector;
    private kafkaProducer: KafkaProducer;
    private mongoDbConfig: MongoDbConnectorSettings = {
        password: "password",
        user: "username",
        checkInterval: 10000,
        database: "fran-fullstack-practice",
        host: "localhost",
        port: 27017
    };
    private omdbClient: OMDBClient;

    constructor() {

        this.restServer = new RestServer({
            port: 8080,
            cors: {
                origin: "*"
            }
        });

        this.omdbClient = new OMDBClient();

        this.dbConnector = new MongoDbConnector(this.mongoDbConfig);

        this.kafkaProducer = new KafkaProducer();
    }


    @Get("/search/:title")
    public async getFilmList(request) {
        //TODO: make this shit better you idiot

        const data = await this.omdbClient.searchForMovie(request.params.title);

        return {
            statusCode: 200,
            body: data.Search
        };
        //
        // return {
        //     statusCode: 200,
        //     body: ([
        //             {
        //                 "Title": "Casper",
        //                 "Year": "1995",
        //                 "imdbID": "tt0112642",
        //                 "Type": "movie",
        //                 "Poster": "https://m.media-amazon.com/images/M/MV5BZThhYTlhMDUtMDhjZi00MTljLTkwMDYtOGU3ZjVlMWE4NDk4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        //             },
        //             {
        //                 "Title": "Casper Meets Wendy",
        //                 "Year": "1998",
        //                 "imdbID": "tt0140883",
        //                 "Type": "movie",
        //                 "Poster": "https://m.media-amazon.com/images/M/MV5BMTg5NDA4MTI4Ml5BMl5BanBnXkFtZTcwOTI1NjAzMQ@@._V1_SX300.jpg"
        //             },
        //             {
        //                 "Title": "Casper: A Spirited Beginning",
        //                 "Year": "1997",
        //                 "imdbID": "tt0118824",
        //                 "Type": "movie",
        //                 "Poster": "https://m.media-amazon.com/images/M/MV5BMTc1MjUwOTU3NF5BMl5BanBnXkFtZTcwOTE4MDMzMQ@@._V1_SX300.jpg"
        //             },
        //             {
        //                 "Title": "The Spooktacular New Adventures of Casper",
        //                 "Year": "1996–1998",
        //                 "imdbID": "tt0115128",
        //                 "Type": "series",
        //                 "Poster": "https://m.media-amazon.com/images/M/MV5BMjE2MDY4MDk4OV5BMl5BanBnXkFtZTcwMTUxNjYyMQ@@._V1_SX300.jpg"
        //             },
        //             {
        //                 "Title": "Casper & Mandrilaftalen",
        //                 "Year": "1999–",
        //                 "imdbID": "tt0270762",
        //                 "Type": "series",
        //                 "Poster": "N/A"
        //             },
        //             {
        //                 "Title": "Casper: The Friendly Ghost",
        //                 "Year": "1945",
        //                 "imdbID": "tt0037582",
        //                 "Type": "movie",
        //                 "Poster": "https://m.media-amazon.com/images/M/MV5BMTI1OTIxMTQwNl5BMl5BanBnXkFtZTcwMTI5MzQyMQ@@._V1_SX300.jpg"
        //             },
        //             {
        //                 "Title": "Casper & Mandrilaftalen: Fisso",
        //                 "Year": "2003",
        //                 "imdbID": "tt0364256",
        //                 "Type": "movie",
        //                 "Poster": "N/A"
        //             },
        //             {
        //                 "Title": "Casper & Frank - Nu som mennesker",
        //                 "Year": "2012",
        //                 "imdbID": "tt2536606",
        //                 "Type": "movie",
        //                 "Poster": "https://m.media-amazon.com/images/M/MV5BNWRmNTU2YzMtOTY5MC00ZGU2LWI1MDQtZjBhY2ZlZDBhZjZmXkEyXkFqcGdeQXVyNDQyOTMzODg@._V1_SX300.jpg"
        //             },
        //             {
        //                 "Title": "Casper and Emma - Best Friends",
        //                 "Year": "2013",
        //                 "imdbID": "tt2581664",
        //                 "Type": "movie",
        //                 "Poster": "https://m.media-amazon.com/images/M/MV5BMTYxNTM2ODk3Nl5BMl5BanBnXkFtZTcwNTI3NjE5OA@@._V1_SX300.jpg"
        //             },
        //             {
        //                 "Title": "Casper",
        //                 "Year": "1949–",
        //                 "imdbID": "tt2638376",
        //                 "Type": "series",
        //                 "Poster": "https://m.media-amazon.com/images/M/MV5BMTgyOTMxMDE2OF5BMl5BanBnXkFtZTgwNTcwOTAxMzE@._V1_SX300.jpg"
        //             }])
        // }
    }


    @Get("/film/:id")
    public async getFilmReviews(request) {
        //TODO: make this shit better you idiot

        const data = await this.omdbClient.getMovieFromId(request.params.id);

        return {
            statusCode: 200,
            body: data
        };

    }


    @Post("/review")
    public async post (request) {
        //TODO: in the request get the review for the film Id and the user name that posted that review
        await this.kafkaProducer.push(request.body);

    }


    private async getData(query: FilterQuery<object>) {

        const db: Db = await this.dbConnector.get();

        return await db.collection("fran-practice").find(query).toArray();

    }


    public start() {

        this.restServer.start([Controller]).then((rest) => {

            console.log(rest);

        });

    }

}
