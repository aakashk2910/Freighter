# Freighter

A smart Iot based solution to make logistics safe secure and reliable.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

##NodeRed

```
bash <(curl -sL https://raw.githubusercontent.com/node-red/raspbian-deb-package/master/resources/update-nodejs-and-nodered)

cd ~/.node-red 
```


### Installing

A step by step series of examples that tell you how to get a development env running

Go to correct directory

```
cd ~/.node-red
```

##Node-arduino

```
npm i node-red-node-arduino
```

##Pi Camera

```
npm install -g node-red-contrib-camerapi
```

##NodeRed-Dashboard

```
npm i node-red-dashboard
```

##Slack

```
npm install node-red-contrib-slack
```

Configure Pi camera to take pictures 

```
pi@raspberry:~ $ sudo raspi-config

sudo nano ~/.node-red/settings.js
```
Uncomment httpStatic

```
httpStatic: '/home/pi/Pictures/',
```

###Integrate everthing

##NodeRed Flow

```
[{"id":"cdd84e82.e638b","type":"ui_chart","z":"e1a4d135.5c332","name":"Temperature","group":"ad1ee195.6ed9c","order":0,"width":0,"height":0,"label":"Temperature in Degree Celsius","chartType":"line","legend":"false","xformat":"HH:mm:ss","interpolate":"linear","nodata":"","dot":true,"ymin":"","ymax":"","removeOlder":1,"removeOlderPoints":"","removeOlderUnit":"60","cutout":0,"useOneColor":false,"colors":["#1f77b4","#aec7e8","#ff7f0e","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5"],"useOldStyle":false,"x":690,"y":360,"wires":[[],[]]},{"id":"ad1ee195.6ed9c","type":"ui_group","z":"","name":"Dashboard","tab":"e2c47dec.d47eb","disp":true,"width":"6","collapse":false},{"id":"e2c47dec.d47eb","type":"ui_tab","z":"","name":"Home","icon":"dashboard"}]
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [NodeJs](https://nodejs.org/en/) - The web framework used
* [NodeRed](https://nodered.org/) - Flow-based programming for the Internet of Things

## Versioning

v1.3.1

## Authors

* **Aakash Kamble** - *Initial work* - [ga53xiy](https://gitlab.lrz.de/ga53xiy)
* **Julius Launhardt**
* **Meron Branik**
* **Utku Öziz**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* UnternehmerTUM
* TechChallenge
