let express = require('express')
let app = express()
app.get('/api/timestamp/:date_string?', (req, res) => {
    res.set('content-type', 'application/json')
    let data = new Date(req.params.date_string)
    if (data == 'Invalid Date') {
        data = new Date(Date.now())
    }
    let timeObject = {
        unix: data.getTime(),
        utc: data.toUTCString()
    }
    res.send(timeObject)

})
app.listen(3000)