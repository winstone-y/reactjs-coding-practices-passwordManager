const PasswordItem = props => {
  const {eachPassword, showPasswords, onDelete} = props
  const {id} = eachPassword
  const onDeleteBtn = () => {
    onDelete(id)
  }

  return (
    <li className="password-list-item">
      <div className="password-container">
        <div className="initial-container">
          <h1 className="initial">{eachPassword.userName[0]}</h1>
        </div>
        <div className="password-details">
          <p className="password">{eachPassword.website}</p>
          <p className="password">{eachPassword.userName}</p>

          {showPasswords ? (
            <p className="password">{eachPassword.password}</p>
          ) : (
            <img
              className="stars"
              alt="stars"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
            />
          )}
        </div>
      </div>

      <button
        data-testid="delete"
        onClick={onDeleteBtn}
        type="button"
        className="delete-button"
      >
        <img
          className="delete-icon"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
        />
      </button>
    </li>
  )
}
export default PasswordItem
