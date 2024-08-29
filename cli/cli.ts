const { parseArgs } = require('node:util');
const main = require("main.ts")

const options = {
  verbose: {type: 'boolean'},
  deph: {type: 'string'},
};

const { values, positionals} = parseArgs({ 
  args: Bun.argv, 
  options, 
  strict: true, 
  allowPositionals: true 
});

if(Bun.argv[2] == "analyze"){
  main.mainFunction(values, positionals);
}else{
  console.log("command not found:", Bun.argv[2]);
}

