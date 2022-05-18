// setInterval runs for every given miliseconds
// const func1 = setInterval( () => {
//     console.log("test interval")
// },2000);

//clearInterval
let count = 0;
const func1 = setInterval( () => {
    console.log("test interval")
    count++ 
    if (count == 10) {
        clearInterval(func1)
    }
},2000);