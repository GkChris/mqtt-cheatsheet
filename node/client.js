const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt:localhost:1883',  {username: 'username', password: 'password'})
const topic = '/home/sensors/temp/#';

client.on('connect', function () {
    console.log('Connection status: ', client.connected);
    client.subscribe(topic, function (err) {
        if (err) {
          console.log(err);
        }
        client.on('message', function (topic, message) {
            // message is Buffer
            console.log(message.toString())
            // client.end()
        })
      })
})

