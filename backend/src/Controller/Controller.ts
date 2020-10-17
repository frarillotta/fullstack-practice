import {RestServer, Get, Post} from "@cheekypints/rest-ts"
import S from "fluent-schema";
import {Db, FilterQuery} from "mongodb";
import {MongoDbConnector, MongoDbConnectorSettings} from "@cheekypints/mongodb-connector";

export class Controller {

    private restServer: RestServer;
    private dbConnector: MongoDbConnector;
    private mongoDbConfig: MongoDbConnectorSettings = {
        password: "password",
        user: "username",
        checkInterval: 10000,
        database: "fran-fullstack-practice",
        host: "mongodb://localhost:27017",
        port: 27017
    };

    constructor() {

        this.restServer = new RestServer({
            port: 8080,
            cors: {
                origin: "*"
            }
        });

        this.dbConnector = new MongoDbConnector(<MongoDbConnectorSettings>this.mongoDbConfig);

    }


    @Get("/message", {
        response: {
            200: S.object()
                .description("Response of GET THING")
                .prop("message", S.number().required())
        }
    })
    public async get(request) {

        const data = await this.getData(request.query);

        return {
            statusCode: 200,
            body: data
        };

    }


    private getData(query: FilterQuery<any>) {

        //breaks right the fuck here
        this.dbConnector.get().then((db)=>{

            return db.collection("fran-practice").find({})

        });

    }


    public start() {

        this.restServer.start([Controller]).then((rest) => {

            console.log(rest);

        });

    }

}
