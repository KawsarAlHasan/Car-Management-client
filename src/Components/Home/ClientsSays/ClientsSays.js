import React from 'react';
import person1 from '../../images/person 1.png';
import person2 from '../../images/person 2.png';
import person3 from '../../images/person 3.png';

const ClientsSays = (props) => {
    return (
        <div className="container">
          <h1 className="text-center my-4">Happy <span className='text-danger'>Clients says</span></h1>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="shadow p-3 mb-5 bg-white rounded">
                <p>Alex Allwood trusts in this mantra as a customer experience specialist and author of Customer Experience is the Brand.</p>
              <img src={person1} className='w-50' alt=""/>
              <h4>Regina Miles</h4>
              <h6>Banker</h6>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="shadow p-3 mb-5 bg-white rounded">
                <p>The basic of business is to stay as close as possible from your customers, understand their behavior, their preferences, their purchasing patterns, etc</p>
              <img src={person2} className='w-50' alt=""/>
              <h4>Jone Drake</h4>
              <h6>Doctor</h6>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="shadow p-3 mb-5 bg-white rounded">
                <p>In an interview, Julie Rice discussed how she wanted WeWork to have the same sentiment as SoulCycle about its members by having members.</p>
              <img src={person3} className='w-50' alt=""/>
              <h4>Cret Yater</h4>
              <h6>Footballer</h6>
              </div>
            </div>
          </div>
        </div>
    );
};

export default ClientsSays;