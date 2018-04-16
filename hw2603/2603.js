function Student() {

    this.fullName = function() {
        console.log("<br>"+this.name+ "  "+ this.surname+" ");
    };

    this.gradesAvarage = function(grades){
        var sum = 0;
        for (var i=0; i<=grades.length-1; i++ ) {
            console.log(grades[i]);
            sum += grades[i];
        }
         var avarage =  Math.round(sum/i*100) / 100;
        console.log("<br>"+sum+"<br>"+avarage);
    //return avarage;
    }


    if (!Student.group) {
        Student.group = [this];
    } else {
        Student.group.push(this);
    }

}

Student.prototype.setUser = function(n,s,g) {
    this.name = n;
    this.surname = s;
    this.grades = g;
}


var student1 = new Student();
student1.setUser('JhonBOB','Marley', [2,2,3,3,2,2]);

var student2 = new Student();
student2.setUser('Elton','Jhon', [4,5,1,5,5,3]);

var student3 = new Student();
student3.setUser('Bill','Klinton', [5,2,6,3,4,2]);



function bestStudent() {
//не зрозуміло як сюди передать р-тат з gradesAvarages у
//    зв'язці з екземпляром для виводу запрошених даних

}


function showBestStudent() {}

function showAllStudents() {
// тут має бути кілька анонімних ф-й?
// перебрав з 10-к способів та невдало - потрібна підказка (напрямок)
}


// console.log(student1,student2, student3);

student1.fullName.call(student1);
student1.gradesAvarage(student1.grades);

student2.fullName.call(student2);
student2.gradesAvarage(student2.grades);

student3.fullName.call(student3);
student3.gradesAvarage(student3.grades);

console.log(Student.group);



