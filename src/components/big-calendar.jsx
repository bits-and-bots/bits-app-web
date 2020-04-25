import React from 'react';

import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import * as dates from '../../src/utils/dates';

const localizer = momentLocalizer(moment);

let allViews = [Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA];

const BigCalendar = props => (
  <div>
    <Calendar
      localizer={localizer}
      events={props.events}
      startAccessor="start"
      endAccessor="end"
      views={allViews}
      step={60}
      showMultiDayTimes
      max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
      defaultDate={new Date(2020, 1, 1)}
      style={{
        height:600,
        fontFamily: 'Roboto'
      }}
    />
  </div>
);

export default BigCalendar;