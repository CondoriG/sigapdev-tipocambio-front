import React, { Component } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';

class Datepicker extends Component {
    render() {
      return (
        <DateRangePicker startDate="1/1/2014" endDate="3/1/2014">
          <button>Click Me To Open Picker!</button>
        </DateRangePicker>
      );
    }
  }

  export default Datepicker;