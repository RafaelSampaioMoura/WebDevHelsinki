import React from 'react';
import { Button } from './Button';

export const Feedback = ({clickGood, clickBad, clickNeutral}) => {
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={clickGood} text='good'/>
      <Button onClick={clickNeutral} text='neutral'/>
      <Button onClick={clickBad} text='bad'/>
    </div>
  );
};
