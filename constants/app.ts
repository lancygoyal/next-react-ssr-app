import WorkIcon from "@material-ui/icons/Work";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import GamesIcon from "@material-ui/icons/Games";

export const APP_NAME = "Next App";

export const JOB_TYPE = {
  FULL_TIME: "full_time",
  PART_TIME: "part_time",
  REMOTE: "remote"
};

export const JOB_TYPE_ICON = {
  [JOB_TYPE.FULL_TIME]: WorkIcon,
  [JOB_TYPE.PART_TIME]: LaptopMacIcon,
  [JOB_TYPE.REMOTE]: GamesIcon
};
