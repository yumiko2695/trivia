import React, {useEffect, useState, Checkbox} from 'react'


function Question(props) {
  const  {q} = props
  return (
    <div>
      {q && q.question ?
      <div>
        <h3>Question: {q.question}</h3>
      {q.incorrect.map((choice) => {
        <Checkbox value={choice}></Checkbox>
      })}s
        </div>
      : <div></div>}

    </div>
  )
}

export default Question
