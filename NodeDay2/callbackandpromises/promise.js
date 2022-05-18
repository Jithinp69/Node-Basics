let plays = "cricket";
const myPromise = new Promise((resolve, reject) => {
    if(plays == "cricket") {
        resolve();
    } else {
        reject();
    }
})

myPromise.then(() => {
    console.log("my friend")
}).catch(() => {
    console.log("will be enemy")
})