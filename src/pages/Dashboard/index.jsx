import { useContext, useEffect, useState } from "react";
import { ContainerHabits } from "../../components/ContainerHabits";
import Header from "../../components/header";
import ProgressBar from "../../components/ProgressBar";
import { HabitsContext } from "../../providers/Habits";
import { Container } from "./styles";

export const Dashboard = () => {
  const { habits } = useContext(HabitsContext);
  const [progressHabits, setProgressHabits] = useState(0);

  useEffect(() => {
    const totalHabits = habits.length;
    const achivedHabits = [...habits].filter(
      (habit) => habit.achieved === true
    );
    const progress = (100 / totalHabits) * achivedHabits.length;

    setProgressHabits(progress.toFixed());
  }, [habits]);

  return (
    <>
      <Header />
      <Container>
        <div className="progress-container">
          <ProgressBar percent={progressHabits} />
        </div>
        <div className="flex">
          <section id="habits">
            <h2>Habits</h2>
            <ContainerHabits />
          </section>
          <section id="groups">
            <h2>My Groups</h2>
          </section>
        </div>
      </Container>
    </>
  );
};
