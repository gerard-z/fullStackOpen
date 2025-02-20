const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a + b)
  const name = "Peter"
  const age = 10
  const friends = [
    { name: "Peter", age: 40 },
    { name: "Maya", age: 26 },
  ]

  return (
    <>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <p>
        {friends[0].name} {friends[0].age}
      </p>
      <p>
        {friends[1].name} {friends[1].age}
      </p>
    </>
  )
}

export default App