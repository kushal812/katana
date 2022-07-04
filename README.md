# katana

### Install

 - Run: ```npm install```
### Run

 - Run the Server in production mode : ```npm run start```
 - Run the Server in development mode : ```npm run dev```
 - Run all unit-tests : ```npm test```
 - Check for linting errors : ```npm run lint```
 - Fix for linting : ```npm run lint:fix```

### API doc

http://localhost:3000/api-docs

### Docker Install

  - starts the containers in the background and leaves them running : ```docker-compose up -d```
  - Stops containers and removes containers, networks, volumes, and images : ```docker-compose down```

Modify ```docker-compose.yml``` and ```Dockerfile``` file to your source code.

### ToDo

 - Create an automated structure to handle route registration and handle controllers error without try-catch in all controller functions.
 - Creating a collection containing the cards and then referencing the card objects to the deck
 - Creating a common error code structure for response
 - Need to replace mongo with in memory mongo for testing
 - Swagger may not be functional fully
