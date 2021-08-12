import React from "react";
import { Data } from "./Data";
import { Wrap, AccordionSection, Container, Dropdown } from "./styled";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useState } from "react";

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (id) => {
    if (clicked === id) {
      return setClicked(null);
    }
    setClicked(id);
  };

  return (
    <IconContext.Provider value={{ size: "25px" }}>
      <AccordionSection>
        <Container>
          {Data.map((item) => {
            return (
              <>
                <Wrap onClick={() => toggle(item.id)} key={item.id}>
                  <div className="accord-bar-text">{item.group}</div>
                  <span>{clicked === item.id ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === item.id ? (
                  <Dropdown>
                    <p>{item.goals}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
