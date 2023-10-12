document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculate-button");
    const totalMarksSpan = document.getElementById("total-marks");
    const averageGradeSpan = document.getElementById("average-grade");
    const statusSpan = document.getElementById("status");
    const availableCoursesSpan = document.getElementById("available-courses");

    calculateButton.addEventListener("click", function() {
        // Get the input values for all subjects
        const maths = parseInt(document.getElementById("maths").value);
        const physics = parseInt(document.getElementById("physics").value);
        const chemistry = parseInt(document.getElementById("chemistry").value);
        const biology = parseInt(document.getElementById("biology").value);
        const history = parseInt(document.getElementById("history").value);
        const religiousEducation = parseInt(document.getElementById("religious-education").value);
        const languages = parseInt(document.getElementById("languages").value);

        // Calculate total marks
        const totalMarks = maths + physics + chemistry + biology + history + religiousEducation + languages;
        totalMarksSpan.textContent = totalMarks;

        // Calculate average grade
        const averageGrade = totalMarks / 7;
        averageGradeSpan.textContent = averageGrade.toFixed(2);

        // Determine status and available courses
        let status = "SORRY";
        let availableCourses = "N/A";

        if (averageGrade >= 50) {
            status = "QUALIFIED";
            // Fetch available courses from your local JSON database (db.json)
            fetch('http://localhost:3000/films')
                .then(response => response.json())
                .then(data => {
                    availableCourses = data.join(", ");
                    availableCoursesSpan.textContent = availableCourses;
                })
                .catch(error => {
                    console.error("Error fetching available courses: " + error);
                });
        }

        statusSpan.textContent = status;
    });
});
