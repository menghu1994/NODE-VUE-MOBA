const express = require('express')

const app = express();

require('./plugins/db')(app)
require('./routes/admin')(app)

app.listen(3000, () => {
    
})