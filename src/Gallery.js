import { useState, useEffect } from 'react'
import PICTURES from './data/pictures'

const SECONDS = 1000

function Gallery() {
  const [index, setIndex] = useState(0)
  const [delay, setDelay] = useState(3 * SECONDS)
  const [increment, setIncrement] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((storedIndex) => {
        return (storedIndex + 1) % PICTURES.length
      })
    }, delay)

    return () => {
      clearInterval(interval)
    }
  }, [delay])

  const updateDelay = (event) => {
    const delayInput = event.target.value
    delayInput >= 0.1
      ? setDelay(Number(event.target.value * SECONDS))
      : setDelay(3 * SECONDS)
  }

  return (
    <section className="Gallery">
      <img src={PICTURES[index].image} alt="gallery" />
      <article className="multiform">
        <div>
          Gallery transition delay (seconds):{' '}
          <input type="number" onChange={updateDelay} />
        </div>
      </article>
    </section>
  )
}

export default Gallery
