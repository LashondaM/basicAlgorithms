// Repeat a string Repeat a string

function repeatString(str, num) {
    if (num < 1) {
        return "";
    } else if (num === 1) {

        return str;
    } else {
        return str + repeatString(str, num -1)
    }
}

repeatString("abc", 3);

console.log(repeatString("abc", 3));

// Truncate a String

function truncateString(str, num) {
    if(str.length > num) {
        return str.slice(0,num) + '...'
    } else {
        return str;
    }
}

truncateString("A-boyman a-tasket A green and yellow basket", 8);

console.log(truncateString("A-boyman a-tasket A green and yellow basket", 8));


// Finders Keepers

function findMe(arr, func) {
    let num = 0;
    for(var i = 0; i < arr.length; i++) {
        num = arr[i]
        if(func(num)) {
            return num;
        }
    }
    return undefined;
}

findMe([1, 2, 3, 4], num => num % 23 === 0);

console.log(findMe([1, 2, 3, 4, 23], num => num % 23 === 0));

// ONLY FINDS NUMBER IN ARRAY ^