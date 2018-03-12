# Hero Quotes!

This is a simple CRUD app that stores heroes and theirs messages (also some villains), to run this application you must have MongoDb installed on your pc or change the url param from **_"config/database.config.js"_** to your connection string.
### Basics

* [node.js](https://nodejs.org/en/) - evented I/O for the backend
* [Express](http://expressjs.com/) - fast node.js network app framework
* [MongoDB](https://www.mongodb.com/) - NoSQL database used to store stuff


```diff
- be sure you have installed npm first
```

If you don't have MongoDB installed, you can follow the steps [here](https://docs.mongodb.com/getting-started/shell/installation/) or create online, I suggest using [mlab](https://docs.mlab.com/)


### Running

After cloning the repository follow these commands:
```sh
$ npm install
```

```sh
$ node server.js
```
### Testing RestAPI

You can use postman but if you use Visual Code as your text editor, I recommend using the extension **_"REST Client_**, after installing it you can open the file "_app/http/rest.http_" and click on Send Request.