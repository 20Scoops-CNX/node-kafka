/* eslint-disable @typescript-eslint/no-var-requires */
// This example demonstrate HiglevelProducer to send message by  Round-robins produce requests to the available topic partitions

import { exit } from 'process';
import { KafkaClient, HighLevelProducer } from 'kafka-node';

const client = new KafkaClient({ kafkaHost: 'localhost:9092' }),
  producer = new HighLevelProducer(client);

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
      attributes: 2,
      timestamp: Date.now()
    },
    {
      topic: 'topic2',
      key: 'theKey2',
      messages: JSON.stringify(data),
      attributes: 2,
      timestamp: Date.now()
    },
    {
      topic: 'topic2',
      key: 'theKey3',
      messages: JSON.stringify(data),
      attributes: 2,
      timestamp: Date.now()
    }
  ];
  producer.send(payloads, (err, data) => {
    if (err) {
      console.log('error occur while sending', err);
    }
    console.log(data);
  });

  console.timeEnd('time-usage');
});

producer.on('error', err => {
  console.log('error occur', err);
});

process.on('exit', (...args) => {
  console.log('process exit args => ', args);
});
