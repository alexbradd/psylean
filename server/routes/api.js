const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
  res.status(200).end();
});

module.exports = router;
