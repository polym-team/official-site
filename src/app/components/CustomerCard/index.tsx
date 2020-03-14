import React, { FC } from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      padding: theme.spacing(2.8, 3),
      border: '1px solid #dddddd',
      borderRadius: theme.shape.borderRadius * 0.4,
      boxShadow: theme.shadows[0],
      position: 'relative',
    },
    logo: {
      maxWidth: 190,
      maxHeight: 55,
      width: '100%',
    },
    borderContainer: {
      height: 55,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dimm: {
      opacity: 0,
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.65)',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      transition: theme.transitions.create(['opacity'], {
        duration: theme.transitions.duration.standard,
      }),
      '&:hover': {
        opacity: 1,
      },
      '& > svg': {
        marginRight: theme.spacing(1),
      },
    },
  }),
);

type PropTypes = {
  logoUrl: string;
  caption?: string;
};

export const CustomerCard: FC<PropTypes> = ({ logoUrl, caption }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.borderContainer}>
        <img className={classes.logo} src={logoUrl} alt={caption} />
        <Typography className={classes.dimm} variant="subtitle2">
          <CloudDownloadIcon />
          {caption}
        </Typography>
      </div>
    </Card>
  );
};
