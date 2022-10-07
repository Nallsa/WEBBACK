const { Router } = require('express');

const { newsController } = require('../controllers/news.controller');

const router = Router();

router.get('/', newsController.getNews);
router.post('/', newsController.postNews);
router.patch('/news/:id', newsController.patchNews);
router.delete('/news/:id', newsController.deleteNews);

module.exports = router;
