import "./CourseCard.css";

function CourseCard({ course }) {
  return (
    <div className="course-card">

      <img src={course.image} alt={course.title} />

      <div className="course-content">

        <h2>{course.title}</h2>

        <p className="instructor">
           {course.instructor}
        </p>

        <div className="details">
          <span>⏱ {course.duration}</span>
          <span>{course.level}</span>
        </div>

        <div className="price">
          ₹{course.price}
        </div>

        <button className="enroll-btn">
          Enroll Now
        </button>

      </div>

    </div>
  );
}

export default CourseCard;