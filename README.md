# node kafka 

### Start kafka host
  ```
    docker-compose -up -d
  ```
-----
  <br>


## How to run normal Producer

  1. run consumer 
  ```
  yarn ts-node src/consumer.ts
  ```

  2. run producer
  ```
  yarn ts-node src/producer.ts
  ```
-----
<br>

## How to run High Level Producer 

  1. run consumers

  ```
  yarn ts-node src/consume-spacific-partition/consumer-topic2-p0.ts
  yarn ts-node src/consume-spacific-partition/consumer-topic2-p1.ts
  yarn ts-node src/consume-spacific-partition/consumer-topic2-p2.ts
  ```

  2. run producer
  ```
  yarn ts-node src/highlevel-producer.ts
  ```
