import { useContext, useEffect } from "react";
import { HabitsContext } from "../../providers/Habits";
import { HabitCard } from "../HabitCard";
import { Container } from "./styles";

export const ContainerHabits = () => {
  const { habits, loadHabits } = useContext(HabitsContext);

  useEffect(() => {
    loadHabits();
  }, [loadHabits]);

  return (
    <Container>
      <HabitCard create />
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </Container>
  );
};
