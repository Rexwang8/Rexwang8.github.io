import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

import { GROUP_TITLES } from "../data/allkeys";
// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu

function DropdownModifier(props) {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=''
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}>
      {children}
      &#x25bc;
    </a>
  ));

  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
        <Form.Control autoFocus className='mx-3 my-2 w-auto' placeholder='Type to filter...' onChange={(e) => setValue(e.target.value)} value={value} />
        <ul className='list-unstyled'>{React.Children.toArray(children).filter((child) => !value || child.props.children.toLowerCase().startsWith(value))}</ul>
      </div>
    );
  });

  return (
    
    <Dropdown onSelect={props.handleSelect} className="modifierdropdown_toggle">
      <Dropdown.Toggle as={CustomToggle} id='dropdown-custom-components'>
        Modifier Groups
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu} className="modifierdropdown_wrapper">
      <Dropdown.Item eventKey='stylesRenderer'>{GROUP_TITLES['stylesRenderer']}</Dropdown.Item>
      <Dropdown.Item eventKey='stylesPhotosites'>{GROUP_TITLES['stylesPhotosites']}</Dropdown.Item>
        <Dropdown.Item eventKey='stylesTimeframes'>{GROUP_TITLES['stylesTimeframes']}</Dropdown.Item>
        <Dropdown.Item eventKey='stylesAbstractions'>{GROUP_TITLES['stylesAbstractions']}</Dropdown.Item>
        <Dropdown.Item eventKey='stylesComplexity'>{GROUP_TITLES['stylesComplexity']}</Dropdown.Item>
        <Dropdown.Item eventKey='stylesPunk'>{GROUP_TITLES['stylesPunk']}</Dropdown.Item>
        <Dropdown.Item eventKey='stylesWave'>{GROUP_TITLES['stylesWave']}</Dropdown.Item>
        <Dropdown.Item eventKey='colorsSimple'>{GROUP_TITLES['colorsSimple']}</Dropdown.Item>
        <Dropdown.Item eventKey='colorsPalletes'>{GROUP_TITLES['colorsPalletes']}</Dropdown.Item>
        <Dropdown.Item eventKey='shapesForms'>{GROUP_TITLES['shapesForms']}</Dropdown.Item>
        <Dropdown.Item eventKey='intangibleEmotions'>{GROUP_TITLES['intangibleEmotions']}</Dropdown.Item>
        <Dropdown.Item eventKey='intangibleConcepts'>{GROUP_TITLES['intangibleConcepts']}</Dropdown.Item>
        <Dropdown.Item eventKey='intangibleSymbols'>{GROUP_TITLES['intangibleSymbols']}</Dropdown.Item>
        <Dropdown.Item eventKey='intangibleZodiac'>{GROUP_TITLES['intangibleZodiac']}</Dropdown.Item>
        <Dropdown.Item eventKey='intangibleNumbers'>{GROUP_TITLES['intangibleNumbers']}</Dropdown.Item>
        <Dropdown.Item eventKey='intangibleNumbersystem'>{GROUP_TITLES['intangibleNumbersystem']}</Dropdown.Item>
        <Dropdown.Item eventKey='referenceGames'>{GROUP_TITLES['referenceGames']}</Dropdown.Item>
        <Dropdown.Item eventKey='referenceAnimeStudio'>{GROUP_TITLES['referenceAnimeStudio']}</Dropdown.Item>
      </Dropdown.Menu>
      
    </Dropdown>
  );
}

export default DropdownModifier;
