const templatesController = require('../controller/templates.controller')

const router = app => {
    app.use('/', templatesController);
}

module.exports = router