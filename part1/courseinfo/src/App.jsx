const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = (props) => {
  console.log("Part:", props)
  return (
    <p>{props.part.name} {props.part.exercises}</p>
  )
}

const Content = (props) => {
  console.log("Content", props)
  const [part1, part2, part3] = props.parts
  return(
    <>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </>
  )
}

const Total = ({ parts }) => {
  console.log("TOTAL:", parts)
  let sum = 0
  parts.forEach(part => sum += part.exercises)
  return <p>Number of exercises {sum}</p>
}

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
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App