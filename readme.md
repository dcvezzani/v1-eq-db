
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
