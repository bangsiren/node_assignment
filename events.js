// var events = require('events');
// var fs = require('fs')
// var eventsEmiter = new events.EventEmitter();
// function login(){
//     console.log('this signs up')
// }
// function hander(){
//     console.log('handled')
// }
// eventsEmiter.on('login', login)
// eventsEmiter.on('login', hander)
// eventsEmiter.emit('login')
// eventsEmiter.listenerCount('login')
// console.log(eventsEmiter.listenerCount('login'))
// fs.readFile('./students.html', (er,data) =>{
    var buffer = new Buffer.alloc(10);
    var result = buffer.write('hahzs')
    console.log(result)
//     if(er){
//         eventsEmiter.emit('readEr')
//     }
//     else{
//         eventsEmiter.emit('fileRead')
//     }
// })
// var readEr = ()=>{
//     console.log('error occured')
// }
// var fileRead = ()=>{
//     console.log('File Successful')
// }
// var files = ()=>{
//     console.log('second file read')
// }
// eventsEmiter.addListener('readEr', readEr)
// eventsEmiter.addListener('fileRead', fileRead)
// eventsEmiter.on('file', files)
// console.log(eventsEmiter.listenerCount(readEr))

