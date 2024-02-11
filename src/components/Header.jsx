import React, { useState } from 'react'
import R3f from '../R3f'

const Header = ({ toggleModal, numofChars }) => {

  const [instanceCount, setInstanceCount] = useState(numofChars);

  return (
    <>
      <header className='header'>
          <div className='header-title'>
              <h3> Games List ({numofChars}) </h3>
          </div>
          <div className='header-btn-wrapper'>
            <button onClick={() => toggleModal(true)} className='btn'> Add New Game </button>
            {/* <button onClick={() => toggleDeleteModal(true)} className='btn'> Delete Game </button> */}
          </div>
      </header>

      {/* R3F Experience */}
      <R3f instanceCount={instanceCount}/>
    </>

  )
}

export default Header