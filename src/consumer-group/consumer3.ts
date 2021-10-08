import { ConsumerGroup, ConsumerGroupOptions } from 'kafka-node';
import {
  showConsumerMessage,
  showErrorMessage,
  showOffsetOutOfRangeMessage
} from '../utils/logs-message';

const topics = 'topic2';

const consumerOption: ConsumerGroupOptions = {
  id: 'consumer3',
  kafkaHost: 'localhost:9092',
  groupId: 'exampleTestGroup',
  sessionTimeout: 15000,
  protocol: ['roundrobin'],
  fromOffset: 'earliest', // equivalent of auto.offset.reset valid values are 'none', 'latest', 'earliest'
  autoCommit: true,
  encoding: 'utf8'
};

const consumer = new ConsumerGroup(consumerOption, topics);
// const consumer = new Consumer(client, [{ topic: 'topic2', partition: 0 }], {
//   autoCommit: false, //  true คือ เมื่อได้รับ message จะ  set message เป็น commit message อัตโนมัติ
//   encoding: 'utf8',
//   fromOffset: false // true คือ ดึง message ทั้งหมดตั้งแต่เริ่ม มา   false คือ  ดึงแค่ message ที่ยังไม่ได้ commit,
// });

consumer.on('message', message => {
  showConsumerMessage(message, 'consumer3');
});

consumer.on('error', showErrorMessage);

consumer.on('offsetOutOfRange', showOffsetOutOfRangeMessage);
