// const {readFile} = require('fs');

// console.log('started a first task');

// //check file path
// readFile('./content/first.txt', 'utf8', (err, result)=>{
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(result);
//     console.log('completed the first task');
// })

// console.log('starting the next task');

// started operating system process
// console.log('first');
// setTimeout(()=>{
//     console.log('second');
// }, 0);
// console.log('third');

// setInterval(() =>{
//     console.log("hello world runs in every 2 seconds :) ")
// }, 2000);

// console.log('I will run first, althoug I am below the setInterval function');
// // process stays alive unless
// // kill process Ctr + C

// const http = require('http');

// const server = http.createServer((req, res)=>{
//     console.log("request event");
//     res.end("Hello world");
// })

// server.listen(5000, ()=>{
//     console.log('Server listening on port : 5000....');
// })

// const http = require('http');

// const server = http.createServer((req, res) =>{

//     if (req.url === '/'){
//        res.end('Home Page')
//     }
//     else if (req.url === '/about'){
//         //Blocking Code !!!
//         for (let i = 0; i< 100; i++){
//             for (let j = 0; j < 10; j++){
//                 console.log(`${i} ${j}`)
//             }
//         }
//        res.end('About Page')
//     } 
//     else{
//         res.end('Error Page')}
// })

// server.listen(5000, ()=>{
//     console.log('Server Listening on port 5000...')
// })

const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async ()=>{
    try{
       const first = await readFile('./content/first.txt', 'utf8');
       const second = await readFile('./content/second.txt', 'utf8');
       await writeFile('./content/result-mind-grenade.txt', `This is Awesome: ${first}, ${second}`, {flag:'a'});
       console.log(first +'\n' + second);
       console.log('Print out the combined file of the first and second texts');
       const combined = await readFile('./content/result-mind-grenade.txt', 'utf8');
       console.log(combined);

    } catch(error){
        console.log(error);
    }
}

start();

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }

// getText('./content/first.txt')
//    .then((result)=> console.log(result, "this is the one with just promise!"))
//    .catch((err)=>console.log(err))


// const start = async () => {
//     try {
//         const first = await getText('./content/first.txt');
//         console.log('The first file is read, now the second file will be read');
//         const second = await getText('./content/second.txt');
//         console.log("The second file is read");
//         console.log(first);
//         console.log(second);
//         console.log('This is the asyncronous version with await');
//     } catch (error) {
//         console.log(error);
//     }
// }

// start();