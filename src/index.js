import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ContactList from "./ContactList";
import SingleContact from "./SingleContact";

// const dummyContacts = [
//   { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
//   { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
//   { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
// ];

function Main() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState({});
  const getContacts = async () => {
    const response = await fetch(
      "http://jsonplace-univclone.herokuapp.com/users"
    );
    const json = await response.json();
    setContacts(json);
  };

  const selectContact = async (contactId, favoriteData) => {
    const response = await fetch(
      `http://jsonplace-univclone.herokuapp.com/users/${contactId}`
    );
    const json = await response.json();
    setSelectedContact({ ...json, ...favoriteData });
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>

      <div id="container">
        {selectedContact.id ? (
          <SingleContact
            selectedContact={selectedContact}
            selectContact={selectContact}
          />
        ) : (
          <ContactList contacts={contacts} selectContact={selectContact} />
        )}
      </div>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("app"));
