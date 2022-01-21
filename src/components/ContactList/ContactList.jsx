import React, { Component } from "react";
import PropTypes from "prop-types";
import ContactListStyled from "./ContactList.styled";

class ContactList extends Component {
  render() {
    return (
      <ContactListStyled>
        {this.props.contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button type="button" onClick={this.props.onClick}>
              Delete
            </button>
          </li>
        ))}
      </ContactListStyled>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  onClick: PropTypes.func,
};

export default ContactList;
