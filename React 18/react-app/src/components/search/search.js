import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import classes from './search.module.css'

const Search = (props) => {
  const inputChange = (e) => {
    const keyword = e.target.value.trim()
    props.searchHandle(keyword)
  }
  return (
    <div className={classes.SearchWrap}>
      <div className={classes.InputWrap}>
        <FontAwesomeIcon icon={faSearch} className={classes.SearchIcon} />
        <input
          type="text"
          className={classes.SearchInput}
          placeholder="请输入关键字"
          onChange={inputChange}
        />
      </div>
    </div>
  )
}

export default Search
