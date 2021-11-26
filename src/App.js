import logo from './logo.svg';
import './App.css';
import React from "react"
import Mailchimp from './react-mailchimp-form'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Coming Soon!!</h1>
          <img width={ 50+'%'} src={logo}  alt={'ice cold lemon logo'}/>
          <h2>Sign up</h2>
          <p>for updates on things like new items and when we launch.</p>
          <Mailchimp
              action='https://icecoldlemon.us20.list-manage.com/subscribe/post?u=00d0f3210592df6bcaa7126ce&amp;id=0ad8392536'
              fields={[
                  {
                      name: 'EMAIL',
                      placeholder: 'Email',
                      type: 'email',
                      required: true
                  }
              ]}
          />
          <small>By clicking subscribe you consent to being added to our mailing list</small>
      </header>
    </div>
  );
}
export default App;
