var array= ['coke', 'pepsi', 'sprite'];

function makeCap(array){
    return new Promise(function(resolve,reject) {
        let capsArray= array.map(function(item) {
            if(typeof item ==='string') {
                return item.toUpperCase()
            } else {
                reject('Error came up dawg')
            }
        })

        resolve(capsArray);
    })
}

function sortArray(array){
    return new Promise(function(resolve, reject){
        if(array) {
            array.forEach(function(spot){
                if(typeof spot !== 'string'){
                    reject('Error popped up dude!')
                }
            })

            resolve(array.sort());
        } else {
            reject('Error time!');
        }
    })
} 

function getArray() {
    makeCap(array);
    sortArray();
}

getArray();