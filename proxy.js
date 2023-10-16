const proxy = require('express-http-proxy');
const app = require('express')();
const cors = require('cors')
const port = 3500

app.use(cors())

app.use('/express1', proxy('http://localhost:3501'));
app.use('/express2', proxy('http://localhost:3502'));
app.use('/', proxy('http://localhost:3503'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})