import { KafkaConsumer } from "./KafkaConsumer/KafkaConsumer";

export class Kafka {

    start() {

        const kafkaConsumer = new KafkaConsumer();
        kafkaConsumer.start();

    }

}

new Kafka().start();
