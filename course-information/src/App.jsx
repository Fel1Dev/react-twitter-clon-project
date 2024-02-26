const Header = ({ course }) => {
  console.log(course);
  return <h1 className="Header">{course}</h1>;
};

const Part = ({ part }) => {
  const {name, exercises} = part;
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Total = ({ total }) => {
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

export default App;
