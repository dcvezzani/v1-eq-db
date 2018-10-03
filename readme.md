
### Set up

#### Babel

Set up Express server to use Babel

https://github.com/babel/example-node-server

```
    "start": "nodemon ./bin/www --exec babel-node --presets es2015,stage-2", 
    "build": "babel lib -d dist --presets es2015,stage-2",
    "serve": "node dist/index.js"
```


#### Database

Using the pg client directly:

```
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});
```

```
  .get('/db', async (req, res) => {
      try {
        const client = await pool.connect()
        const result = await client.query('SELECT * FROM test_table');
        const results = { 'results': (result) ? result.rows : null};
        res.json( results );
        client.release();
      } catch (err) {
        console.error(err);
        res.send("Error " + err);
      }
    })
```

Using the knex client:

```
import db from './db.js'
```

```
  .get('/db', (req, res) => {
      try {
        db("ward_members").select().asCallback((err, rows) => {
          console.log("rows", err, rows);
           res.json( rows );
        })
      } catch (err) {
        console.error(err);
        res.send("Error " + err);
      }
    })
```

### Resources

Express and Knex cheat sheet:

https://gist.github.com/laurenfazah/e0b0033cdc40a313d4710cc04e654556

Database migrations guide:

http://perkframework.com/v1/guides/database-migrations-knex.html

JSON Generator (from schema)

https://next.json-generator.com

Babel setup for Express app

https://github.com/babel/example-node-server

Heroku cheat sheet
* https://devhints.io/heroku
* https://devcenter.heroku.com/articles/git-clone-heroku-app

