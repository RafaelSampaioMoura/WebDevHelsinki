import React from 'react';

export const StatisticLine = ({ statistic, text }) => {
  return (
    <>
      {typeof statistic === 'function' ? (
        <>
          <td>{text}</td>
          <td>{statistic()}</td>
        </>
      ) : (
        <>
          <td>{text}</td>
          <td>{statistic}</td>
        </>
      )}
    </>
  );
};
