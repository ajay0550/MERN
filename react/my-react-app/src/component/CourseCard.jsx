function CourseCard({ course }) {
  return (
    <div className="card">
      <img src={course.image} alt={course.title} />

      <h2>{course.title}</h2>

      <p><strong>Instructor:</strong> {course.instructor}</p>

      <p><strong>Price:</strong> ₹{course.price}</p>

      <p><strong>Duration:</strong> {course.duration}</p>

      <p><strong>Level:</strong> {course.level}</p>
    </div>
  );
}

export default CourseCard;