
const students = [
    {
        name: "Ananya ",
        course: "Information Science",
        skill: "Python",
        status: "Learning"
    },
    {
        name: "Rahul Kumar",
        course: "Computer Science",
        skill: "Web Development",
        status: "Completed"
    },
    {
        name: "Priya Reddy",
        course: "Information Science",
        skill: "Java",
        status: "In Progress"
    },
    {
        name: "Arjun Patel",
        course: "Electronics",
        skill: "Machine Learning",
        status: "Learning"
    },
    {
        name: "Sneha Rao",
        course: "Computer Science",
        skill: "JavaScript",
        status: "Completed"
    }
];

// Select HTML elements
const heading = document.getElementById("pageTitle");
const profileContainer = document.querySelector("#profileContainer");
const countDisplay = document.getElementById("studentCount");
const welcome = document.getElementById("welcomeMessage");

// Modify existing elements
heading.textContent = "Student Management Dashboard";
welcome.textContent = "Welcome! Explore our student profiles.";

// Create student cards dynamically
students.forEach(function(student, index) {

    const card = document.createElement("div");
    card.className = "profile-card";

    const avatar = document.createElement("div");
    avatar.className = "student-avatar";
    avatar.textContent = student.name.charAt(0);

    const name = document.createElement("h3");
    name.textContent = student.name;

    const course = document.createElement("p");
    course.textContent = "Course: " + student.course;

    const skill = document.createElement("p");
    skill.textContent = "Skill: " + student.skill;

    const status = document.createElement("span");
    status.className = "status";
    status.textContent = student.status;

    // Add elements to the card
    card.appendChild(avatar);
    card.appendChild(name);
    card.appendChild(course);
    card.appendChild(skill);
    card.appendChild(status);

    // Highlight the first student's card
    if (index === 0) {
        card.classList.add("highlight");
    }

    // Add the card to the webpage
    profileContainer.appendChild(card);
});

// Count the cards currently displayed
function updateStudentCount() {
    countDisplay.textContent =
        profileContainer.children.length;
}

updateStudentCount();

// Remove the last student card automatically
const lastCard = profileContainer.lastElementChild;
lastCard.remove();

// Update the count after removing the card
updateStudentCount();
