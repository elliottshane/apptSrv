const express = require('express');
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (request, response) {

    console.log(request.body)
    response.send({ "appName": "Appointment REST fake data" })

})

app.post('/appt', function (request, response) {
    console.log(request)
    console.log(request.body)
    var currentTime  = new Date();
    var date1 = new Date()
    date1.setDate(currentTime.getDate() + 14)
   
    var date2 = new Date()
    date2.setDate(currentTime.getDate() + 14)
   
    var appt = {
        numDays: 90,
        appts: [
            {
                id: "8098098098",
                dateTime: (date1.getTime() / 1000) | 0,
                Location: "Eye",
            },
            {
                id: "8098098098",
                dateTime: (date2.getTime() / 1000) | 0,
                Location: "Cardiology",
            },
        ],
    };
    var noAppt = { appts: [] };
   
    response.send(appt);
   
})

app.post('/appt/cnx', function (request, response) {

    console.log(request.body)
    response.send({ "result": 1 })

})

app.listen(PORT, () => {
    console.log('Express server running on *:' + PORT);
});
