export interface Message {
  topic: string;
  value: string | Buffer;
  offset?: number;
  partition?: number;
  highWaterOffset?: number;
  key?: string | Buffer;
}

export const showErrorMessage = (err: unknown): void => {
  console.log('error occur ', err);
};
export const showOffsetOutOfRangeMessage = (err: unknown): void => {
  console.log('offsetOutOfRange occur ', err);
};

export const showConsumerMessage = (
  message: Message,
  consumerName = 'consumer'
): void => {
  console.log(`\n${consumerName} ==> incoming message\n`, message);
};
