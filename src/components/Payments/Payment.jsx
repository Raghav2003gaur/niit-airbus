import React from 'react';
import './Payments.css';

function Payment() {
  return (
    <div className='all-payments'>
      <div className="supplier-payment">
        <h2>NIIT Payments to Suppliers</h2>
        <p>All Invoices along with supporting documents should be submitted via NIIT Partner Portal. NIIT partners view purchase orders and/or service delivery request to submit invoices and track status on the partner portal. The portal has the option for partners to submit an email to any queries or issues they may face.</p><br />
      <p>The primary contact person will receive the login details to access the partner portal.</p>
      <hr />
      
      </div>

      <div className="privacy-policy">
        <h2>Privacy Policy</h2>

        <p>By submitting the information in the registration form, you consent to NIIT and its affiliates using it solely for the purposes related to the agreed-upon services with NIIT. For a detailed understanding of how we collect, utilize, and safeguard your personal information, please refer to our privacy policy provided here. NIIT strictly adheres to all applicable global privacy laws and regulations in the countries where we operate, including, but not limited to, the GDPR.</p>
        <input type="checkbox" id='privacy' name='privacy' />
        <label htmlFor="privacy">Yes I understand and agree to NIIT Privacy Policy (Click <a href="https://privacy.niit.com/business_partner.html"> here </a>to review the policy)</label>
       
      </div>
    

      <div className="supplier-declaration">
        <p>The information provided herein is accurate and valid on the date of submission.</p>

        <form action="/">

        <div class="form-group">
        <label htmlFor="supplier-name">Name:</label>
      <input type="text" id='supplier-name' name='supplier-name' />
    </div>


    <div class="form-group">
    <label htmlFor="supplier-date">Date:</label>
    <input type="text" id='supplier-date' name='supplier-date' />
    </div>
    </form>
    <hr />

        

        

       
      
      </div>


        
    </div>
  )
}

export default Payment