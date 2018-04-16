var obj = {
            test1: 5,
            test2: {
                    test3: 'Test',
                    test4: false,
                    test5: [
                        {
                            test6: 'Test'
                        },
                        {
                            test7: 10
                        }
                    ]
            },
            test8: {
                test9: {
                    test10: [1,2,3]
                }
            }
        }

function deepCopy(obj) {
    if (obj == null || typeof(obj) != 'object')
      return obj;
   var newObject = new obj.constructor();
    for (var key in obj) {
        newObject[key] = deepCopy(obj[key]);

    }
      return newObject;
}
var newObj = deepCopy(obj);
 document.write(JSON.stringify(newObj, null, 2));


function isEqual(obj, newObj) {
    for (var key in obj) {

        if(typeof(obj.key) == 'object' ) {
            isEqual(obj.key, newObj.key)
        }
        if (obj.key === newObj.key) {
            return document.write('<br>obj and newObj are equal');
        }
    }
}

isEqual(obj,newObj);