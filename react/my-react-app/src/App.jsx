import courses from "./data/courses";
import CourseCard from "./component/CourseCard";

import "./App.css";

function App() {
  return (
    <div className="container">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
        />
      ))}
    </div>
  );
}

export default App;