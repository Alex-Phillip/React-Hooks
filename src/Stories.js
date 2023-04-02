import { useFetch } from './hooks'

function Stories() {
  const stories = useFetch(
    'https://news-proxy-230704.appspot.com/topstories',
    []
  )

  return (
    <section className="Stories">
      <h3>Stories</h3>
      {stories.map((story) => {
        const { id, by, time, title, url } = story

        return (
          <article key={id}>
            <a href={url} target="_blank" rel="noreferrer">
              {title}
            </a>
            <p>
              {by} - {new Date(time * 1000).toLocaleString()}
            </p>
          </article>
        )
      })}
    </section>
  )
}

export default Stories
