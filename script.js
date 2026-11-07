
class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    // حساب متوسط الدرجات باستخدام reduce
    calculateAverage() {
        let total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }

    // تحديد التقدير بالحروف
    getGrade(average) {
        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    // تحديد النتيجة النهائية
    getResult(average) {
        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}

// إنشاء مصفوفة الطلاب
let studentsList = [
    new Student(101, "mostafa", [90, 85, 95], 90),
    new Student(102, "mohamed", [45, 48, 46], 80),
    new Student(103, "adam", [70, 75, 80], 85),
    new Student(104, "mahmed", [40, 45, 48], 70)
];

// طباعة تقرير كل طالب
console.log("===== Students Report =====");

studentsList.forEach(student => {
    let average = student.calculateAverage();

    console.log({
        Name: student.name,
        Average: average,
        Grade: student.getGrade(average),
        Result: student.getResult(average)
    });
});

// لجنة الرأفة: استخراج الطلاب متوسطهم بين 40 و49
let strugglingStudents = studentsList.filter(student => {
    let average = student.calculateAverage();
    return average >= 40 && average <= 49;
});

// إضافة 5 درجات رأفة باستخدام map
let mercyStudents = strugglingStudents.map(student => {
    let oldAverage = student.calculateAverage();
    let newAverage = oldAverage + 5;

    return {
        Name: student.name,
        OldAverage: oldAverage,
        NewAverage: newAverage
    };
});

// جمع المتوسطات الجديدة باستخدام reduce
let totalNewAverages = mercyStudents.reduce((sum, student) => {
    return sum + student.NewAverage;
}, 0);

// درع الحماية من القسمة على صفر
let mercyAverage = mercyStudents.length > 0
    ? totalNewAverages / mercyStudents.length
    : 0;

// طباعة نتائج لجنة الرأفة
console.log("===== Mercy Committee =====");
console.log(mercyStudents);

console.log("Mercy Average:", mercyAverage);
