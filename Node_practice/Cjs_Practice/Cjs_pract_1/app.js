const a = require('./a')
const b = require('./b')
const main = require('./main')
function App(){
    console.log('A: ',a);
    console.log('B: ',b);
}
main.info("Message")
main.verbose("Verbose")