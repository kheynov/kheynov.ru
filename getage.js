var now = new Date(); 
var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); 
var dob = new Date(2002, 11, 17);
var dobCurrentYear = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); 
var age; 

//Возраст = текущий год - год рождения
age = today.getFullYear() - dob.getFullYear();
//Если ДР в этом году ещё предстоит, то вычитаем из age один год
if (today < dobCurrentYear) {
    age = age - 1;
}

document.getElementById("age").innerHTML = age + " лет &nbsp;&bull;&nbsp; Android разработчик &nbsp;&bull;&nbsp; Студент"
