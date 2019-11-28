import { jobs } from "../../../data";

export default ({ query: { id } }, res) => {
  const filtered = jobs.find(p => String(p.id) === id);
  // User with id exists
  if (filtered) {
    res.status(200).json(filtered);
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` });
  }
};
