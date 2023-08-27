import { observer } from "mobx-react-lite";
import { StyledBar } from "./StatusBar.styles";
import StatusPanel from "./StatusPanel/StatusPanel";

import statusStore from "../../stores/status-store";

const StatusBar = observer(() => {
  const { next, current } = statusStore;

  if (
    !current?.percentage ||
    !next?.percentage ||
    !next.condition?.percentage
  ) {
    return <div>...loading</div>;
  }

  return (
    <StyledBar>
      <StatusPanel
        color={current?.labelColor}
        bgcolor={current?.labelBackgroundColor}
        percentage={current?.percentage}
      >
        {`Текущая скидка ${current?.percentage}%`}
      </StatusPanel>
      <StatusPanel
        percentage={next?.condition?.percentage}
        point={next?.condition?.point}
      />
      <StatusPanel
        color={next?.labelColor}
        bgcolor={next?.labelBackgroundColor}
        percentage={next?.percentage}
      >
        {next?.name}
        {`(скидка ${next?.percentage}%)`}
      </StatusPanel>
    </StyledBar>
  );
});

export default StatusBar;
