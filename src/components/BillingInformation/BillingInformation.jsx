import React from 'react'
import './BillingInformation.css'

function BillingInformation() {
  return (
    <div className='billing-information'>

      <h2>Payment Terms</h2>

      <p>Please review your payment terms and provide your acceptance. </p>

      <p>Your payment terms are 45EOM10 days from receiving a proper tax invoice. Please submit invoice after completion of services and provide supporting documents, if applicable</p>
     
      <p><b>Kindly note:</b> NIIT may be able to offer lower payment terms in support of country regulations for a registered small and medium enterprise company.</p>

      <label htmlFor="payment-terms">Payment Terms:</label>
      <input type="text" id='payment-terms' name='payment-terms' />

      <h2>Cancellation Terms (Calendar Days)</h2>
      <p>Please provide your acceptance to the cancellation terms.</p>
      <p><b>The service order is subject to the following cancellations terms in calendar days:</b></p>
      <ul>More than or equal to 12 calendar days before the training start date: No cancellation fee</ul>
      <ul>Between 11 and 06 calendar days before the training start date: Maximum 50% of the course fee</ul>
      <ul>Less than or equal to 05 calendar days before the training start date: 100% of the course fee</ul>

      <label htmlFor="cancellation-terms">Cancellation Terms:</label>
      <input type="text" id='cancellation-terms' name='cancellation-terms' />

      <p id='note'><b>Note: </b> The above-mentioned payment & cancellation payment terms are standard terms for all suppliers and are endorsed by Ultimate Client.</p>
      <hr />
    </div>
    
  )
}

export default BillingInformation