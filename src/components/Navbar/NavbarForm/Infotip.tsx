import { Tooltip } from 'reactstrap';

interface InfoTipProps {
  setTooltipOpen: (tooltipOpen: boolean) => void;
  target: string;
  tooltipOpen: boolean;
}

export default function InfoTip({
  setTooltipOpen,
  target,
  tooltipOpen
}: InfoTipProps) {
  const openTooltip = () => setTooltipOpen(!tooltipOpen);
  return (
    <Tooltip
      placement="bottom"
      isOpen={tooltipOpen}
      target={target}
      toggle={openTooltip}>
        
      <span>{target === 'startTime' ? ' begin ' : ' end '}</span>
      
    </Tooltip>
  );
}
