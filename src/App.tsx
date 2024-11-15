import React from "react";
import "bulma/css/bulma.css";
import "./App.css";
import totalDeliveryCostCalculator from "./modules/deliveryCostCalculator";
import { useState } from "react";

function App() {
  //I am using states to get the values from the input fields.
  //Then I am passing those values to the totalDeliveryCostCalculator
  //in order to have the desirable output

  const [orderValue, setCartValue] = useState("");

  const [deliveryDistance, setDistanceValue] = useState("");

  const [itemsInCart, setItemsValue] = useState("");

  const [timeOfDelivery, setDateAndTime] = useState("");

  const [output, setOutput] = useState("");

  //These states control if and when the output message or the warning
  //message will appear
  const [toggleOutputVisibility, setOutputVisibility] = useState("is-hidden");

  const [toggleWarningVisibility, setWarningVisibility] = useState("is-hidden");

  //Event handlers for the changes in the input fields
  const handleCartValueChange: any = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCartValue(event.target.value);
  };

  const handleDeliveryDistanceChange: any = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDistanceValue(event.target.value);
  };

  const handleNumberOfItemsChange: any = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setItemsValue(event.target.value);
  };

  const handleDateAndTimeChange: any = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDateAndTime(event.target.value);
  };

  //The event handler for calculating the delivery cost by clicking the submit button

  const handleClickEvent: any = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (
      orderValue === "" ||
      deliveryDistance === "" ||
      itemsInCart === "" ||
      timeOfDelivery === ""
    ) {
      setOutputVisibility("is-hidden");
      setWarningVisibility("is-block");
    } else {
      setWarningVisibility("is-hidden");
      setOutput(
        totalDeliveryCostCalculator(
          Number(orderValue),
          Number(deliveryDistance),
          Number(itemsInCart),
          timeOfDelivery
        )
      );
      setOutputVisibility("is-block");
    }
  };

  return (
    <div className="App">
      <div id="wrapper">
        <h1 className="label" id="head">
          {" "}
          Wolt delivery cost calculator
        </h1>
        <div id="cartValue" className="control">
          <label className="label">Cart Value</label>
          <div className="field has-addons">
            <p className="control">
              <span className="select">
                <select>
                  <option>€</option>
                </select>
              </span>
            </p>
            <p className="control">
              <input
                type="number"
                className="input"
                placeholder="Type the cart value"
                id="theCartValueField"
                onChange={handleCartValueChange}
              />
            </p>
          </div>
        </div>
        <div className="field">
          <label className="label">Delivery distance</label>
          <div className="control">
            <input
              type="number"
              className="input"
              placeholder="The distance is counted in meters"
              id="distanceField"
              onChange={handleDeliveryDistanceChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Amount of items</label>
          <div className="control">
            <input
              type="number"
              className="input"
              placeholder="How many items does your order have?"
              id="amountOfItemsField"
              onChange={handleNumberOfItemsChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Delivery date and time</label>
          <div className="control">
            <input
              type="datetime-local"
              className="input"
              id="dateTimeField"
              onChange={handleDateAndTimeChange}
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={handleClickEvent}>
              Submit
            </button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Clear</button>
          </div>
        </div>
      </div>

      <div id="output" className={toggleOutputVisibility}>
        <article className="message is-info">
          <div className="message-header">
            <p>Success!</p>
            <button className="delete" aria-label="delete"></button>
          </div>
          <div className="message-body">{output}</div>
        </article>
      </div>

      {/* WARNING MESSAGE IN CASE ONE OF THE FIELDS IS EMPTY */}
      <div id="warningMessage" className={toggleWarningVisibility}>
        <article className="message is-danger">
          <div className="message-header">
            <p>Attention!</p>
            <button className="delete" aria-label="delete"></button>
          </div>
          <div className="message-body">Every field must be filled!</div>
        </article>
      </div>
    </div>
  );
}

export default App;
