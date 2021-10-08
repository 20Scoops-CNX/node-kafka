/* eslint-disable @typescript-eslint/no-var-requires */

import { exit } from 'process';
import { Producer, KafkaClient, KeyedMessage } from 'kafka-node';

const client = new KafkaClient({ kafkaHost: 'localhost:9092' }),
  producer = new Producer(client);

const km = new KeyedMessage('key', 'message');
console.log({ km });

const payloads = [
  {
    topic: 'topic1',
    key: 'theKey',
    messages: km,
    partition: 0,
    attributes: 2,
    timestamp: Date.now()
  }
];

producer.on('ready', () => {
  producer.send(payloads, (err, data) => {
    if (err) {
      console.log('error occur while sending', err);
    }
    console.log(data);
    exit(0);
  });
});

producer.on('error', err => {
  console.log('error occur', err);
});
