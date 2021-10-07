/* eslint-disable @typescript-eslint/no-var-requires */

const { exit } = require('process');

/* eslint-disable no-undef */
const kafka = require('kafka-node'),
  Producer = kafka.Producer,
  client = new kafka.KafkaClient(),
  producer = new Producer(client);

const data = {
  k1: 'v1',
  k2: 'v2',
  k3: 'v3'
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
    exit();
  });
});

producer.on('error', function (err) {
  console.log('error occur', err);
});
