import { useState, useEffect } from 'react'

const Stories = () => {
  const [stories, setStories] = useState([])

  useEffect(() => {
    const abortController = new AbortController()
    fetch('https://news-proxy-230704.appspot.com/topstories', { signal: abortController.signal })
      .then((response) => response.json())
      .then((data) => setStories(data))
    return () => abortController.abort();
  }, [])

  return (
    <section className="Stories">
      <h3>Stories</h3>
      {stories.map((story) => {
        const { id, by, time, title, url } = story

        return (
          <article key={id}>
            <a href={url}>{title}</a>
            <p>
              {by} - {new Date(time).toLocaleString()}
            </p>
          </article>
        )
      })}
    </section>
  )
}

export default Stories
