import React from 'react';
import $ from 'jquery';
import './payment.scss';

class Payment extends React.Component {
  changeAmount(value){
    $('#amount').val(value);
  }
  render() {
    return (
      <div className={"payment"}>
        <div className="row align-items-center justify-content-center ">
          <div className="col-md-6 col-sm-6 col-12 border p-4 rounded">
            <h3>Add Credits</h3>
            <h6 className="mt-3">Balance: </h6>
            <hr/>
            <div className="form-group mt-4 mb-4">
              <input type="number" className="form-control" id="amount" aria-describedby="" placeholder="Enter Amount" />
            </div>

            <h6>Choose an amount:</h6>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-light" onClick={() => this.changeAmount(500)}>500</button>
              <button type="button" className="btn btn-light" onClick={() => this.changeAmount(1000)}>1000</button>
              <button type="button" className="btn btn-light" onClick={() => this.changeAmount(2000)}>2000</button>
              <button type="button" className="btn btn-light" onClick={() => this.changeAmount(3000)}>3000</button>
            </div>
            <button type="button" className="btn btn-block mt-4 btn-primary">Pay</button>
            <hr />
            <small>Money cannot be transferred to bank account or any other Amazon account, as per updated RBI guidelines.</small>
            <small>Money cannot be transferred to bank account or any other Amazon account, as per updated RBI guidelines.</small>
            <small>Money cannot be transferred to bank account or any other Amazon account, as per updated RBI guidelines.</small>
          </div>
        </div>
      </div>
      )
  }
}

export default Payment;
