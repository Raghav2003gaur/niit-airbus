import React from 'react';
import'./ContactDetails';

function ContactDetails() {
  return (
    <div className='contact-details'>
        <h2>Contact Details</h2>


        <h3>Please provide contact details of your key personnel. </h3>

        <div className="primary">
        <h3>Primary Contact Details:</h3> 

        <form action="/">

        
        

        <div class="form-group">
        <label htmlFor="name">Name of the person:</label>
        <input type="text" id="name" name='name' />
        </div>


        <div class="form-group">
        <label htmlFor="emailId">Email Address:</label>
        <input type="email" id="emailId" name='emailId' />
        </div>

        <div class="form-group">
        <label htmlFor="m-number"  >Mobile Number:</label>
        <input type="number" id="m-number" name='m-number' />
        </div>
        <div class="form-group">
        <label htmlFor="t-number"  >Telephone Number:</label>
        <input type="number" id="t-number" name='t-number' />
        </div>
        
        
        </form>
        </div>

        <div className="finance-transactions">

          <h3>Contact details for finance transactions:</h3>
          <h6>(If different from primary contact details)</h6>
          <form action="/">
          <div class="form-group">
        <label htmlFor="f-name">Name of the person:</label>
        <input type="text" id="f-name" name='f-name' />
        </div>

        <div class="form-group">
        <label htmlFor="f-emailId">Email Address:</label>
        <input type="email" id="f-email" name='f-email' />
        </div>

        <div class="form-group">
        <label htmlFor="f-number"  >Mobile Number:</label>
        <input type="number" id="f-number" name='f-number' />
        </div>


        <div class="form-group">
        <label htmlFor="ft-number"  >Telephone Number:</label>
        <input type="number" id="ft-number" name='ft-number' />
        </div>
          
          </form>

        </div>

        <div className="secondary-details-1">

          <h3>Secondary Contact Details 1:</h3>

          <form action="/">
          <div class="form-group">
        <label htmlFor="s1-name">Name of the person:</label>
        <input type="text" id="s1-name" name='s1-name' />
        </div>

        <div class="form-group">
        <label htmlFor="s1-emailId">Email Address:</label>
        <input type="email" id="s1-email" name='s1-email' />
        </div>

        <div class="form-group">
        <label htmlFor="s1-number"  >Mobile Number:</label>
        <input type="number" id="s1-number" name='s1-number' />
        </div>


        <div class="form-group">
        <label htmlFor="s1-number"  >Telephone Number:</label>
        <input type="number" id="s1-number" name='s1-number' />
        </div>
          
          </form>


          

        </div>

        <div className="secondary-details-2">

<h3>Secondary Contact Details 2:</h3>

<form action="/">
<div class="form-group">
<label htmlFor="s2-name">Name of the person:</label>
<input type="text" id="s2-name" name='s2-name' />
</div>

<div class="form-group">
<label htmlFor="s2-emailId">Email Address:</label>
<input type="email" id="s2-email" name='s2-email' />
</div>

<div class="form-group">
<label htmlFor="s2-number"  >Mobile Number:</label>
<input type="number" id="s2-number" name='s2-number' />
</div>


<div class="form-group">
<label htmlFor="s2-number"  >Telephone Number:</label>
<input type="number" id="s2-number" name='s2-number' />
<hr />
</div>

</form>




</div>

    </div>
  )
}

export default ContactDetails