import React from 'react';
import './App.css';
import {MainThing} from "./components/main/MainThing";
import {Footer} from "./components/footer/Footer";
import {Faq} from "./components/faq/Faq";
import {ContactForm} from "./components/contactForm/ContactForm";
import {Payments} from "./components/payments/Payments";
import {WeWork} from "./components/weWork/WeWork";
import {NetWorks} from "./components/networks/NetWorks";
import {PaymentMethods} from "./components/paymentMethods/PaymentMethods";
import {Condition} from "./components/condition/Condition";
import {Modal} from "./components/modal/Modal";


function App() {
    return (
        <div className="App">
            {/*<Modal/>*/}
            <MainThing/>
            <WeWork/>
            <Condition/>
            <Payments/>
            <NetWorks/>
            <PaymentMethods/>
            <Faq/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}

export default App;
