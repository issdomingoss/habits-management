import { HabitsProvider } from "./Habits";
import { GroupsProvider } from "./Groups";
import { GoalsProvider } from "./Goals";
import { ActivitiesProvider } from "./Activities";

const Providers = ({ children }) => {
  return (
    <GroupsProvider>
      <GoalsProvider>
        <ActivitiesProvider>
          <HabitsProvider>{children}</HabitsProvider>;
        </ActivitiesProvider>
      </GoalsProvider>
    </GroupsProvider>
  );
};

export default Providers;
