import { useEffect, useState } from 'react'

const Joke = () => {
  const [joke, setJoke] = useState({})

  useEffect(() => {
    const abortController = new AbortController()
    fetch('https://official-joke-api.appspot.com/jokes/random', { signal: abortController.signal })
      .then((response) => response.json())
      .then((data) => setJoke(data))
    return () => abortController.abort()
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
