var feeManager = require('./fee_manager');
var  studentManager = require('./student');
var fs = require('fs');
var http = require('http');
var formidable = require('formidable')
//This create a new student
//This create a new student
var studentID = 1;
var level = 3;
var name= 'Bangsi';
var age = 22;
var email = 'bangsir61@gmail.com';
var gender = 'male';
var courses = ['Web Development, Acounting', 'Commence', 'Android Development'];
var amountPaid= 500000;
var newStudent= new studentManager.createStudent(
 studentID, gender, courses, name, age, level, email, amountPaid
);
var totalFee = feeManager.getTotalFee();

var hasCompleted = feeManager.isFreeCompleted(newStudent.amountPaid)
var firstData = console.log(newStudent.name + " has completed fee? "+hasCompleted);
var secondData = console.log(newStudent.name + ' Owes ' + (totalFee-amountPaid) )
http.createServer((req, res)=>{
    fs.readFile('./students.html', (error, data) =>{
        if(error){
            console.log(error)
        }else{
            res.write(data)
        }
        res.end()
    })
}).listen('2000', (err) =>{
    if(err){
        console.log(err)
    }else{
        console.log('2000')
    }
})
