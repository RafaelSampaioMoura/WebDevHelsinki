import React from 'react'

export const PersonForm = ({newName, newNumber, handleChange, handleSumbit}) => {

  return (
    <form>
        <h3>Add new contact</h3>
        <div>
          name: <input name='name-input' onChange={handleChange} />
        </div>
        <div>debug: {newName}</div>
        <div>
          number: <input name='number-input' onChange={handleChange} />
        </div>
        <div>debug: {newNumber}</div>
        <div>
          <button type='submit' onClick={handleSumbit}>
            add
          </button>
        </div>
      </form>
  )
}
