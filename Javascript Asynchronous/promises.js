let p = new Promise((resolve,reject)=>{
    let a = 1+1
    if (a == 2) {
        resolve("Success")
    } else {
        reject("Failed")
    }
})

p.then((message)=>{
    console.log("This is in then " + message)
}).catch((message)=>{
    console.log("This is in catch " + message)
})

let video1 = new Promise((resolve,reject)=>{
    resolve("Video 1 is rendered")
})

let video2 = new Promise((resolve,reject)=>{
    resolve("Video 2 is rendered")
})

let video3 = new Promise((resolve,reject)=>{
    resolve("Video 3 is rendered")
})

Promise.race([video1,video2,video3]).then((message)=>{
    console.log(message);
})

const watchingMeme = false;
const userLeft = false;

// function watchingCatMeme(callback, errorcallback) {
//     if (userLeft) {
//         errorcallback({
//             name : 'User Left',
//             message : ":("
//         })
//     }
//     else if(watchingMeme){
//         errorcallback({
//             name:"User is watching cat meme",
//             message : "Studies < Cat Meme"
//         })
//     }
//     else{
//         callback('You will score good marks!')
//     }
// }

// watchingCatMeme((message)=>{
//     console.log("Success :" + message)
// },(error)=>{
//     console.log(error.name + ' ' + error.message);
// })


function watchingMemePromise() {
    return new Promise((resolve,reject)=>{
        if (userLeft) {
            reject({
                name : 'User Left',
                message : ":("
            })
        }
        else if(watchingMeme){
            reject({
                name:"User is watching cat meme",
                message : "Studies < Cat Meme"
            })
        }
        else{
            resolve('You will score good marks!')
        }
    })
}


watchingMemePromise().then((message) => {
     console.log("Success :" + message)
}).catch((error)=>{
    console.log(error.name + ' ' + error.message);
})

function someAsyncFunction1() {
    return new Promise((resolve,reject)=>{
        resolve("success in 1")
    })
}
function someAsyncFunction2() {
    return new Promise((resolve,reject)=>{
        resolve("success in 2")
    })
}
function someAsyncFunction3() {
    return new Promise((resolve,reject)=>{
        let a = 1+2;
        if(a == 2){
            resolve("success in 3")
        }
        else{
            reject('Failed')
        }
        
    })
}
const promise1 = someAsyncFunction1();
const promise2 = someAsyncFunction2();
const promise3 = someAsyncFunction3();

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("All Promises resolved:", results);
  })
  .catch((error) => {
    console.error("At least one Promise rejected:", error);
  });
