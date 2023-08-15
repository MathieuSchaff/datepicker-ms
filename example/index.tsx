import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DatePicker } from '../src/DatePicker/DatePicker';
const App = () => {
  const [date, setDate] = React.useState<Date>(new Date());
  return (
    <div>
      <DatePicker
        name="date"
        value={date}
        onChange={setDate}
        withPrefix={true}
        withSuffix={true}
        id="datePicker"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
