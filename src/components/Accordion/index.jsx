import React, { useEffect } from "react";
import { Wrap, AccordionSection, Container, Dropdown } from "./styled";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import { AiFillEdit } from "react-icons/ai";
import { useState, useContext } from "react";
import { GroupsContext } from "../../providers/Groups";
import Sub from "./sub";
import { EditForm } from "./updateGroupForm";

const Accordion = () => {
  const [clicked, setClicked] = useState(false);
  const [att, setAtt] = useState(0);
  const { myGroups } = useContext(GroupsContext);
  const [isModal, setIsModal] = useState(false);

  const openModal = (id) => {
    if (isModal === id) {
      return setIsModal(null);
    }
    setIsModal(id);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  useEffect(() => {
    setAtt(att + 1);
  }, [myGroups]);

  const toggle = (id) => {
    if (clicked === id) {
      return setClicked(null);
    }
    setClicked(id);
  };
  //onClick={() => updateGroup(item, { name: "ingles" })}
  return (
    <IconContext.Provider value={{ size: "25px" }}>
      <AccordionSection>
        <Container>
          {myGroups
            .filter((item) => item.category === "Track-Speak")
            .map((item, index) => {
              return (
                <div key={index}>
                  <Wrap>
                    <div className="description-container">
                      <div className="accord-bar-text">
                        Group Name: {item.name}
                      </div>
                      <div className="accord-bar-text">
                        Group Description: {item.description}
                      </div>
                    </div>
                    <div>
                      {isModal === item.id ? (
                        <EditForm
                          closeModal={() => closeModal(item.id)}
                          item={item}
                        />
                      ) : (
                        <AiFillEdit
                          title="Edit Group!"
                          className="AiFillEdit"
                          onClick={() => openModal(item.id)}
                        />
                      )}

                      <span>
                        {clicked === item.id ? (
                          <FiMinus
                            className="FiMinus"
                            onClick={() => toggle(item.id)}
                            key={item.id}
                          />
                        ) : (
                          <FiPlus
                            title="Goals and Activities!"
                            className="FiPlus"
                            onClick={() => toggle(item.id)}
                            key={item.id}
                          />
                        )}
                      </span>
                    </div>
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
