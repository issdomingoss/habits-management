import { HabitsProvider } from "./Habits";
import { GroupsProvider } from "./Groups";
import { GoalsProvider } from "./Goals";
import { ActivitiesProvider } from "./Activities";
import { AuthTokenProvider } from "./Auth";

const Providers = ({ children }) => {
  return (
    <AuthTokenProvider>
      <GroupsProvider>
        <GoalsProvider>
          <ActivitiesProvider>
            <HabitsProvider>{children}</HabitsProvider>
          </ActivitiesProvider>
        </GoalsProvider>
      </GroupsProvider>
    </AuthTokenProvider>
  );
};

export default Providers;
