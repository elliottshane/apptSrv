# Node app for Twilio Appt IVR


to watch the logs:

```
$ heroku logs --app=sme-demo-apptsrv --tail
```

Two enpoints


Get appointments: 

data posted from ivr:
```json
{
    "id": "999999999",
    "ivrPhone": "+15553338888",
    "callerPhone": "+15552223333"
}
```
/appt   

Returns:
```json
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
```
/appt/cnx

Returns:
```json
{
    "result": 1 
}
```

{"ssn":"{{widgets.gather_input.Digits}}","ivrPhone":{{flow.channel.address}}","callerPhone":"{{contact.channel.address}}"}