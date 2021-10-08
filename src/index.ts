import { Producer, KafkaClient, KeyedMessage } from 'kafka-node';

const client = new KafkaClient({ kafkaHost: '192.168.1.108:9092' });
const producer = new Producer(client);

const km = new KeyedMessage('key', 'message'),
  payloads = [
    { topic: 'topic1', messages: 'hi', partition: 0 },
    // { topic: 'topic2', messages: ['hello', 'world', km], partition: 1 },
    { topic: 'topic2', messages: km, partition: 1 },
    {
      topic: 'topicName',
      messages: ['message body'], // multi messages should be a array, single message can be just a string or a KeyedMessage instance
      key: 'theKey', // string or buffer, only needed when using keyed partitioner
      partition: 0, // default 0
      attributes: 2, // default: 0
      timestamp: Date.now() // <-- defaults to Date.now() (only available with kafka v0.10+)
    }
  ];
console.log({ km });
producer.on('ready', () => {
  producer.send(payloads, (err, data) => {
    if (err) {
      console.error(' errr', err);
    }

    console.log('sent');
    console.log(data);
  });
});

producer.on('error', err => {
  console.log('error occur', err);
});
