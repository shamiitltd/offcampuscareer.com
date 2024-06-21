// Array of courses with their details
const courses = [
    { title: "Web Design", description: "Professional web design services focused on creating engaging, user-friendly, and SEO-optimized websites that attract more visitors and convert them into loyal customers." },
    { title: "FullStack Development", description: "End-to-end full-stack development solutions, including front-end and back-end development, to build scalable and high-performance web applications tailored to your business needs." },
    { title: "Android Development", description: "Custom Android app development services to create innovative, user-friendly mobile applications that enhance user engagement and drive business growth." },
    { title: "Mobile App Design", description: "Expert mobile app design services that focus on creating intuitive and visually appealing applications for various mobile platforms, ensuring a seamless user experience." },
    { title: "iOS Development", description: "Professional iOS development services to create high-quality, performance-driven applications for Apple devices, ensuring a superior user experience and enhanced functionality." },
    { title: "ML & Deep Learning", description: "Advanced machine learning and deep learning solutions designed to leverage AI technologies for innovative projects, driving automation and insightful data analysis." },
    { title: "Game Development", description: "Creative game development services focusing on building immersive gaming experiences, including design, development, and deployment across various platforms." },
    { title: "Data Science", description: "Comprehensive data science services to support your business intelligence needs, including data analysis, visualization, and predictive modeling for better decision-making." }
];

// Function to display courses based on range or all
function displayCourses(startIndex, count) {
    const coursesContainer = document.getElementById('courses-container');
    coursesContainer.innerHTML = ''; // Clear previous content

    // Loop through courses to display
    for (let i = startIndex; i < startIndex + count && i < courses.length; i++) {
        const course = courses[i];
        // Create HTML for each course
        const courseHTML = `
            <div class="col-lg-3 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after ${i * 0.2}s">
                <a href="green-features-single.html" class="features-small-item">
                    <div class="icon">
                        <i class="fa fa-cloud"></i>
                    </div>
                    <h5 class="features-title">${course.title}</h5>
                    <p>${course.description}</p>
                    <div class="next">
                        <i class="fa fa-angle-right"></i>
                    </div>
                </a>
            </div>
        `;
        // Append course HTML to container
        coursesContainer.innerHTML += courseHTML;
    }
}

// Function to display all courses
function displayAllCourses() {
    displayCourses(0, courses.length);
}

// Initialize display on page load
document.addEventListener('DOMContentLoaded', function () {
    displayAllCourses(); // Automatically display all courses on page load
});
