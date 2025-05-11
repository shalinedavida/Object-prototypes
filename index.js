

//1. You are building a feature rollout system for a startup where a FeatureToggle constructor function has 
// properties: featureName (string), isEnabled (boolean), and userGroupAccess (array of strings like "betaTesters", "admins"), 
// and you must use a prototype method canAccess(userRole) to return true or false, a method toggleFeature(flag) to enable or disable the 
// feature, and simulate access attempts using if-else and switch statements for different roles.

  //  function FeatureToggle(feature, isEnabled, userGroupAccess){
  //   this.feature=feature;
  //   this.isEnabled=isEnabled;
  //   this.userGroupAccess=userGroupAccess;
  //  }

  //  FeatureToggle.prototype.canAccess= function(userRole){
  //      return this.isEnabled && this.userGroupAccess.includes(userRole);
  //  };
  //  FeatureToggle.prototype.toggleFeature= function(flags){
  //   if ( this.flag == flags){
  //       return 'enabled'
  //   }  else {
  //       return 'disabled'
  //   }
  //  }
  //  FeatureToggle.prototype.accessSimulation=function(userRole){
  //  switch(userRole){
  //   case "admin":
  //       console.log(` Admins can access feature`);
  //       break ;
  //       case "betaTesters":
  //        console.log(` Betatesters can access feature`);
  //        break;
  //        case"managers":
  //        console.log(`Managers can access feature`);
  //        break;
  //        default :
  //        break;    
        
  //  }
  //  }
  //  const newFeature = new FeatureToggle('lightMode', 'true', ['admin','manager','student','betaTesters']);
  //  console.log(newFeature);
  //  console.log(newFeature.canAccess());
  //  console.log(newFeature.toggleFeature());
  //  console.log(newFeature.accessSimulation('betaTesters'));
   
  // 2.In a freelancer time-tracking platform, create a TimeLog constructor function with properties: freelancerName (string),
 //  projectDetails (object with name and hourlyRate), and logs (array of objects with date, hoursWorked), then add prototype 
// methods to calculate total earnings, filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.

// function Timelog (freelancerName,projectDetails,logs){
//     this.freelancerName=freelancerName;
//     this.projectDetails=projectDetails;
//     this.logs=logs;

    
// }
// Timelog.prototype.totalEarnings= function(){
//       const earnings= this.hourlyRate * this.hoursWorked
//      return earnings
// }
// Timelog.prototype.dateRange= function(date){
 
//    date.filter(dateString => {
//     const date = new Date(dateString);
//     return date >= startDate && date <= endDate;
 
//   });
//   if(this.date> 40){
//     return exceed
//   }else{
//     return subceed
//   }

// }
// const timelog = new Timelog('Sofia',{'name:Sof':'hourlyRate:20'},[{'date:5/2/2025':'hoursWorked:5'},{'date:6/2/2025':'hoursWorked:6'},{'date:7/2/2025':'hoursWorked:7'}])
// console.log(timelog);
// console.log(timelog.totalEarnings());
// console.log(timelog.dateRange());



// // 3.You are developing a startup’s order management system where an Order constructor function should contain customer 
// // (object with name and email), items (array of objects with productName, quantity, and unitPrice), and status (string), 
// // then implement prototype methods to compute total cost, update order status based on payment, and categorize order urgency using switch and conditional statements.
// function Order(customer,items,status){
//     this.customer=customer;
//     this.items=items;
//     this.status=status;

// }
// Order.prototype.totalCost=function(items){
//     return this.items.reduce((cost,item) => cost + item.quantity * item.unitPrice,0);
  
//     };
   
// Order.prototype.orderStatus=function(receivedPayment){
//    if (receivedPayment){
//     this.status = 'paid';
//    }else {
//     this.status = 'pending';
//    }
//   }

// Order.prototype.orderUrgency=function(){
//             switch(this.status){
//               case 'paid':
//                console.log('low urgency');
//                break;
//               case 'pending':
//                 console.log('high urgency');
//                 break;
//                 default:
//                   console.log('no uregncy');
                     
//             }
// }
// const order = new Order({'name:Fayah':'email:fayahtess@gmail.com'},[{'productName':'shoes','quantity':5,'unitPrice':600},{'productName':'shoes','quantity':4,'unitPrice':500}],'available')
// console.log(order);
// console.log(order.totalCost());
// console.log(order.orderStatus('paid'));
// console.log(order.orderUrgency());



// // 4.In a startup’s employee review tool, design an Employee class with properties: id (number), name (string), 
// // performanceMetrics (object with keys like communication, efficiency, and reliability), and feedback (array of strings),
// //  then use prototypes to calculate an average score, classify performance level using control flow, and add new feedback based on conditions.

function Employee(id,name,performanceMetrics,feedback){
    this.id=id;
    this.name=name;
    this.performanceMetrics=performanceMetrics;
    this.feedback=feedback;

};
Employee.prototype.averageScore=function(){
      let sum = this.performanceMetrics.communication+this.performanceMetrics.efficiency+this.performanceMetrics.reliability
      let average=Object.keys(this.performanceMetrics).length
      return sum/average
        
};

Employee.prototype.classifyPerformance=function(){
if(this.averageScore <50){
  console.log(`Low perfomance`);

}else{
  console.log(`Best perfomance`);
}};   
Employee.prototype.newFeedback=function(feedback){
  this.feedback.push(feedback)
  console.log(`${feedback}`);

}
const employee = new Employee(20305,'Ayana',{'communication':50,'efficiency':60,'reliability':70},['love it','great','bad'])
console.log(employee);
console.log(employee.averageScore());
console.log(employee.classifyPerformance());
console.log(employee.newFeedback('good work'));


// // 5.Build a simple e-learning system where a Course class has properties: title (string), instructor (object with name and expertise), 
// // and students (array of objects with name and completionStatus), then add prototype methods to return names of students who completed the course,
// //  count enrolled students by expertise area, and use control flow to output different messages for instructors with more or less than 5 students.

function Course(title,instructor,students){
    this.title=title;
    this.instructor=instructor;
    this.students=students;

}

Course.prototype.studentsCompletedCourse=function(){
   return this.students.filter(student => student.completionStatus).map(student => student.name)
}
Course.prototype.studentsEnrolled=function(){
  return this.students.length

}
Course.prototype.instructors=function(){
  if(this.students.length < 5){
    return `${this.instructor.name} has less than 5 students enrolled`
  }else{
    return `${this.instructor.name} has more than 5 students enrolled`
  }
    
}
const course= new Course('Swahili',{name:'Manda',expertise:'Swahili',name:'Amel',expertise:'English'},
  [{name:'Yana',completionStatus:'Completed'},{name:'John',completionStatus:'Not Completed'},{name:'Daniella',completionStatus:'Completed'}])
console.log(course);
console.log(course.studentsCompletedCourse());
console.log(course.studentsEnrolled());
console.log(course.instructors());



