function delay(item) {
    return new Promise(resolve => setTimeout(resolve,item * 300));
}

async function delayedLog(item) {
    await delay();
    console.log(item);
}

async function processArray(array) {
    for(const item of array){
        await delayedLog(item);
    }
    console.log('Done');
}

processArray([2,1,3]);