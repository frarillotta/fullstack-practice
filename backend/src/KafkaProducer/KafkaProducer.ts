//TODO: add configurator decorator to fix logger for kafka.push

import {Stream} from "@cheekypints/kafka-stream";

export class KafkaProducer {

    private topic: Stream;

    constructor() {

        this.topic = new Stream("demo", {
            batchMaxWaitTime: 1,
            maxBatchSize: 1,
            minBatchSize: 1,
            objectFlattening: true,
            topic: {
                replicationFactor: 1,
                partitions: 1
            },
            producer: {
                kafkaHost: "localhost:9092"
            }
        });

    }


    public push(message) {

        return this.topic.push([
            {
                message: {
                    id: message
                }
            }
        ]).then((numOfMessages) => {

            console.log("Pushed messages", numOfMessages);

        }).catch((error) => {

            console.log(error);

        });

    }


}
