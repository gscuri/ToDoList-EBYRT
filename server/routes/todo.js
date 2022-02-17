const express = require('express');
const { createController } = require('../controller/create');
const { findAllControllers } = require('../controller/findAll');
const { updateController } = require('../controller/update');
const { removeControllers } = require('../controller/delete');
const { checkId } = require('../middleware/checkBody');
const router = express.Router();

router.post('/insert', createController);
router.get('/list', findAllControllers);
router.put('/update', checkId, updateController);
router.delete('/delete', checkId, removeControllers);

module.exports = router;
