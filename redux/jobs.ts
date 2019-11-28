import fetch from "isomorphic-unfetch";

const initialState = {
  data: []
};

export type JobsState = Readonly<typeof initialState>;

export const Types = {
  SET_JOBS: "SET_JOBS"
};

// REDUCERS
export default (state: JobsState = initialState, action): JobsState => {
  switch (action.type) {
    case Types.SET_JOBS:
      return { data: action.payload };
    default:
      return state;
  }
};

// ACTIONS
export const setJobs = payload => {
  return { type: Types.SET_JOBS, payload };
};

export const fetchJobs = () => async dispatch => {
  const response = await fetch(`http://localhost:3000/api/jobs`);
  const people = await response.json();
  await dispatch(setJobs(people));
};
