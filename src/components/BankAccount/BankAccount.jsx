import React from 'react'
import './BankAccount.css'

function BankAccount() {
  function dropHandler(ev) {
    console.log("File(s) dropped");
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...ev.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          console.log(`… file[${i}].name = ${file.name}`);
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  }
  function dragOverHandler(ev) {
    console.log("File(s) in drop zone");
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }
  
  


  return (
    <div className='bank-account'>
      <h2>Bank Account Details</h2>
      <h3>Please provide your bank details for NIIT to payments for your invoices.</h3>

      <form action="/">
      <div className="form-group">
      <label htmlFor="account-number">Bank Account Number:</label>
      <input type="number" id='account-number' name='account-number' />
      </div>


      <div className="form-group">
      <label htmlFor="routing-number">Sort/Routing Code (if applicable):</label>
      <input type="number" id='routing-number' name='routing-number' />
      </div>


      <div className="form-group">
      <label htmlFor="iban-number">IBAN Number:</label>
      <input type="number" id='iban-number' name='iban-number' />
      </div>


      <div className="form-group">
      <label htmlFor="swift-code">Swift Code:</label>
      <input type="text" id='swift-code' name='swift-code' />
      </div>


      <div className="form-group">
      <label htmlFor="bank-name">Swift Code:</label>
      <input type="text" id='bank-name' name='bank-name' />
      </div>


      <div className="form-group">
      <label htmlFor="beneficiary-name">Bank Account Beneficiary Name:</label>
      <input type="text" id='beneficiary-name' name='beneficiary-name' />
      </div>


      
      <div className="form-group">
      <label htmlFor="currency">Currency of Account:</label>
      <input type="text" id='currency' name='currency' />
      </div>


      <div className="form-group">
      <label htmlFor="bank-email">Email address to send payment advise:</label>
      <input type="email" id='bank-email' name='bank-email' />
      </div>

      

      
      </form>


      <div className="drop-file">
    <p>To verify details of the bank account, request you to submit any one of the following documents:
    <ul>Attested letter from bank certifying the beneficiary bank details OR</ul>
    <ul>Cancelled cheque of the beneficiary account details OR</ul>
    <ul>Bank statement (clearly reflecting Bank a/c number and beneficiary/company name)</ul>
    </p>
     </div>


     <div id="drop_zone" ondrop="dropHandler(event);">
  <p>Drag one or more files to this <i>drop zone</i>.</p>
  <hr />
   </div>

      
        
    </div>
    
  )
}

export default BankAccount