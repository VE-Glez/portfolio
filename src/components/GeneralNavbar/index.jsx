import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Home from "@material-ui/icons/Home";
import Folder from "@material-ui/icons/FolderSpecial";
import { GiDiploma } from "react-icons/gi";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    // maxWidth: 1440,
  },
});

export default function GeneralNabvar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<Home />} label="HOMEPAGE" component={Link} to="/" />
        <Tab
          icon={<Folder />}
          label="PROJECTS"
          component={Link}
          to={"/projects"}
        />
        <Tab
          icon={<GiDiploma size={28} />}
          label="CERTIFICATIONS"
          component={Link}
          to="/certifications"
        />
      </Tabs>
    </Paper>
  );
}
