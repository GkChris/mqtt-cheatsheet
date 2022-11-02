const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt:localhost:1883', {username: 'username', password: 'password'})

client.on('connect', function () {
    console.log('Connection status: ', client.connected);
    client.publish('/home/sensors/temp/bedroom', 'First websocket mqtt message!')
})

