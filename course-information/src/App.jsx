const Header = ({ course }) => {
  console.log(course);
  return <h1 className="Header">{course.name}</h1>;
};

const Content = ({ course }) => {
  const {parts} = course;
  const part1 = parts[0];
  const part2 = parts[1];
  const part3 = parts[2];
  return (
    <>
      <p>
        {part1.name} {part1.exercises}
      </p>
      <p>
        {part2.name} {part2.exercises}
      </p>
      <p>
        {part3.name} {part3.exercises}
      </p>
    </>
  );
};

const Total = ({ course }) => {
  const {parts} = course;
  const total = parts.reduce((prev, curr) => curr.exercises + prev, 0);
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
