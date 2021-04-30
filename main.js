name_of_the_students_Array = [];

function submit() {
    var name1 = document.getElementById("Name-of-the-student-1").value;
    var name2 = document.getElementById("Name-of-the-student-2").value;
    var name3 = document.getElementById("Name-of-the-student-3").value;
    var name4 = document.getElementById("Name-of-the-student-4").value;
    name_of_the_students_Array.push(name1)
    name_of_the_students_Array.push(name2)
    name_of_the_students_Array.push(name3)
    name_of_the_students_Array.push(name4)
    console.log(name_of_the_students_Array)
    document.getElementById("Display_name").innerHTML = name_of_the_students_Array;
    document.getElementById("Submit_button").style.display = "none";
    document.getElementById("Sort_button").style.display = "inline-block"
}

function Sort() {
    name_of_the_students_Array.sort();
    console.log(name_of_the_students_Array)
    document.getElementById("Display_name").innerHTML = name_of_the_students_Array;


}