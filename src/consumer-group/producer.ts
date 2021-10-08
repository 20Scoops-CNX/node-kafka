/* eslint-disable @typescript-eslint/no-var-requires */

import { exit } from 'process';
import { Producer, KafkaClient } from 'kafka-node';

const client = new KafkaClient({ kafkaHost: 'localhost:9092' }),
  producer = new Producer(client);

const data = {
  k1: 'v1',
  k2: 'v2',
  k3: 'v3',
  k4: new Date()
};

producer.on('ready', () => {
  console.time('time-usage');
  const payloads = [
    {
      topic: 'topic2',
      key: 'theKey',
      messages: JSON.stringify(data),
      partition: 0,
      attributes: 2,
      timestamp: Date.now()
    },
    {
      topic: 'topic2',
      key: 'theKey2',
      messages: JSON.stringify(data),
      partition: 1,
      attributes: 2,
      timestamp: Date.now()
    },
    {
      topic: 'topic2',
      key: 'theKey3',
      messages: JSON.stringify(data),
      partition: 2,
      attributes: 2,
      timestamp: Date.now()
    }
  ];
  producer.send(payloads, (err, data) => {
    if (err) {
      console.log('error occur while sending', err);
    }
    console.log(data);
    exit(0);
  });
  console.timeEnd('time-usage');
});

producer.on('error', err => {
  console.log('error occur', err);
});

process.on('exit', (...args) => {
  console.log('process exit args => ', args);
});
