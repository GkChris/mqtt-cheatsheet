import React, { useState, useEffect, useContext } from "react";
import mqtt from 'mqtt/dist/mqtt';


export default function TESTOR() {

    const [connectionStatus, setConnectionStatus] = useState(false);
    const [recievedMsg, setRecievedMsg] = useState();
    const topic = '/home/sensors/temp/#';
    const client = mqtt.connect('ws:localhost:9001', {
        clientID: 'client-1',
        cleanSession: true,
        keepAlive: 120,
        username: 'username',
        password: 'password'
    });

  
    useEffect(() => {
        client.on('connect', () => setConnectionStatus(client.connected));
        client.subscribe(topic, function (err) {
            if (err) {
            console.log(err);
            }
        })
        client.on('message', function (topic, message) {
            // message is Buffer
            console.log('Message: ',message.toString())
            setRecievedMsg(message.toString())
            console.log('RecievedMsg: ',recievedMsg);
            // client.end()
        })
    }, []);

    useEffect(() => {
        console.log('Connection status: ',connectionStatus);
        console.log('Client: ',client);
    },[connectionStatus])




    return (
        <div>
            <h1>Hello world</h1>
            <h2>{recievedMsg}</h2>
        </div>
    );

}

