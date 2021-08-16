import React from "react";

import { Wrap, AccordionSection, Container, Dropdown } from "./styled";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useState, useContext } from "react";
import { GroupsContext } from "../../providers/Groups";
import Sub from "./sub";

const Accordion = () => {
  const [clicked, setClicked] = useState(false);
  const { groups } = useContext(GroupsContext);

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
          {groups
            .filter((group) => group.category === "Language")
            .map((item, index) => {
              return (
                <div key={index}>
                  <Wrap onClick={() => toggle(item.id)} key={item.id}>
                    <div className="accord-bar-text">
                      Group Name: {item.name}
                    </div>
                    <span>
                      {clicked === item.id ? <FiMinus /> : <FiPlus />}
                    </span>
                  </Wrap>
                  {clicked === item.id ? (
                    <Dropdown>
                      <div className="accord-goal-text">
                        Goals: {item.goals.title}
                      </div>
                      <div className="accord-goal-text">Activities:</div>
                      <div className="accord-bar-subtext">
                        <Sub activities={item.activities} />
                      </div>
                    </Dropdown>
                  ) : null}
                </div>
              );
            })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
