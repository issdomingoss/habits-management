import { useContext } from "react";
import { HabitsContext } from "../../providers/Habits";
import { HabitCard } from "../HabitCard";
import { Container } from "./styles";

export const ContainerHabits = () => {
  const { habits } = useContext(HabitsContext);

  return (
    <Container>
      <HabitCard create />
      <hr className="divider" />
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </Container>
  );
};
