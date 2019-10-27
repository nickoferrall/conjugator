import React, { useState } from 'react';

import WeekChart from './Week';
import MonthChart from './Month';
import YearChart from './Year';

import Typography from '@material-ui/core/Typography';

function Charts() {
  const [value, setValue] = useState('0');

  const handleDropdown = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <Typography
        align="center"
        color="primary"
        variant="h4"
        style={{ marginTop: '5%' }}
      >
        Dashboard
      </Typography>
      <div
        style={{
          margin: '7% 10%'
        }}
      >
        <select value={value} onChange={handleDropdown}>
          <option value="0">Week</option>
          <option value="1">Month</option>
          <option value="2">Year</option>
        </select>
        <div
          style={{
            padding: '0 15px',
            marginTop: '15px',
            borderRadius: '4px',
            backgroundColor: '#fff',
            boxShadow:
              '0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)'
          }}
        >
          {value === '0' && <WeekChart />}
          {value === '1' && <MonthChart />}
          {value === '2' && <YearChart />}{' '}
        </div>
      </div>
    </>
  );
}

export default Charts;
