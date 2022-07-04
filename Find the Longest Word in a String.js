function findLongestWordLength(str) {
    let array = str.split(" ");
    let count = str[0].length;
    for(let i in array){
        if (array[i].length > count){
            count = array[i].length;
        }
    }
    return count;
}


findLongestWordLength("The quick brown fox jumped over the lazy dog");
