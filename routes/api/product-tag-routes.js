const router = require('express').Router();
const { ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  ProductTag.findAll({

  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;