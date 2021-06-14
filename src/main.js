const path = require('path')
const program = require('commander');
const {mapAction} = require('./common');

/**
 * Reflect.ownKeys() 类似 Object.keys() 的功能。它返回一个由目标对象自身的属性键组成的数组。
 * 可以返回包含 Symbol 属性在内的自有属性。Object.keys() 返回属性 key ，但不包含不可枚举的属性。
 */
Reflect.ownKeys(mapAction).forEach((action) => {
  program
    .command(action)
    .alias(mapAction[action].alias)
    .description(mapAction[action].description)
    .action(() => {
      if (action === '*') {
        console.log(mapAction[action].description);
      } else {
        console.log(action);
        console.log(process.argv);
        require(path.join(__dirname, action))(...process.argv.slice(3))
      }
    });
});

program.on('--help', () => {
  console.log('\nExamples');
  Reflect.ownKeys(mapAction).forEach(action => {
    mapAction[action].examples.forEach(example => {
      console.log(` ${example}`);
    });
  });
});

program
  .version('0.0.1')
  .parse(process.argv);
