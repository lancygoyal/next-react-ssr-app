import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import JobCard from "../components/jobcard";
import { connect } from "react-redux";
import { setJobs } from "../redux/jobs";
interface IndexProps extends StateProps, DispatchProps {
  jobs: any;
}

class Index extends React.Component<IndexProps> {
  static async getInitialProps({ req }) {
    const response = await fetch(`http://${req.headers.host}/api/jobs`);
    const jobs = await response.json();
    return { jobs };
  }

  componentDidMount() {
    const { jobs, setJobs } = this.props;
    setJobs(jobs);
  }

  render() {
    const { jobs } = this.props;
    return (
      <div>
        <Typography
          variant="h6"
          noWrap
          style={{ fontSize: "17px", marginTop: "17px", marginLeft: "21px" }}
        >
          Now Openings - {jobs.length}
        </Typography>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          {jobs.map((job, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <JobCard key={idx} data={job} applyNow={false} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setJobs
};

type StateProps = {};
type DispatchProps = typeof mapDispatchToProps;

export default connect(null, mapDispatchToProps)(Index);
