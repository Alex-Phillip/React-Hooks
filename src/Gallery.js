import { useState } from 'react'
import PICTURES from './data/pictures'
import { useDynamicTransition } from './hooks'

const SECONDS = 1000
const minimumDelay = 0.1 * SECONDS
const standardDelay = 3 * SECONDS
const minimumIncrement = 1

function Gallery() {
  const [delay, setDelay] = useState(3 * SECONDS)
  const [increment, setIncrement] = useState(minimumIncrement)

  const index = useDynamicTransition({
    delay,
    increment,
    length: PICTURES.length,
  })

  const updateDelay = (event) => {
    const delay = Number(event.target.value * SECONDS)

    setDelay(delay < minimumDelay ? standardDelay : delay)
  }

  const updateIncrement = (event) => {
    const increment = Number(event.target.value)

    setIncrement(
      increment < minimumIncrement || increment > PICTURES.length - 1
        ? minimumIncrement
        : increment
    )
  }

  return (
    <section className="Gallery">
      <img src={PICTURES[index].image} alt="gallery" />
      <article className="multiform">
        <div>
          Gallery transition delay (seconds):
          <input type="number" onChange={updateDelay} />
        </div>
        <div>
          Gallery increment (maximum 4):{' '}
          <input type="number" onChange={updateIncrement} />
        </div>
      </article>
    </section>
  )
}

export default Gallery
