import React, { FC, ReactElement } from 'react';
import { Theme, makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import whiteLogoUrl from '@assets/logos/white.svg';
import blackLogoUrl from '@assets/logos/black.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      padding: 0,
    },
    title: {
      flexGrow: 1,
      position: 'relative',
      display: 'flex',
      '& > img:not(:first-child)': {
        position: 'absolute',
        left: 0,
      },
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
  }),
);

const useCommonTrigger = () => {
  const rs = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80,
  });

  return rs;
};

const ScrollAppBarHandler: FC<{ children: ReactElement }> = ({ children }) => {
  const theme = useTheme();
  const trigger = useCommonTrigger();

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      transition: theme.transitions.create(['background-color', 'color'], {
        duration: theme.transitions.duration.complex,
      }),
      backgroundColor: trigger ? theme.palette.background.paper : 'transparent',
      color: trigger ? theme.palette.text.primary : theme.palette.secondary.contrastText,
    },
  });
};

export const LayoutHeader = () => {
  const classes = useStyles();
  const trigger = useCommonTrigger();

  return (
    <ScrollAppBarHandler>
      <AppBar>
        <Container fixed>
          <Toolbar className={classes.header}>
            <div className={classes.title}>
              <Fade in={!trigger}>
                <img src={whiteLogoUrl} width="200" alt="폴리모프" />
              </Fade>
              <Fade in={trigger}>
                <img src={blackLogoUrl} width="200" alt="폴리모프" />
              </Fade>
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
    </ScrollAppBarHandler>
  );
};
