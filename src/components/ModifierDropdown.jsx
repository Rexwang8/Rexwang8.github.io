import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu

function DropdownModifier(props) {
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  },
);

return(
  <Dropdown onSelect={props.handleSelect}>
    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
      Modifier Groups
    </Dropdown.Toggle>

    <Dropdown.Menu as={CustomMenu} >
      <Dropdown.Item eventKey="colorsSimple" >Color - Simple</Dropdown.Item>
      <Dropdown.Item eventKey="colorsPalletes">Color - Palletes</Dropdown.Item>
      <Dropdown.Item eventKey="3">
        Flavor?
      </Dropdown.Item>
      <Dropdown.Item eventKey="4">Red-Orange</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

}

export default DropdownModifier;