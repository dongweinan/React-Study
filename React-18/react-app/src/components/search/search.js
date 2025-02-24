import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import classes from './search.module.css'
import { useEffect, useState } from 'react'

const Search = (props) => {
  const [keyword, setKeyword] = useState('')
  const inputChange = (e) => {
    setKeyword(e.target.value.trim())
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      props.searchHandle(keyword)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [keyword])
  return (
    <div className={classes.SearchWrap}>
      <div className={classes.InputWrap}>
        <FontAwesomeIcon icon={faSearch} className={classes.SearchIcon} />
        <input
          type="text"
          className={classes.SearchInput}
          placeholder="请输入关键字"
          onChange={inputChange}
          value={keyword}
        />
      </div>
    </div>
  )
}

export default Search
