function binarySearch(arr, value) {
    let medium = Math.floor(arr.length / 2)

    if(arr.length === 1) {
        if(arr[0] === value) return true
        else return false
    } else {
        if (arr.length === 0 ){
            console.log("you are wrong");
            return false;
        }
    }
    if (arr[medium] < value) {
        let newArray = arr.slice(medium, arr.length)
        return binarySearch(newArray, value)
    } else if(arr[medium] > value) {
        let newArray = arr.slice(0, medium)
        return binarySearch(newArray, value)
    } else {
        return true
    }
}

console.log(binarySearch(arr, 18))