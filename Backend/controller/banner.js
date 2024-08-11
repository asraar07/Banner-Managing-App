// controllers/bannerController.js
const db = require('../config/db');

exports.getBanner = (req, res) => {
  db.query('SELECT * FROM Banner WHERE id = 1', (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result[0]);
  });
};

exports.updateBanner = (req, res) => {
  const { description, timer, link, visible } = req.body;
  db.query('UPDATE Banner SET ? WHERE id = 1', { description, timer, link, visible }, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Banner updated successfully' });
  });
};
