// this example for get all messages from message offset number until last message

import { Consumer, KafkaClient } from 'kafka-node';

const client = new KafkaClient({ kafkaHost: 'localhost:9092' });
const consumer = new Consumer(
  client,
  [{ topic: 'topic1', partition: 0, offset: 1 }],
  // offset ไว้กำหนดว่าจะอ่านตั้งแต่ message offset 1
  {
    autoCommit: false, //  true คือ เมื่อได้รับ message จะ  set message เป็น commit message อัตโนมัติ
    encoding: 'utf8',
    fromOffset: true // true คือ ดึง message ทั้งหมดตั้งแต่เริ่ม มา   false คือ  ดึงแค่ message ที่ยังไม่ได้ commit
  }
);

consumer.on('message', message => {
  console.log('consumer1 ==> message', message);
});

consumer.on('error', err => {
  console.log('error occur ', err);
});

consumer.on('offsetOutOfRange', err => {
  console.log('offsetOutOfRange occur ', err);
});

// consumer.commit( (err, data) =>  {
//   if (err) {
//     console.log('commit error', err);
//   }
//   console.log('commit Data', data);
// });
