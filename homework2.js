let count = 1;
let x = "# ";
for (i = 0; i <= 4; i += 1) {
    console.log(x.repeat(count));
    count += 1;
}

function assignGrade(score) {
    let grade

    switch(true) {
        case(score <= 100 && score >= 90):
            grade = 'A';
                break;
        case(score <= 89 && score >= 80):
            grade = 'B';
                break;
        case(score <= 79 && score >= 70):
            grade = 'C';
                break;
        case(score <= 69 && score >= 60):
            grade = 'D';
                break;
        case(score <= 59 && score >= 0):
            grade = 'F';
                break;
        case(score > 100 && score < 0):
            grade = 'INVALID SCORE';
                break;
    }
    return grade
}
let grade = assignGrade(68)
console.log(grade)
// created a function to assign grades for students test scores.