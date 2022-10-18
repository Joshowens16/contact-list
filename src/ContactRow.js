import React from "react";
//import ContactList from "./ContactList";
const ContactRow = (props) => {
  return (
    <tr onClick={() => props.selectContact(props.contact.id)}>
      <td>{props.contact.name}</td>
      <td>{props.contact.phone}</td>
      <td>{props.contact.email}</td>
    </tr>
  );
};

export default ContactRow;
