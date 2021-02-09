# KuvoRK

An unoffcial nodejs API wrapper for European EV with KiaUVO forked from Hyundai BlueLink, Bluelinky project
Serves both Kia and Hyundai in Europe and Canada. Serves Hyundai in US.

[![CI](https://img.shields.io/circleci/build/github/Hacksore/bluelinky.svg)](https://circleci.com/gh/Hacksore/bluelinky/tree/master)
[![npm](https://img.shields.io/npm/v/bluelinky.svg)](https://www.npmjs.com/package/bluelinky)
[![Discord](https://img.shields.io/discord/652755205041029120)](https://discord.gg/HwnG8sY)

## Install
```sh
npm install bluelinky
```

## Example
```javascript
const BlueLinky = require('bluelinky');

const client = new BlueLinky({
  username: 'someguy@example.com',
  password: 'hunter1',
  region: 'US',
  pin: '1234'
  vin: 'KNACC2435634592'
});

client.on('ready', async () => {
  const vehicle = client.getVehicle('5NMS55555555555555');
  const response = await vehicle.lock();
  console.log(response);
});

```

## Documentation
Checkout out the [bluelinky-docs](https://hacksore.github.io/bluelinky-docs/) for more info.
VIN in config.json or code is optional. When VIN is set, the second characater indicates brand. Only when second character = 'N' indicates KIA other char, or not set, Hyundai endpoints are used. 

## Supported Features
- Lock
- Unlock
- Start (with climate control)
- Stop
- Status

## Supported Regions
| [Regions](https://github.com/Hacksore/bluelinky/wiki/Regions) | Current Status |

|-----------|-Hyundai---KIa|

| USA       | ✅      |

| Canada    | ✅    ✅ |

| Europe    | ✅    ✅ |

| Korea     | ▯▯▯▯▯▯  |

| Australia | [See #9](https://github.com/Hacksore/bluelinky/issues/9)  |

## Show your support

Give a ⭐️ if this project helped you!

## Contributors

[altagir](https://github.com/altagir) - Canada wizard 🧙‍♂️

[SondreNjaastad](https://github.com/SondreNjaastad) - Europe wizard 🧙‍♂️

[aleGuardiola](https://github.com/aleGuardiola) - Fixed generation one cars 😎
