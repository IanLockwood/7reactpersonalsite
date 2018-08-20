import React, { Component } from 'react';
import '../../css/App.scss';
import '../../css/grid-row.scss';
import ian from '../../assets/Ian.jpg'
import resume from '../../assets/ian-lockwood-resume.jpg'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="grid-row">
          <div className="col-8-mobile col-2-desktop">
          <img src={ian} className="img-shadowed" />
          </div>
          <div className="col-8-mobile col-5-desktop offset-1-desktop">
            <h1>{"Hi, I'm Ian Lockwood"}</h1>
            <p>Nice to meet you.</p>
            <h2>{"I'm a front end developer."}</h2>
            <p>{"I'm especially good at React, Ruby on Rails, CSS, and UI/UX design. This site is actually a React app!"}</p>
            <p>This site is actually a React app!</p>
          </div>
        </div>
        <div className="grid-row grid-row__top-pad">
          <div className="col-8-mobile col-6-desktop offset-1-desktop">
            <h2 className="center">Take a look at my resume.</h2>
            <img src={resume} className="img-shadowed" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
