import React from "react";
import Favorite from "./Favorite";

const SingleContact = (props) => {
  return (
    <div id="single-contact">
      <div id="contact-info">
        <p>
          <b>Name:{props.selectedContact.name}</b>
        </p>
        <p>
          <b>Email:{props.selectedContact.email}</b>
        </p>
        <p>
          <b>Phone:{props.selectedContact.phone}</b>
        </p>
        <div>
          <b>Address:</b>
          <p>
            <b>Street:{props.selectedContact.address.street}</b>
            <br />
            <b>
              City/State:{props.selectedContact.address.city}
              {props.selectedContact.address.zipcode}
            </b>
          </p>
        </div>
        <p>
          <b>Company: {props.selectedContact.company.name}</b>
        </p>
      </div>

      <Favorite
        contact={props.selectedContact}
        selectContact={props.selectContact}
      />
    </div>
  );
};

export default SingleContact;
