//src
import React, { useState } from "react";
import ContactRow from "./ContactRow";
const ContactList = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
          {props.contacts.map((contact) => {
            return (
              <ContactRow
                contact={contact}
                key={contact.id}
                selectContact={props.selectContact}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
