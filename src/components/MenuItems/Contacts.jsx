import React from "react";
import "./MenuItemsStyles/ContactsStyles.css";

export const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts_container">
        <div className="ui form">
          <div className="contacts_head">
            <h2 className="ui header">Send me a message!</h2>
          </div>
          <div className="field small">
            <input
              type="text"
              name="first-name"
              placeholder="First Name"
            ></input>
          </div>
          <div className="field">
            <input
              type="email"
              placeholder="Whrite an email"
              className="field_theme"
            ></input>
          </div>
          <div className="field">
            <textarea
              placeholder="About you"
              className="field_theme"
            ></textarea>
          </div>
          <button className="ui bottom attached button">
            Contact Me
            <span style={{ paddingLeft: "10px" }}>
              <i className="paper plane outline icon"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
