"use strict";
/*requiring mongodb node modules */
const mongodb = require("mongodb");
const assert = require("assert");

class Db {
  constructor() {
    this.mongoClient = mongodb.MongoClient;
    this.ObjectID = mongodb.ObjectID;
  }

  onConnect() {
    const mongoURL = process.env.DB_URL;
    return new Promise((resolve, reject) => {
      this.mongoClient.connect(
        mongoURL,
        { useUnifiedTopology: true },
        (err, client) => {
          var db = client.db("sample");
          if (err) {
            reject(err);
          } else {
            assert.strictEqual(null, err);
            resolve([db, client, this.ObjectID]);
          }
        }
      );
    });
  }
}
module.exports = new Db();
