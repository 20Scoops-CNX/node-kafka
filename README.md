# node kafka 

## How to run 

  1. start kafka 
  ```
    docker-compose -up -d
  ```

  2. run consumer 
  ```
  yarn ts-node src/consumer.ts
  ```

  3. run producer
  ```
  yarn ts-node src/producer.ts
  ```
