module.export = app => {
    const express = require('express');
    const router = express.Router();
    const Category = require('../../plugins/Category')
    router.post('/categories', async (req,res) => {

    })
    app.use('/admin/api', router)
} 