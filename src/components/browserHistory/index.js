import './index.css'

const BrowserHistory = props => {
  const {details, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details
  const detail = () => {
    deleteItem(id)
  }
  return (
    <li className="list">
      <p>{timeAccessed}</p>
      <div className="history-icon">
        <img src={logoUrl} alt="domain logo" className="domain-logo" />
        <p>{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <button type="button" className="button" data-testid="delete">
        <img
          onClick={detail}
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default BrowserHistory
