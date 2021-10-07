/* eslint-disable @typescript-eslint/no-var-requires */

import { exit } from 'process';
import { Producer, KafkaClient } from 'kafka-node';

const client = new KafkaClient({ kafkaHost: '192.168.1.108:9092' }),
  producer = new Producer(client);

const data = {
  k1: 'v1',
  k2: 'v2',
  k3: 'v3',
  k4: new Date()
};

const payloads = [
  {
    topic: 'topic1',
    key: 'theKey',
    messages: JSON.stringify(data),
    partition: 0,
    attributes: 2,
    timestamp: Date.now()
  }
];

producer.on('ready', function () {
  producer.send(payloads, function (err, data) {
    if (err) {
      console.log('error occur while sending', err);
    }
    console.log(data);
    exit(0);
  });
});

producer.on('error', function (err) {
  console.log('error occur', err);
});
