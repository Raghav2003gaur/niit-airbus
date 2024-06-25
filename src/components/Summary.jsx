import React from 'react'
import BasicInformation from './BasicInformation/BasicInformation'
import BankAccount from './BankAccount/BankAccount'
import ContactDetails from './ContactDetails/ContactDetails'
import BillingInformation from './BillingInformation/BillingInformation'
import Payment from './Payments/Payment'
import ServiceOffered from './SeviceOffered/ServiceOffered'

function Summary() {
  return (
    <div>
         <BasicInformation/>
         <BankAccount/>
         <ContactDetails/>
         <ServiceOffered/>
         <BillingInformation/>
         <Payment/>
    </div>
  )
}

export default Summary