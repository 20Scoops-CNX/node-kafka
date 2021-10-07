/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
var kafka = require('kafka-node'),
  Consumer = kafka.Consumer,
  client = new kafka.KafkaClient({ kafkaHost: '192.168.1.21:9092' }),
  consumer = new Consumer(client, [{ topic: 'topic1', partition: 0 }], {
    autoCommit: false,
    encoding: 'utf8'
  });

consumer.on('message', function (message) {
  console.log('consumer1 ==> message', message);
});

consumer.on('error', function (err) {
  console.log('error occur ', err);
});

consumer.on('offsetOutOfRange', function (err) {
  console.log('offsetOutOfRange occur ', err);
});

// consumer.commit(function (err, data) {
//   if (err) {
//     console.log('commit error', err);
//   }
//   console.log('commit Data', data);
// });
