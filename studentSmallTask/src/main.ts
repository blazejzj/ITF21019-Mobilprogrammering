type Grade = "A" | "B" | "C" | "D" | "E" | "F";
type Status = "in_progress" | "completed";

interface Subject {
    id: string;
    name: string;
    points: number;
}

interface Student {
    id: number;
    name: string;
    enrollments: Enrollment[];
}

interface Enrollment {
    subjectId: string;
    grade?: Grade;
    status: Status;
    completedAt?: string;
}

const student1: Student = {
    id: 1,
    name: "Hello",
    enrollments: [
        {
            subjectId: "ITF12345",
            status: "in_progress",
        },
        {
            subjectId: "ITF54321",
            status: "completed",
            grade: "A",
            completedAt: "2025-10-10",
        },
    ],
};

//

const students: Student[] = [];
const subjects: Subject[] = [
    {
        id: "ITF12345",
        name: "Software Engineering",
        points: 10,
    },

    {
        id: "ITF54321",
        name: "Webapplikasjoner",
        points: 5,
    },
];

const addSubject = (subjects: Subject[], newSubject: Subject): Subject[] => {
    if (subjects.find((s) => s.id === newSubject.id)) {
        return subjects;
    }
    return [...subjects, newSubject];
};

const getGradeDistribution = (student: Student) => {
    return student.enrollments
        .filter(
            (enrollment) =>
                enrollment.status === "completed" && enrollment.grade
        )
        .map((enrollment) => enrollment.grade as Grade);
};

const getStudentSubjects = (
    student: Student,
    subjects: Subject[]
): Subject[] => {
    return student.enrollments
        .map((enrollment) =>
            subjects.find((subj) => subj.id === enrollment.subjectId)
        )
        .filter((subj): subj is Subject => subj !== undefined);
};

const getStudentReport = (student: Student, subjects: Subject[]): string => {
    const studentSubjects = getStudentSubjects(student, subjects);
    const totalPoints = studentSubjects.reduce(
        (sum, subj) => sum + subj.points,
        0
    );
    const grades = getGradeDistribution(student).join(", ") || "no grades yet";

    return `${student.name} is enrolled in ${studentSubjects.length} subjects 
with a total of ${totalPoints} points. Grades: ${grades}`;
};
