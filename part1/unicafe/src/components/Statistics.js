import React from 'react';
import { StatisticLine } from './StatisticLine';

export const Statistics = ({ good, bad, neutral, average, positive }) => {
  return (
    <>
      {good === 0 && bad === 0 && neutral === 0 ? (
        <h2>No feeback given</h2>
      ) : (
        <>
          <h1>Statistics</h1>
          <table>
            <tbody>
              <tr>
                <StatisticLine statistic={good} text='good' />
              </tr>
              <tr>
                <StatisticLine statistic={bad} text='bad' />
              </tr>
              <tr>
                <StatisticLine statistic={neutral} text='neutral' />
              </tr>
              <tr>
                <StatisticLine statistic={() => average()} text='average' />
              </tr>
              <tr>
                <StatisticLine statistic={() => positive()} text='positive' />
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
};
