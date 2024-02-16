var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  let login = `
    <button>logga in</button>
  `

  res.send(login);
});

module.exports = router;
