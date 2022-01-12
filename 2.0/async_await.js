const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!!');
        }, 2000);
    });
    return promise;
};

setTimeout(() => {
    console.log('Set time out!');
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    });
}, 2500);

console.log('Hello');
console.log('Hii');