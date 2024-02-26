const Header = ({ course }) => {
  console.log(course);
  return <h1 className="Header">{course}</h1>;
};

const Content = ({ parts }) => {
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

const Total = ({ parts }) => {
  const total = parts.reduce((prev, curr) => curr.exercises + prev, 0);
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
