import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sectionContainer: {
      height: 800,
      color: theme.palette.secondary.contrastText,
    },
    mainTypo: {
      marginTop: theme.spacing(24),
      fontWeight: 'bold',
      letterSpacing: -0.86,
      '& > p': {
        margin: theme.spacing(4, 0),
      },
    },
  }),
);

export const IntroView = () => {
  const classes = useStyles();
  return (
    <Container fixed className={classes.sectionContainer}>
      <Toolbar />
      <Typography variant="h3" color="inherit" className={classes.mainTypo}>
        웹으로 시작하는 새로운 비즈니스.
        <br />
        당신의 업무를 보다 더 아름답게.
        <Typography variant="caption" color="inherit" component="p">
          우리는 당신의 작업에 활력을 더합니다. 웹 기술을 통해 더 편하고 쾌적한 환경에서
          <br />
          당신의 목표로 더 쉽게 다가설 수 있습니다.
        </Typography>
      </Typography>
    </Container>
  );
};
