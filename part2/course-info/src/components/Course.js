import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = ({ course }) => {
  // console.log(course);
  const sum = course.parts.reduce((total, part) => total + part.exercises, 0);
  return (
    <>
      <Header course={course.name} />
      <Content content={course} />
      <Total sum={sum} />
    </>
  );
};

export default Course;
