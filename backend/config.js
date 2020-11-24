const config = {
    RestServer: {
        port: 8080,
        cors: {
            origin: "*"
        }
    },
    mongoDB: {
        password: "password",
        user: "username",
        checkInterval: 10000,
        database: "fran-fullstack-practice",
        host: "localhost",
        port: 27017
    },
    DataDog: {
        disabledModules: ["dns", "net"],
        enabled: true,
        analytics: true,
        service: `SignalMetricsCollector.prd.${process.env.AWS_REGION}`,
        hostname: process.env.DD_AGENT_HOST,
        port: "8126",
        env: process.env.NODE_ENV
    },
    Logger: {
        level: "info",
        name: `SignalMetricsCollector.prd.${process.env.AWS_REGION}`
    },
    StatsD: {
        host: process.env.DD_AGENT_HOST,
        port: 8125,
        serviceName: `SignalMetricsCollector.prd.${process.env.AWS_REGION}`
    },
    MetricsController: {
        statsdIncrementStep: 500
    },
    MessageProcessor: {
        topics: {
            page: "signal-pages",
            impression: "signal-impressions",
            adoption: "connect-adoption",
            activation: "connect-activation"
        },
        statsdIncrementStep: 1000,
        kafka: {
            producer: {
                encoding: "buffer",
                kafkaHost: process.env.KAFKA_HOSTS,
                serializer: false
            },
            minBatchSize: 200,
            batchMaxWaitTime: 10
        }
    },
    MessageFieldCleaner: {
        maxCharacters: 100
    },
    AdFormatProvider: {
        permittedSizeDiff: 10
    }
};

export default config
