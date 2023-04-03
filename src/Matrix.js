import { useState } from 'react'
import MATRIX_FRAMES from './data/matrix'
import { useDynamicTransition } from './hooks'

const SECONDS = 1000
const minimumDelay = 0.1 * SECONDS
const minimumIncrement = 1

function Matrix() {
  const [delay, setDelay] = useState(minimumDelay)
  const [increment, setIncrement] = useState(minimumIncrement)

  const index = useDynamicTransition({
    increment,
    delay,
    length: MATRIX_FRAMES.length,
  })

  const updateDelay = (event) => {
    const delay = Number(event.target.value * SECONDS)

    setDelay(delay < minimumDelay ? minimumDelay : delay)
  }

  const updateIncrement = (event) => {
    const increment = Number(event.target.value)

    setIncrement(
      increment < minimumIncrement || increment > MATRIX_FRAMES.length - 1
        ? minimumIncrement
        : increment
    )
  }

  return (
    <section className="Matrix">
      <h3>Matrix</h3>
      <article className="multiform">
        <img src={MATRIX_FRAMES[index]} alt="matrix" />
        <div>
          Matrix transition delay (seconds):
          <input type="number" onChange={updateDelay} />
        </div>
        <div>
          Matrix increment:
          <input type="number" onChange={updateIncrement} />
        </div>
      </article>
    </section>
  )
}

export default Matrix
