import { BarContainer, Bar } from "./styles";

const ProgressBar = ({ percent = 50 }) => {
  return (
    <BarContainer>
      <Bar value={percent}>{percent}%</Bar>
    </BarContainer>
  );
};
export default ProgressBar;
