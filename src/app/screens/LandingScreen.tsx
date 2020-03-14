import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { LayoutHeader, IntroView, TechSkillView, Footer, CustomerView } from '@components';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      overflow: 'hidden',
      position: 'relative',
    },
    motifSymbol: {
      position: 'absolute',
      top: -1754,
      left: 'calc(25% - 280px)',
      width: 1603,
      height: 2575,
      transform: 'matrix(1.8, -0.91, 0.91, 0.42, 0, 0)',
      background: `${theme.palette.secondary.main} 0% 0% no-repeat padding-box`,
      borderRadius: 40,
      zIndex: -1,
      pointerEvents: 'none',
    },
  }),
);

export const LandingScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LayoutHeader />
      <div className={classes.motifSymbol} />
      <IntroView />
      <TechSkillView />
      <CustomerView />
      <div></div>
      <Footer />
    </div>
  );
};
