import React from 'react'

const AutoComplete = ({ autoComplete, searchFromAutoComplete }) => {
  return (
    <>
      {autoComplete.length > 0 ? (
        <div className='auto-complete'>
          <ul className='auto-list'>
            {autoComplete.map((li) => (
              <li
                key={li.Key}
                className='auto-item'
                onClick={() => searchFromAutoComplete(li.LocalizedName)}
              >
                {li.LocalizedName}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  )
}

export default AutoComplete
