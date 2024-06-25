import React, { useState } from 'react'
import BasicInformation from './components/BasicInformation/BasicInformation'
import BankAccount from './components/BankAccount/BankAccount';
import ContactDetails from './components/ContactDetails/ContactDetails';
import ServiceOffered from './components/SeviceOffered/ServiceOffered';
import Summary from './components/Summary';
import Payment from './components/Payments/Payment';
import BillingInformation from './components/BillingInformation/BillingInformation';



function App() {

    const [selectedForm,setSelectedForm] = useState(1);

    const handleChangeId = (id) =>{
        setSelectedForm(id);
    }
    
  return (
    <div className="container">
        <div className="steppar">
            <button onClick={()=>{handleChangeId(1)}} className={selectedForm === 1 ? 'active' : ''}>Basic Company Information</button>
            <button onClick={()=>{handleChangeId(2)}} className={selectedForm === 2 ? 'active' : ''}>Bank Account Details</button>
            <button onClick={()=>{handleChangeId(3)}} className={selectedForm === 3 ? 'active' : ''}>Contact Details</button>
            <button onClick={()=>{handleChangeId(4)}} className={selectedForm === 4 ? 'active' : ''}>Service Offered</button>
            <button onClick={()=>{handleChangeId(5)}} className={selectedForm === 5 ? 'active' : ''}>Billing Information</button>
            <button onClick={()=>{handleChangeId(6)}} className={selectedForm === 6 ? 'active' : ''}>NIIT payment to suppliers</button>
            <button onClick={()=>{handleChangeId(7)}} className={selectedForm === 7 ? 'active' : ''}>Summary</button>
        </div>
       

        <div className="components">
            {selectedForm === 1 && <BasicInformation/>}
            {selectedForm === 2 && <BankAccount/>}
            {selectedForm === 3 && <ContactDetails/>}
            {selectedForm === 4 && <ServiceOffered/>}
            {selectedForm === 5 && <BillingInformation/>}
            {selectedForm === 6 && <Payment/>}
            {selectedForm === 7 && <Summary/>}
        </div>

    </div>
  )
}

export default App