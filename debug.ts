/* eslint-disable */
// TODO: add all calls from EU and CA

import config from './config.json';
import BlueLinky from './src';
import inquirer from 'inquirer';

const apiCalls = [
  { name: 'exit', value: 'exit' },
  { name: 'start', value: 'start' },
  { name: 'odometer', value: 'odometer' },
  { name: 'stop', value: 'stop' },
  { name: 'status (on server cache)', value: 'status' },
  { name: 'status (on server cache) unparsed', value: 'statusU' },
  { name: 'status refresh (fetch from vehicle)', value: 'statusR' },
  { name: 'full raw status (on server cache)', value: 'fullStatus' },
  { name: 'full raw status refresh (fetch from vehicle)', value: 'fullStatusR' },
  { name: 'lock', value: 'lock' },
  { name: 'unlock', value: 'unlock' },
  { name: 'locate', value: 'locate' },
];

let vehicle;
const { username, password, vin, pin } = config;

const onReadyHandler = vehicles => {
  vehicle = vehicles[0];
  askForCommandInput();
};

const askForRegionInput = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'region',
        message: 'What Region are you in?',
        choices: ['US', 'EU', 'CA'],
      },
    ])
    .then(answers => {
      if (answers.command == 'exit') {
        return;
      } else {
        console.log(answers)
        console.log('Logging in...');
        createInstance(answers.region);
      }
    });
};

const createInstance = region => {
  const client = new BlueLinky({
    username,
    password,
    vin,
    pin,
    region: region,
    deviceUuid
  });
  client.on('ready', onReadyHandler);
};

function askForCommandInput() {
  console.log('');
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'command',
        message: 'What you wanna do?',
        choices: apiCalls,
      },
    ])
    .then(answers => {
      if (answers.command == 'exit') {
        return;
      } else {
        performCommand(answers.command);
      }
    });
}

async function performCommand(command) {
  try {
    switch (command) {
      case 'exit':
        return;
      case 'locate':
        const locate = await vehicle.location();
        console.log('locate : ' + JSON.stringify(locate, null, 2));
        break;
      case 'odometer':
        const odometer = await vehicle.odometer();
        console.log('odometer', JSON.stringify(odometer, null, 2));
        break;
      case 'status':
        const status = await vehicle.status({
          refresh: false,
          parsed: true,
        });
        console.log('status : ' + JSON.stringify(status, null, 2));
        break;
      case 'statusR':
        const statusR = await vehicle.status({
          refresh: true,
          parsed: true
        });
        console.log('status remote : ' + JSON.stringify(statusR, null, 2));
        break;
      case 'fullStatus':
        const fullStatus = await vehicle.fullStatus({
          refresh: false,
          parsed: false
        });
        console.log('full status cached : ' + JSON.stringify(fullStatus, null, 2));
        break;
      case 'fullStatusR':
        const fullStatusR = await vehicle.fullStatus({
          refresh: true,
          parsed: false
        });
        console.log('full status remote : ' + JSON.stringify(fullStatusR, null, 2));
        break;
      case 'start':
        const startRes = await vehicle.start({
          airCtrl: false,
          igniOnDuration: 10,
          airTempvalue: 70,
          defrost: false,
          heating1: false,
        });
        console.log('start : ' + JSON.stringify(startRes, null, 2));
        break;
      case 'stop':
        const stopRes = await vehicle.stop();
        console.log('stop : ' + JSON.stringify(stopRes, null, 2));
        break;
      case 'lock':
        const lockRes = await vehicle.lock();
        console.log('lock : ' + JSON.stringify(lockRes, null, 2));
        break;
      case 'unlock':
        const unlockRes = await vehicle.unlock();
        console.log('unlock : ' + JSON.stringify(unlockRes, null, 2));
        break;
    }

    askForCommandInput();
  } catch (err) {
    console.log(err);
  }
}

askForRegionInput();
