import { Consumer, KafkaClient } from 'kafka-node';
import {
  showConsumerMessage,
  showErrorMessage,
  showOffsetOutOfRangeMessage
} from '../utils/logs-message';

const client = new KafkaClient({ kafkaHost: 'localhost:9092' });
const consumer = new Consumer(client, [{ topic: 'topic2', partition: 1 }], {
  autoCommit: false, //  true คือ เมื่อได้รับ message จะ  set message เป็น commit message อัตโนมัติ
  encoding: 'utf8',
  fromOffset: false // true คือ ดึง message ทั้งหมดตั้งแต่เริ่ม มา   false คือ  ดึงแค่ message ที่ยังไม่ได้ commit,
});

consumer.on('message', message => {
  showConsumerMessage(message, 'consumer2');
});

consumer.on('error', showErrorMessage);

consumer.on('offsetOutOfRange', showOffsetOutOfRangeMessage);
