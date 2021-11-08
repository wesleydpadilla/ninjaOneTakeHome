# Starting up the NinjaOne take home

### Installing server and app

Go to the devices-clientapp folder inside of the main devices-clientapp and install

```bash
$ npm install
```

then go to the devicesTask_serverApp folder inside of the main devices-clientapp and install

```bash
$ npm install
```

### Starting the app and server

| WARNING: Start the devicesTask_serverApp on port 3000 first! The application will not work unless the server is on port 3000 |
| ---------------------------------------------------------------------------------------------------------------------------- |

Start the devicesTask_serverApp on port 3000 first

```bash
$ npm start
```

then run devices-clientapp inside of the devices-clientapp folder on any port that's not 3000

```bash
$ npm start
```
