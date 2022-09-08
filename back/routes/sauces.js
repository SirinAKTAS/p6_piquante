const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const validate = require('../middleware/validate-inputs');
const saucesCtrl = require('../controllers/sauces');

router.get('/', auth, saucesCtrl.getAllSauces);
router.post('/', auth, multer, validate.sauce, saucesCtrl.createSauce);
router.get('/:id', auth, validate.id, saucesCtrl.getOneSauce);  
router.put('/:id', auth, multer, validate.id, validate.sauce, saucesCtrl.modifySauce);
router.delete('/:id', auth, validate.id, saucesCtrl.deleteSauce);
router.post('/:id/like', auth, validate.id, validate.like, saucesCtrl.likeSauce);

module.exports = router;