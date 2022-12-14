import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  });

  const handleAnecdote = () => {
    const index = Math.floor(Math.random() * (6 - (0 + 1)));
    setSelected(index);
  };

  const handleVotes = () => {
    setVotes({ ...votes, [selected]: votes[selected] + 1 });
  };

  const arr = Object.values(votes);
  const max = Math.max(...arr);
  const mostVoted = Object.keys(votes).find((vote) => votes[vote] === max);

  return (
    <>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <button onClick={() => handleVotes()}>vote</button>
      <button onClick={() => handleAnecdote()}>next anecdote</button>
      <div>
        <h1>Most voted anecdote: </h1>
        <div>{anecdotes[mostVoted]}</div>
        <div>has {votes[mostVoted]} votes</div>
      </div>
    </>
  );
};

export default App;
