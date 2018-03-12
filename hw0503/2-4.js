// alert(null || 2 || undefined) // 2 - return first true
//alert(alert(213) || 2 || alert(324))//  213 (from couple(213 and 2)
                                        //2 (from couple 2 and 324)
//alert(213213 && 2 && null); //null - return last if all paramemtrs are ok
//alert( alert(1) && alert(2) )// 1 - return first true
//alert(null || 2 && 3 || 4) // 3 (return last from 2&&3 =3;
// null || 3 - return 3 -first true
// 3||4 -return 3 - first true

//if (-1 || 0 ) alert("first") // first , return true
//if (-1 && 0) alert ("second")// nothing  - get 0 and it's false


//"" + 123 + 0 // 1230 -concatenation
//"" - 143 + 0 // -143  "-" changed operation
// true+false// 1 - true came 1 in number type coz we have "+"
//6/"3"  //2 "3" come into math
//"4pt" - 4pt // nothing
//5 && 213 // 213  - return last if all are true
//alert(5 || 0) // 5 - return first true
//null+123 // 123 - null is nothing
// undefined+10 //NaN - undefined changed in NaN



// var name = "Andrii"
// function myName(name) {
//     alert(name)
// }
//myName(); // called function without parametr - undefined
//myName("Ivan") // output is Ivan
