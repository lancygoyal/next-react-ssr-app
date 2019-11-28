import React from "react";
import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import intersection from "lodash/intersection";
import JobCard from "../../components/jobcard";

interface JobProps extends StateProps {
  job: any;
}

export class Job extends React.Component<JobProps> {
  static async getInitialProps({ req, query }) {
    const response = await fetch(
      `http://${req.headers.host}/api/jobs/${query.id}`
    );
    const job = await response.json();
    return { job };
  }

  render() {
    const { job, jobs } = this.props;
    const relatedJobs = jobs
      ? jobs.filter(
          data =>
            job.id !== data.id &&
            intersection(data.technologies, job.technologies).length > 0
        )
      : [];

    return (
      <div>
        <Head>
          <title>Next App : {job.title}</title>
        </Head>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
        >
          <JobCard data={job} applyNow />
        </Grid>
        {relatedJobs.length > 0 && (
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Typography
              variant="h6"
              noWrap
              style={{
                fontSize: "17px",
                marginTop: "17px",
                marginLeft: "21px"
              }}
            >
              Related Jobs
            </Typography>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              {relatedJobs.map((job, idx) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <JobCard key={idx} data={job} applyNow={false} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ jobState }) => ({
  jobs: jobState.data
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Job);
