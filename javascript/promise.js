function getOffers() {
    return new Promise((resolve,reject) => {
        let success = true;
        setTimeout(()=> {
            if(success){
                resolve('offer Loaded');
            } else{
                reject('offers loading failed');
            }
        }, 2000)
    })
}
function getCategories() {
    return new Promise((resolve,reject) => {
        let success = false;
        setTimeout(()=> {
            if(success){
                resolve('categories Loaded');
            } else{
                reject('categories loading failed');
            }
        }, 2000)
    })
}