import {Stream} from "@cheekypints/kafka-stream"
import {Db} from "mongodb";
import {MongoDbConnector, MongoDbConnectorSettings} from "@cheekypints/mongodb-connector";


export class KafkaConsumer {
    private kafkaStream: any;
    private mongoDbConfig: MongoDbConnectorSettings = {
        password: "password",
        user: "username",
        checkInterval: 10000,
        database: "fran-fullstack-practice",
        host: "localhost",
        port: 27017
    };
    private dbConnector: MongoDbConnector;

    constructor() {

        this.kafkaStream = new Stream("demo", {
            batchMaxWaitTime: 1,
            maxBatchSize: 1,
            minBatchSize: 1,
            consumer: {
                autoCommitIntervalMs: 100,
                fetchMaxBytes: 104857600,
                kafkaHost: "localhost:9092",
                groupId: "test-group-consumer-12",
                fromOffset: "earliest"
            }
        });

        this.dbConnector = new MongoDbConnector(this.mongoDbConfig);

    }


    start() {

        const readableStream = this.kafkaStream.subscribe();

        this.readMessages(readableStream);

    }


    async readMessages(readableStream) {

        for await (const message of readableStream) {

            await this.pushToMongo(message);

        }

    }


    async pushToMongo(payload) {

        const db: Db = await this.dbConnector.get();

        return await db.collection("fran-practice").insertOne(payload);

    }

}
