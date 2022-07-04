function largestOfFour(arr) {
    let array = [];
    let count = 0;
    for(let key = 0; key < arr.length; key++){
        count = arr[key][0];
        for(let key2 = 0; key2 < arr[key].length; key2++){
            if(arr[key][key2] > count){
                count = arr[key][key2];
            }
        }
        array.push(count);
    }
    return array;
}
