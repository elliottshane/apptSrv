const express = require('express');
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000
const moment = require("moment");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (request, response) {

    console.log(request.body)
    response.send({ "appName": "Appointment REST fake data" })

})



app.post('/appt', function (request, response) {
   /*
    Expect: 
    {
        "id": {
            "request": "get_appointments",
            "id": "000001234"
            "numDays": 90
        },
        "ivrPhone": "+15553338888",
        "callerPhone": "+15552223333"
    }
    */
    //Set #Days on IVR side.
    //Date Format.

    console.log('recieved',request.body)
  
    var  date2 = moment().minute(30).second(0).add(14, "days");
    var  date1 = moment().minute(0).second(0).add(7, "days");
  
    var date3 = Number(moment().format("3YYMMDD.HHMM"));
    //console.log(date3);
    //console.log(date3.toString().substr(1));
    //convert fm date:
    //console.log(moment(date3.toString().substr(1), "YYMMDD.HHMM").format());

     var appt = {
       dfn: "9999",
       name: "ZZTEST,PATIENT",
       stationNo: "999",
       stationName: "NOWHERE CLINIC",
       appointments: [
         {
           fmDatetime: Number(moment(date1).format("3YYMMDD.HHMM")),
           datetime: moment(date1).format("YYYYMMDD HHmm"),
           clinicName: "NOW TRAINING CLINIC",
           clinicIen: "12345",
           patientFriendlyName: "TRAINING CLINIC",
           physicalLocation: "BUILDING A, ROOM 1",
           clinicPhoneNumber: "999-999-999 option 2",
           length: 30,
         },
         {
           fmDatetime: Number(moment(date2).format("3YYMMDD.hm")),
           datetime: moment(date2).format("YYYYMMDD HHmm"),
           clinicName: "NOW CARDIOLOGY CLINIC",
           clinicIen: "12346",
           patientFriendlyName: "CARDIOLOGY CLINIC",
           physicalLocation: "BUILDING C, ROOM 3",
           clinicPhoneNumber: "999-999-999 option 4",
           length: 30,
         },
       ],
     };

    var noAppt  = {
       dfn: "9999",
       name: "ZZTEST,PATIENT",
       stationNo: "999",
       stationName: "NOWHERE CLINIC",
       appointments: [],
     };;
   
    
    response.send(appt);
   
})

app.post('/appt/cnx', function (request, response) {
/*
    "id": {
        "request": "cancel_appointment",
        "station_no": "999",
        "dfn": "12345",
        "clinic_ien": "9999",
        "date_time": "20200608 10:00"
    },
    "ivrPhone": "+15553338888",
    "callerPhone": "+15552223333"
}

}*/

     console.log(request.body);
        response.send({
            result: 1,
        });
})

app.listen(PORT, () => {
    console.log('Express server running on *:' + PORT);
});
