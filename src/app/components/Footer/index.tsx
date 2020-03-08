import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      padding: theme.spacing(7, 20),
      backgroundColor: '#393939',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#E8E8E8',
    },
  }),
);

export const Footer = () => {
  const classes = useStyles();
  return <div className={classes.footer}>Copyright 2019 polymorph Inc. All right reserved.</div>;
};
