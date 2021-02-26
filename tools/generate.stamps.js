const { join, resolve } = require('path');
const { writeFileSync } = require('fs');
const { getStamp } = require('./european.tools.js');

const SIZE = 1000;
//Hyundai:
const H_APP_ID = '99cfff84-f4e2-4be8-a5ed-e5b755eb6581';
//Kia:
const K_APP_ID = '693a33fa-c117-43f2-ae3b-61a02d24f417';


const runH = async () => {
  const array = new Array(SIZE).fill('');
  const baseDate = Date.now();

  for (let i = SIZE; --i >= 0;) {
    const date = i % 2 === 0 ? baseDate + (i * 1000) : baseDate - (i * 1000);
    array[i] = await getStamp(`${H_APP_ID}:${date}`);
    console.clear();
    console.log(`${SIZE - i}/${SIZE}`)
  }

  writeFileSync(join(resolve('.'), 'src', 'tools', 'hyundai.european.token.collection.ts'), `export default ${JSON.stringify(array)}`);
}
const runK = async () => {
  const array = new Array(SIZE).fill('');
  const baseDate = Date.now();

  for (let i = SIZE; --i >= 0;) {
    const date = i % 2 === 0 ? baseDate + (i * 1000) : baseDate - (i * 1000);
    array[i] = await getStamp(`${K_APP_ID}:${date}`);
    console.clear();
    console.log(`${SIZE - i}/${SIZE}`)
  }

  writeFileSync(join(resolve('.'), 'src', 'tools', 'kia.european.token.collection.ts'), `export default ${JSON.stringify(array)}`);
}

runH().catch((err) => console.error(err));
runK().catch((err) => console.error(err));


