import { useState } from 'react'

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
    setTotal(left + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    setTotal(left + right)
  }

  const handleLeftClickObj = () =>
    setClicks({ ...clicks, left: clicks.left + 1 })
  
  const handleRightClickObj = () =>
    setClicks({ ...clicks, right: clicks.right + 1 })


  console.log('rendering with counter value', counter)

  const modifyByValue = (newValue) => () => {
    console.log("modified by", newValue, "value before was", counter)
    setCounter(counter + newValue)
  }

  const setToValue = (newValue) => () => {
    console.log('resetting to', newValue, 'value before', counter)
    setCounter(newValue)
  }

  const now = new Date()
  const a = 10
  const b = 20
  const name = "Peter"
  const age = 10
  const friends = [
    { name: "Peter", age: 40 },
    { name: "Maya", age: 26 },
  ]

  return (
    <>
      <div>
        {clicks.left}
        <button onClick={handleLeftClickObj}>left</button>
        <button onClick={handleRightClickObj}>right</button>
        {clicks.right}
      </div>
      <div>
        {left}
        <Button onClick={handleLeftClick} text='left' />
        <Button onClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks} />
      </div>
      <Display counter={counter}/>
      <Button
        onClick={setToValue(counter+1)}
        text='plus'
      />
      <Button
        onClick={setToValue(0)}
        text='zero'
      />
      <Button
        onClick={setToValue(counter-1)}
        text='minus'
      />
      <Button
        onClick={setToValue(100)}
        text='hundred'
      />  
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