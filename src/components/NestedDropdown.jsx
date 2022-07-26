import React from "react";
import { Dropdown } from "react-bootstrap";
function NestedDropdown() {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <Container
        fluid
        className="px-0 d-flex justify-content-between"
        ref={ref}
        onClick={(e) => {
        e.preventDefault();
        onClick(e);
        }}
        >
        <span>{children}</span>
        <span>&#9656;</span>
        </Container>
        )); 
        
        return (
        <Dropdown.Item>
        <Dropdown variant="primary" drop="end" autoClose="outside">
        <Dropdown.Toggle as={CustomToggle}>{this.props.title} </Dropdown.Toggle> <Dropdown.Menu>
        {this.props.children}
        </Dropdown.Menu>
        </Dropdown>
        </Dropdown.Item>
        );

 
}

export default NestedDropdown;