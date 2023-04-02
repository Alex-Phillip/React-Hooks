import { useFetch } from './hooks'

const Joke = () => {
  const { setup, punchline } = useFetch(
    'https://official-joke-api.appspot.com/jokes/random',
    {}
  )

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
