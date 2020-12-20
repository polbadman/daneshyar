const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');

const { userById, read, update, purchaseHistory,list } = require('../controllers/user');

router.get('/secret/:userId', requireSignin,userById, (req, res) => {
      return res.json(req.profile);
});
router.put('/secret/:userId', requireSignin, update);

router.get('/users/:userId', requireSignin, isAuth, isAdmin, list);
router.get('/user/:userId', requireSignin, isAuth, read);
router.put('/user/:userId', requireSignin, isAuth, update);
router.get('/orders/by/user/:userId', requireSignin, isAuth, purchaseHistory);

router.param('userId', userById);

module.exports = router;
