import React from 'react'

function ServiceOffered() {
  return (
    <div className='service-offered'>

      <div className="service-uoffer">
        <h2>Select the services that you offer</h2>

        <input type="checkbox" id='you-offer' name='you-offer' />
        <label htmlFor="you-offer">Learning Services</label>

      </div>
        
    </div>
  )
}

export default ServiceOffered