import { useEffect, useState } from 'react'

const Joke = () => {
  const [joke, setJoke] = useState({})

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/jokes/random')
      .then((response) => response.json())
      .then((data) => setJoke(data))
  }, [])

  const { setup, punchline } = joke

  return (
    <section>
      <h3>Joke of the session</h3>
      <p>{setup}</p>
      <p>
        <em>{punchline}</em>
      </p>
    </section>
  )
}

export default Joke
