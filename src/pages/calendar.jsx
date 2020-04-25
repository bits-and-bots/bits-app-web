import React from 'react';

import '../styles/pages/calendar.scss';
import BigCalendar from '../components/big-calendar.jsx';

class Calendar extends React.Component {
  componentDidMount = () => {
    window.gapi.load('client', () => {
      this.fetchEvents()
    });
  };

  fetchEvents() {
    window.gapi.client.init({
      'apiKey': process.env.REACT_APP_GOOGLE_API_KEY
    }).then(() => {
      window.gapi.client.load("calendar", "v3", () => {
        return window.gapi.client.calendar.events.list({
          'calendarId': 'bitsandbots.neu@gmail.com',
          'timeZone': new Date().getTimezoneOffset(),
          'singleEvents': true,
          'timeMin': (new Date()).toISOString(),
          'maxResults': 20,
          'orderBy': 'startTime'
        }).then( (response) => {
          let events = response.result.items;
          this.setState({
            events
          }, ()=>{
            console.log(this.state.events);
          })
        }, function(reason) {
          console.log(reason);
        });
      });
    });
  };

  render() {
    return (
      <div className="page-calendar__div__wrapper-page">
        <header className="page-shared__header__container-splash-header">
          <h2 className="page-shared__h2__header-title"><span>Bits &amp; Bots</span> Calendar</h2>
        </header>

        <div className="page-calendar__div__container-big-calendar">
          <BigCalendar events={[]}/>
        </div>

        <div className="page-calendar__div__spacer"></div>
      </div>
    );
  }
}

export default Calendar;
