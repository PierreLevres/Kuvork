const { join, resolve } = require('path');
const { writeFileSync } = require('fs');
const { getStamp } = require('./european.tools.js');

const SIZE = 1000;
const H_CCSP_APP_ID = '99cfff84-f4e2-4be8-a5ed-e5b755eb6581';
const K_CCSP_APP_ID = '693a33fa-c117-43f2-ae3b-61a02d24f417';


const run = async (AppId, Brand) => {
  const array = new Array(SIZE).fill('');
  const baseDate = Date.now();
  console.log(Brand+":"+AppId)
  for (let i = SIZE; --i >= 0;) {
    const date = i % 2 === 0 ? baseDate + (i * 1000) : baseDate - (i * 1000);
    array[i] = await getStamp(AppId+`:${date}`);
    if (i % 50 == 0)
    {
      console.log(`${SIZE - i}/${SIZE}`)
    }
  }

  //writeFileSync(join(resolve('.'), 'src', 'tools', Brand+'.european.token.collection.ts'), `export default ${JSON.stringify(array)}`);
  console.log(join(resolve('.'), Brand+'.european.token.collection.ts'));
  writeFileSync(join(resolve('.'), Brand+'.european.token.collection.ts'), `export default ${JSON.stringify(array)}`);}


run(H_CCSP_APP_ID,'hyundai').catch((err) => console.error(err));
run(K_CCSP_APP_ID,'kia').catch((err) => console.error(err));


