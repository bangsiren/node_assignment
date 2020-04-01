exports.createStudent = class Student{
    constructor(studentID, gender, courses, name, age, level, email, amountPaid){
        this.age = age;
        this.courses = courses;
        this.email = email;
        this.level = level;
        this.gender = gender;
        this.name = name;
        this.studentID = studentID;
        this.amountPaid = amountPaid
    }
}
// var student = require('./index') = amo

// var studentInstance = new student ('Bangsi Rene Tang', 500000, 
// 'Seven Academy', 'Web Development')

// studentInstance.getStudentDetails();

// studentInstance.getStudentsFees();

// studentInstance.getStudentDepartment();

// studentInstance.getStudentSchool();