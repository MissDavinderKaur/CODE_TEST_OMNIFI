const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true} ));
app.use(cors());
app.use(express.static(`${__dirname}/public`));
app.use(morgan('dev'));
app.use(methodOverride(req => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.listen(port, () => {
  console.log(`Application has started on port: ${port}`);
});
