function calculateGPA(grades) {
     let total = 0;
     let numGrades = grades.length;
     
     for (let i = 0; i < numGrades; i++) {
         let grade = grades[i];
         
         if (grade >= 90) {
             total += 4.0;
         } else if (grade >= 80) {
             total += 3.0;
         } else if (grade >= 70) {
             total += 2.0;
         } else if (grade >= 60) {
             total += 1.0;
         } else {
             total += 0.0;
         }
     }
     
     let gpa = total / numGrades;
     return gpa;
 }
 
 let grades = [90, 85, 88, 72, 95];
 
 let gpa = calculateGPA(grades);
 console.log("GPA: " + gpa);
 