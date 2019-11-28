import { combineReducers } from "redux";

import jobs, { JobsState } from "./jobs";

export interface IRootState {
  readonly jobState: JobsState;
}

const rootReducer = combineReducers<IRootState>({
  jobState: jobs
});

export default rootReducer;
