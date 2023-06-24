import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from './Components/PasswordItem'
import './App.css'

class App extends Component {
  state = {
    passwordsList: [],
    website: '',
    userName: '',
    password: '',
    searchInput: '',
    showPasswords: false,
  }

  onWebsite = event => {
    this.setState({website: event.target.value})
  }

  onUsername = event => {
    this.setState({userName: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  onAdd = event => {
    event.preventDefault()
    const {userName, password, website} = this.state
    const newPasswordItem = {userName, password, website, id: uuidv4()}
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPasswordItem],
      userName: '',
      password: '',
      website: '',
    }))
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPasswords: !prevState.showPasswords}))
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value.toLowerCase()})
  }

  onDelete = id => {
    const {passwordsList} = this.state
    const newList = passwordsList.filter(eachItem => eachItem.id !== id)
    this.setState({passwordsList: newList})
  }

  render() {
    const {
      passwordsList,
      showPasswords,
      userName,
      password,
      website,
      searchInput,
    } = this.state
    const filterPasswords = passwordsList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput),
    )
    const count = filterPasswords.length

    return (
      <div className="app">
        <img
          alt="app logo"
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        />
        <div className="app-top">
          <form onSubmit={this.onAdd} className="form">
            <h1 className="app-title">Add New Password</h1>
            <div className="input-container">
              <img
                alt="website"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                className="input-logo"
              />
              <input
                value={website}
                onChange={this.onWebsite}
                className="input"
                type="text"
                placeholder="Enter Website"
              />
            </div>
            <div className="input-container">
              <img
                alt="username"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                className="input-logo"
              />
              <input
                value={userName}
                onChange={this.onUsername}
                className="input"
                type="text"
                placeholder="Enter Username"
              />
            </div>
            <div className="input-container">
              <img
                alt="password"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                className="input-logo"
              />
              <input
                value={password}
                onChange={this.onPassword}
                className="input"
                type="password"
                placeholder="Enter Password"
              />
            </div>
            <div className="button-container">
              <button type="submit" className="add-button">
                Add
              </button>
            </div>
          </form>
          <div className="image-container">
            <img
              alt="password manager"
              className="app-image"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png "
            />
          </div>
        </div>
        <div className="app-bottom">
          <div className="bottom-header">
            <div className="counter">
              <h1 className="app-title">Your Passwords</h1>
              <p className="app-desc">{count}</p>
            </div>
            <div className="input-container">
              <img
                className="input-logo"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
              />
              <input onChange={this.onSearch} type="search" className="input" />
            </div>
          </div>
          <div className="show-password">
            <div className="checkbox-container">
              <input
                id="checkbox"
                onChange={this.onShowPassword}
                type="checkbox"
                className="checkbox"
              />
            </div>
            <label htmlFor="checkbox" className="app-desc">
              Show Passwords
            </label>
          </div>
          {count === 0 ? (
            <div className="no-passwords">
              <img
                alt="no passwords"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                className="no-passwords-image"
              />
              <p className="app-title">No Passwords</p>
            </div>
          ) : (
            <ul className="passwords-list">
              {filterPasswords.map(eachPassword => (
                <PasswordItem
                  key={eachPassword.id}
                  eachPassword={eachPassword}
                  showPasswords={showPasswords}
                  count={count}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
