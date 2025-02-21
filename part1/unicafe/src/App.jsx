import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, num }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{num}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const sumAll = () => good+neutral+bad
  if (sumAll() < 1) {
    return <p>No feedback given</p>
  }


  const average = () => (good-bad) / sumAll();
  const positiveRatio = () => good / sumAll()*100 + '%';

  return (
    <table>
      <tbody>
        <StatisticLine text="good" num={good} />
        <StatisticLine text="neutral" num={neutral} />
        <StatisticLine text="bad" num={bad} />
        <StatisticLine text="all" num={sumAll()} />
        <StatisticLine text="average" num={average()} />
        <StatisticLine text="positive" num={positiveRatio()} />
      </tbody>
    </table>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App