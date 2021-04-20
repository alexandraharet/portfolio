import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Links from './components/Links/Links';
import Rsvp from './components/Rsvp/Rsvp';
import enStrings from './strings/en.json'
import itStrings from './strings/it.json'
import roStrings from './strings/ro.json'
import './App.css';
import Venue from './components/Venue/Venue';

interface Translations {
  preheader: string,
  invite: {
    line1: string,
    line2: string
  },
  date: string,
  localtion: string,
  venueButton: string,
  rsvpButton: string,
}

enum Locales {
  en = 'en',
  it = 'it',
  ro = 'ro',
}

const strings = {
  en: enStrings,
  ro: roStrings,
  it: itStrings
}

export class App extends React.Component<{}, { value: string, strings: Translations }> {
  constructor(props: any) {
    super(props)
    this.state = {
      value: "en",
      strings: strings.en
    }
  }

  getStrings = (newLang: Locales) => {
    return strings[newLang];
  }

  onLanguageHandle = (newLang: Locales) => {
    this.setState({value: newLang})
    this.setState({
      strings: strings[newLang]
    });
    debugger;
  };

  renderRadioButtons = () => {
    return (<div className='languageSelect'>
         <input
           checked={this.state.value === 'en'}
           name="language"
           onChange={() => this.onLanguageHandle(Locales.en)}
           value="en"
           type="radio" />EN &nbsp;
         <input
           name="language"
           value="jp"
           checked={this.state.value === 'ro'}
           type="radio"
           onChange={() => this.onLanguageHandle(Locales.ro)}
        />RO &nbsp;
         <input
           name="language"
           value="jp"
           checked={this.state.value === 'it'}
           type="radio"
           onChange={() => this.onLanguageHandle(Locales.it)}
        />IT
   </div>)
  }

  render() {
    return(<div className="App">
      {this.renderRadioButtons()}
      <meta name="robots" content="noindex, nofollow"></meta>
      <header className="header">
        <Header />
      </header>
      <body className="body">
        <p>{this.state.strings.preheader}</p>
        <h1 className="title">
          Alexandra & Teo
        </h1>
        <p>{this.state.strings.invite.line1}</p>
        <p>{this.state.strings.invite.line2}</p>
        <h3 className="subtitle">{this.state.strings.date}</h3>
        <p>{this.state.strings.localtion}</p>
        {/* <Links></Links> */}
        <Venue text={this.state.strings.venueButton}/>
        <Rsvp text={this.state.strings.rsvpButton}/>
      </body>
      <Footer />
    </div>)
  };
}

export default App;
