# Node app for Twilio Appt IVR


to watch the logs:

```
$ heroku logs --app=sme-demo-apptsrv --tail
```

Two enpoints


#Get Appointments: 

data posted from ivr:

Expect: 
```json
   {
        "id": {
            "request": "get_appointments",
            "id": "000001234",
            "numDays": 90
        },
        "ivrPhone": "+15553338888",
        "callerPhone": "+15552223333"
    }
```
/appt   

Returns:
```json
{
    "dfn": "9999",
    "name": "ZZTEST,PATIENT",
    "stationNo": "999",
    "stationName": "NOWHERE CLINIC",
    "appointments": [
        {
            "fmDatetime": 3200620.0906,
            "datetime": "20200620 0900",
            "clinicName": "NOW TRAINING CLINIC",
            "clinicIen": "12345",
            "patientFriendlyName": "TRAINING CLINIC",
            "physicalLocation": "BUILDING A, ROOM 1",
            "clinicPhoneNumber": "999-999-999 option 2",
            "length": 30
        },
        {
            "fmDatetime": 3200627.93,
            "datetime": "20200627 0930",
            "clinicName": "NOW CARDIOLOGY CLINIC",
            "clinicIen": "12346",
            "patientFriendlyName": "CARDIOLOGY CLINIC",
            "physicalLocation": "BUILDING C, ROOM 3",
            "clinicPhoneNumber": "999-999-999 option 4",
            "length": 30
        }
    ]
}
```
#Cancel Appointment

/appt/cnx


expect:
```json
{

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
```

Returns:
```json
{
    "result": 1 
}
```

