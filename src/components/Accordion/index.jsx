import React from "react";
import { Data } from "./Data";
import { Wrap, AccordionSection, Container, Dropdown } from "./styled";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useState, useContext } from "react";
import { GroupsContext } from "../../providers/Groups";
import Sub from "./sub";

const Accordion = () => {
  const [clicked, setClicked] = useState(false);
  const { allGroups } = useContext(GroupsContext);

  const toggle = (id) => {
    if (clicked === id) {
      return setClicked(null);
    }
    setClicked(id);
  };
  console.log(allGroups);
  return (
    <IconContext.Provider value={{ size: "25px" }}>
      <AccordionSection>
        <Container>
          {allGroups
            .filter((item) => item.creator.id === 1)
            .map((item) => {
              return (
                <>
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
                      <div className="accord-goal-text">Activities:</div>
                      <div className="accord-bar-subtext">
                        <Sub activities={item.activities} />
                      </div>
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
