import React, { useEffect, useState } from 'react'
import R3f from '../R3f'

const Header = ({ toggleModal, numofChars, data }) => {

  const [instanceCount, setInstanceCount] = useState(numofChars); 

  useEffect(() => { setInstanceCount(numofChars)}, [numofChars])


  return (
    <>
      <header className='header'>
          <div className='header-title'>
              <h3> Hall of Fame ({numofChars}) </h3>
          </div>
          <div className='header-btn-wrapper'>
            <button onClick={() => toggleModal(true)} className='btn'> Add New Character </button>
          </div>
      </header>

      {/* R3F Experience */}
      <R3f instanceCount={instanceCount} data={data}/>
    </>

  )
}

export default Header