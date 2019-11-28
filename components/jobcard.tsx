import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Link from "next/link";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import GamesIcon from "@material-ui/icons/Games";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { JOB_TYPE_ICON } from "../constants/app";

const useStyles = makeStyles({
  card: {
    margin: 20
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    display: "flex",
    alignItems: "center",
    fontSize: 16
  },
  pos: {
    marginBottom: 12
  },
  chip: {
    marginRight: 5
  }
});

interface JobCardProps {
  data: any;
  applyNow: boolean;
}

const JobCard: FunctionComponent<JobCardProps> = ({ data, applyNow }) => {
  const classes = useStyles({});
  const Type = JOB_TYPE_ICON[data.employment_type]
    ? JOB_TYPE_ICON[data.employment_type]
    : GamesIcon;
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label={data.employment_type}>
            <Type />
          </Avatar>
        }
        title={data.title}
      />
      <CardContent style={{ padding: 9 }}>
        {data.technologies.map((tech, idx) => (
          <Chip key={idx} size="small" label={tech} className={classes.chip} />
        ))}
        <Typography variant="body2" component="p" style={{ marginTop: 10 }}>
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        {!applyNow ? (
          <Link href="/jobs/id" as={`/jobs/${data.id}`}>
            <Button size="small" variant="outlined">
              Apply Now
            </Button>
          </Link>
        ) : (
          <a
            href={`mailto:someone@example.com?Subject=Apply for ${data.title}`}
            target="_top"
          >
            <IconButton aria-label="mail now">
              <AlternateEmailIcon />
            </IconButton>
          </a>
        )}
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default JobCard;
