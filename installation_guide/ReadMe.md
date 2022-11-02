# MQTT with Mosquitto


## Installation Guide


#### Installing Mosquitto

First of all mosquitto has to be installed in the local machine. 
To procced to the installation, type the following command in the Terminal


```Javascript

    sudo apt update -y && sudo apt install mosquitto mosquitto-clients -y

```


#### Check if mosquitto service is enabled 

Following the installation process we need to make sure that mosquitto service is running.
To do that, type the following command in the Terminal

```Javascript

    sudo systemctl status mosquitto

```

You should see that the service is **active (running)**.
If the service is not running, start the service with the following command.

```Javascript

    sudo systemctl start mosquitto

```


## Configuration Guide

Inside the /etc/ folder we have a subfolder named mosquitto that extends the service's folder and enable us to procceed to custom configurations

#### Users 

To establish the authentication for mosquitto we first need to add users. Users are allowed to both publish
and subscribe to the broker. More depth can be added later by separating publishers from subscribers if needed.
To add users simply type the following command.

```Javascript

    sudo mosquitto_passwd -c /etc/mosquitto/<user_passwords_file> <username>

```

After pressing enter you will be asked to give a password twice. 
The given password will be encrypted and stored in the <user_passwords_file> and it belongs to that specific <username>.
In my case, <user_passwords_file> is named ***passwd***.
***Note that this operation overwrites the "/ etc /mosquitto/passwd" file each time. You need to keep a backup of all stored users before procceding***


#### Custom configurations

To be able to declare listeners and add custom configuration create a file that contains the extended configurations. 
To create the file type the following command

```Javascript

    sudo nano /etc/mosquitto/conf.d/default.conf

```

The file should contain the folling lines

```
allow_anonymous false       //Enables authentication. 
password_file /etc/mosquitto/<user_passwords_file>     //Declare the path of the <user_passwords_file>

listener 1883       declare listener on port 1883. Default protocol mqtt
listener 9001       decplare listener on port 9001. Protocol ws
protocol websockets

```

#### Apply configurations

To apply any configuration changes we need to restart the service. To do so, type the following command.

```Javascript

    sudo systemctl restart mosquitto

```



