import courses from "../../data/courses";
import CourseCard from "../../components/CourseCard/CourseCard";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
        />
      ))}
    </div>
  );
}

export default Home;