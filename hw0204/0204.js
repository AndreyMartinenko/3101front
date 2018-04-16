    //Написати функцію flaten, яка

    // [1, 2, [3,4,5, [6, 7,8], 9], 10, [11, 12]]
    // [1,2,3,4,5,6,7,8,9,10,11,12]

var arr =  [1, 2,
            [3,4,5, [6, 7,8], 9],
            10,
            [11, 12]
            ];

function flaten(arr){
    var modifArr = [];  // create new array
    for (var i = 0; i <=(arr.length-1); i++) {

        if ( !Array.isArray(arr[i]) ) {
            modifArr.push(arr[i]);  // add each new element to new Array
        } else {
            modifArr = modifArr.concat(flaten(arr[i]));
        }
    }
    return modifArr;

}

document.write(flaten([1, 2,
    [3,4,5, [6, 7,8], 9],
    10,
    [11, 12]]));

