# Node app for Twilio Appt IVR


to watch the logs:

```
$ heroku logs --app=sme-demo-apptsrv --tail
```

Two enpoints


Get appointments: 

/appt

Returns:

{
    "numDays": 90,
    "appts": [
        {
            "id": "8098098098",
            "dateTime": 1592670834,
            "Location": "Eye"
        },
        {
            "id": "8098098098",
            "dateTime": 1592670834,
            "Location": "Eye"
        }
    ]
}

/appt/cnx

Returns:

{
    "result": "ok"
}