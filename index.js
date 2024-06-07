const express = require('express')
const app = express()

app.use(express.json())
app.use(require('./routes/bookRoute'))
app.use(require('./routes/bookauthorRoute'))
app.use(require('./routes/conditionRoute'))
app.use(require('./routes/wishlistRoute'))

app.listen(3000, () => console.log('Server started on port 3000'))

