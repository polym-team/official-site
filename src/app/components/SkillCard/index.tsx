import React, { FC } from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      padding: theme.spacing(1.5, 3),
      border: '1px solid #dddddd',
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[0],
      '&:hover': {
        boxShadow: theme.shadows[1],
      },
    },
    symbolConatiner: {
      height: 40,
    },
    symbol: {
      maxWidth: 40,
      maxHeight: 40,
    },
  }),
);

type PropTypes = {
  symbolUrl: string;
  title: string;
  caption?: string;
};

export const SKillCard: FC<PropTypes> = ({ symbolUrl, title, caption }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Grid container alignItems="center">
        <Grid container item xs={5} justify="center" className={classes.symbolConatiner}>
          <img className={classes.symbol} src={symbolUrl} alt={title} />
        </Grid>
        <Grid item xs={7} style={{ textAlign: 'left' }}>
          <Typography variant="subtitle2">
            {title}
            {caption && (
              <Typography component="div" variant="caption">
                {caption}
              </Typography>
            )}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};
