import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useTask } from "../../Context/Context";

const DropdownSelector = () => {
  const { pages, setPages } = useTask();
  return (
    <DropdownButton
      as={ButtonGroup}
      id={`dropdown-button-drop`}
      size="sm"
      variant="secondary"
      title={pages}
    >
      <Dropdown.Item eventKey="1" onClick={(e) => setPages(e.target.innerText)}>
        10
      </Dropdown.Item>
      <Dropdown.Item eventKey="2" onClick={(e) => setPages(e.target.innerText)}>
        20
      </Dropdown.Item>
      <Dropdown.Item eventKey="3" onClick={(e) => setPages(e.target.innerText)}>
        30
      </Dropdown.Item>
      <Dropdown.Item eventKey="4" onClick={(e) => setPages(e.target.innerText)}>
        50
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default DropdownSelector;
