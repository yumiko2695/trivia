
import React, {useState, useEffect} from 'react'
import data from './Apprentice_TandemFor400_Data.json'
import Question from './Question'

function Main() {
  const [started, setStarted] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(0)
  const [unanswered, setUnanswered] = useState(21)
  const [questions, setQuestions] = useState(data)
  const [selected, setSelected] = useState(false)


  const handleButtonClick = async (event) => {
    setStarted(!started)
  }

  useEffect(() => {

      return () => {
        const num = Math.floor(Math.random() * unanswered)
        const newQuestions = [...questions]
        const selectedNum = newQuestions.splice(num-1, 1)
        setSelected(selectedNum[0])
        setQuestions(newQuestions)
        console.log(selectedNum)
        console.log(newQuestions)
        console.log(selected)
        console.log(questions)
      };


  }, [started])

  return (
    <div className="Main">
      <div className="GameInfo">
        <h1>Tandem Trivia Game!</h1>
        {started ?
      <div>
        <h2>Completed Questions: {completed}</h2>
        <h2>Questions Left: {unanswered}</h2>
        <h2>Score: {score}</h2>
        </div>
        :
        <h2>21 Questions</h2>
        }

      </div>
      <div className="Question">
      {/* if Completed Questions = 0 --> show Start Game */}
      {!started
      ?
      <button onClick={handleButtonClick}>Start Trivia!</button>
      : <Question q={questions[selected-1]}/>
      }

      </div>

    </div>
  );
}

export default Main;
