// Student Result using objects and functions
let student = {
    name: "Rahul",
    marks: [78, 85, 92, 67, 88]
};
function calculate(student) {
let total = 0;
    for (let i = 0;i<student.marks.length;i++) {
        total = total + student.marks[i];
    }
    let average = total / student.marks.length;
    let grade;
        if (average >= 90)
             {
        grade = "A";
    }
    else if (average >= 75) 
        {
        grade = "B";
    }
    else if (average >= 60) 
        {
        grade = "C";
    }
    else if (average >= 40)
         {
        grade = "D";
    }
    else 
        {
        grade = "F";
    }

    console.log("Name:", student.name);
    console.log("Total Marks:", total);
    console.log("Average:", average);
    console.log("Grade:", grade);
}
calculate(student);