const LogFilter = (props) => {
  const yearChange = (e) => {
    props.onFilterChange(e.target.value)
  }
  return (
    <div className="filter-wrap">
      年份：
      <select value={props.year} onChange={yearChange}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </div>
  )
}
export default LogFilter
