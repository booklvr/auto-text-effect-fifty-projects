import React, { Fragment, useState, useEffect } from 'react'

const AutoTextEffect = () => {
  const [speedValue, setSpeedValue] = useState(1)
  const [idx, setIdx] = useState(1)

  const text = 'We love programming'

  const speed = 300 / speedValue

  

  useEffect(() => {
    setTimeout(() => setIdx(idx > text.length ? 1 : idx + 1), speed)
  })

  return (
    <Fragment>
      <h1>{text.slice(0, idx)}</h1>
      <div>
        <label htmlFor='speed'></label>
        <input
          type='number'
          name='speed'
          id='speed'
          value={speedValue}
          max='10'
          step='1'
          onChange={(e) => setSpeedValue(e.target.value)}
        />
      </div>
    </Fragment>
  )
}

export default AutoTextEffect
