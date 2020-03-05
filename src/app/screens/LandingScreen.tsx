import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logoUrl from '@assets/logos/white.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.secondary.contrastText,
    },
    motifSymbol: {
      position: 'absolute',
      top: -1724.6,
      left: 'calc(25% - 570px)',
      width: 1603,
      height: 2575,
      transform: 'matrix(1.8, -0.91, 0.91, 0.42, 0, 0)',
      background: '#00142C 0% 0% no-repeat padding-box',
      borderRadius: 40,
      zIndex: -1,
      pointerEvents: 'none',
    },
    header: {
      padding: 0,
    },
    title: {
      flexGrow: 1,
    },
    menu: {
      '& > li': {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        marginLeft: theme.spacing(1),
      },
      '& > li:not(:last-child)': {
        marginRight: theme.spacing(1),
      },
    },
    mainTypo: {
      marginTop: 246,
      fontWeight: 'bold',
      letterSpacing: -0.86,
    },
  }),
);

export const LandingScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.motifSymbol} />
      <AppBar>
        <Container fixed>
          <Toolbar className={classes.header}>
            <div className={classes.title}>
              <img src={logoUrl} width="200" alt="폴리모프" />
            </div>
            <ul className={classes.menu}>
              <Button component="li" color="inherit">
                폴리모프 소개
              </Button>
              <Button component="li" color="inherit">
                우리가 한 일
              </Button>
              <Button component="li" color="inherit">
                문의하기
              </Button>
            </ul>
          </Toolbar>
        </Container>
      </AppBar>
      <Container fixed>
        <Toolbar />
        <Typography variant="h2" color="inherit" className={classes.mainTypo}>
          웹으로 시작하는 새로운 비즈니스.
          <br />
          당신의 업무를 보다 더 아름답게.
        </Typography>
      </Container>
    </div>
  );
};
