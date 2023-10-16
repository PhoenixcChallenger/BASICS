function makeRequest(location){
    return new Promise((resolve,reject) =>{
        console.log(`Making request to ${location}`)
        if (location === 'Google') {
            resolve("Google says hi")
        } else {
            reject('We only talk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject)=>{
        console.log('Processing Response')
        resolve(`extra information + ${response}`)
    })
}

// makeRequest('Google').then((response) =>{
//     console.log('Response recieved');
//     return processRequest(response)
// }).then((processedResponse) =>{
//     console.log(processedResponse)
// }).catch((err)=>{
//     console.log(err);
// })

async function doWork() {
    try {
        const response = await makeRequest('Google');
        console.log("Response recieved");
        const processedResponse = await processRequest(response);
        console.log(processedResponse)
     
    } catch (error) {
        console.log(error);
    }
}

doWork()
