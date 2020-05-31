import React from "react"; //imr

function ContactCard(props) {
  return (
    <div>
      <h1>
        {props.employee.first_name}  {props.employee.last_name}
      </h1>
      <h2> My role is {props.employee.role} </h2>
    </div>
  );
}

export default ContactCard;
