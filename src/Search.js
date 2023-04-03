import { useState } from 'react'
import Button from './Button'

function Search() {
  const [userQuery, setUserQuery] = useState('')

  const searchQuery = () => {
    window.open(`https://google.co.uk/search?q=${userQuery}`, '_blank')
  }

  const updateUserQuery = (event) => {
    setUserQuery(event.target.value)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchQuery()
    }
  }

  return (
    <section>
      <h3>Google Search</h3>
      <article className="form">
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyDown={handleKeyPress}
        />
        <Button onClick={searchQuery}>Search</Button>
      </article>
    </section>
  )
}
export default Search
