/*eslint-disable */
import React, { useState, useEffect } from 'react';
import { MY_LOGS_BY_DATE } from '../../gql/logs.gql';
import moment from 'moment';
import { useQuery } from 'react-apollo-hooks';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

function YearlyChart() {
  const [yearData, setYearData] = useState([0]);

  const oneYearAgo = moment()
    .subtract(12, 'M')
    .format('YYYY-MM-DD');

  const { data, loading, refetch } = useQuery(MY_LOGS_BY_DATE, {
    variables: {
      date: oneYearAgo
    }
  });

  useEffect(() => {
    refetch();
  }, []);

  // We create an array of objects with the month and
  // the count of correct and total answers in that month.
  // "name" is used for the graph
  // "dateForUseEffect" is used for mapping in useEffect

  // we map through the users logs for the month
  // getMonth() returns 0-11
  // we then map through the arr created above
  // if the row in the above arr has the same month
  // as the user log, we increase the total answers and
  // correct (if correct)
  // this is a nested for loop and there may be a more
  // efficient way of doing this
  // it currently only re-renders when data query is updated
  // if a user answers a question, they won't see the update
  // using fetch in GQL might solve this
  useEffect(() => {
    if (data && data.myLogs) {
      let arr = [];
      let months = 11;
      while (months >= 0) {
        arr.push({
          name: moment()
            .subtract(months, 'M')
            .format('MMM YY'),
          correct: 0,
          answers: 0,
          dateForUseEffect: parseInt(
            moment()
              .subtract(months, 'M')
              .format('M')
          )
        });
        months--;
      }

      data.myLogs.map(val => {
        const aDate = new Date(val.createdAt);
        const theMonth = aDate.getMonth();

        arr.map(row => {
          if (row.dateForUseEffect === theMonth + 1) {
            row.answers += 1;
            if (val.correct === true) {
              row.correct += 1;
            }
          }
        });
        setYearData(arr);
      });
    }
  }, [data]);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const correct = () => {
    const correct = yearData.map(yearData => yearData.correct);
    return correct.reduce(reducer);
  };

  const answers = () => {
    const answers = yearData.map(yearData => yearData.answers);
    return answers.reduce(reducer);
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <ResponsiveContainer>
        <AreaChart width={600} height={200} data={yearData} syncId="anyId">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            padding={{ left: 15, right: 15 }}
            interval={2}
          />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="answers" />
          <Area type="monotone" dataKey="correct" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default YearlyChart;
