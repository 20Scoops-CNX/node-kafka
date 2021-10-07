# node js kafka 

## How to run 
  1. clone Kafka docker  from  [repository](https://github.com/saman-waruka/kafka-docker-from-original)
  2. change <span style="background-color: #334756">KAFKA_ADVERTISED_HOST_NAME</span> in file  <span style="background-color: #334756"> docker-compose.yml </span>
  3. start kafka 
  ```
    docker-compose -up -d
  ```


After started Kafka success  back to this repository 

  1. run consumer 

  ```
  node consumer1.js
  ```

  2. run producer
  ```
  node producer1.js
  ```