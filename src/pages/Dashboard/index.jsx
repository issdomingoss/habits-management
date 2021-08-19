import { useContext, useEffect, useState } from "react";
import { ContainerHabits } from "../../components/ContainerHabits";
import Header from "../../components/header";
import ProgressBar from "../../components/ProgressBar";
import { HabitsContext } from "../../providers/Habits";
import { Container } from "./styles";
import Accordion from "../../components/Accordion/index";
import { Redirect } from "react-router-dom";

export const Dashboard = ({ AuthN }) => {
  const { habits } = useContext(HabitsContext);
  const [progressHabits, setProgressHabits] = useState(0);

  useEffect(() => {
    const totalHabits = habits.length;

    const achivedHabits = [...habits].filter(
      (habit) => habit.achieved === true
    );

    const progress = (100 / totalHabits) * achivedHabits.length;

    if (!!progress) {
      setProgressHabits(progress.toFixed());
    } else {
      setProgressHabits(0);
    }
  }, [habits]);

  //if AuthN false redirect to pageLogin
  if (!AuthN) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Header />
      <Container>
        <section id="progress">
          <p>My progress</p>
          <div className="progress-container">
            <ProgressBar percent={progressHabits} />
          </div>
        </section>
        <div className="flex">
          <section id="habits">
            <h2>Habits</h2>
            <ContainerHabits />
          </section>
          <section id="groups">
            <h2>My Groups</h2>
            <Accordion />
          </section>
        </div>
      </Container>
    </>
  );
};
