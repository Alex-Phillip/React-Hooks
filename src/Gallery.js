import { useState, useEffect } from 'react'
import PICTURES from './data/pictures'

function Gallery() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setIndex((index) => {
        return (index + 1) % PICTURES.length
      })
    }, 3000)
  }, [])

  console.log('index: ', index)
  return (
    <article className="Gallery">
      <img src={PICTURES[index].image} alt="gallery" />
    </article>
  )
}

export default Gallery
