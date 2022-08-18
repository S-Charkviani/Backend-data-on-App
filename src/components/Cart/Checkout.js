import React from "react";
import classes from "./Checkout.module.css"

const Checkout = props =>{
return(
    <form>
        <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name"></input>
        </div>
        <div>
            <label htmlFor="street">Street</label>
            <input type="text" id="street" />
        </div>
        <div>
            <label htmlFor="postal">Postal Code</label>
            <input type="text" id="postal"></input>
        </div>
        <div>
            <label htmlFor="city">City</label>
            <input type="text" id="city"></input>
        </div>
        <button>Confirm</button>
    </form>
)
};

export default Checkout;