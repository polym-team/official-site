import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import { CustomerCard } from '@components';

import twinkring from '@assets/customers/twinkring.jpg';
import asics from '@assets/customers/asics.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sectionContainer: {
      marginTop: theme.spacing(15),
      marginBottom: theme.spacing(15),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      textAlign: 'center',
    },
    tile: {
      padding: theme.spacing(1.5, 3),
      border: '1px solid #dddddd',
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[0],
    },
    title: {
      textAlign: 'left',
      fontWeight: theme.typography.fontWeightLight,
      wordBreak: 'keep-all',
      '& > p': {
        marginTop: theme.spacing(3),
        fontSize: '0.35em',
      },
    },
  }),
);

export const CustomerView = () => {
  const classes = useStyles();
  return (
    <Container className={classes.sectionContainer} maxWidth="xl">
      <Grid container>
        <Grid item xs={7}>
          <GridList cellHeight={100} cols={4} spacing={20}>
            <GridListTile>
              <CustomerCard logoUrl={twinkring} caption="자료를 준비중입니다." />
            </GridListTile>
            <GridListTile>
              <CustomerCard logoUrl={asics} caption="자료를 준비중입니다." />
            </GridListTile>
          </GridList>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h3" className={classes.title}>
            우리가 한 일<br />
            그리고 앞으로 해야 할 일.
            <Typography component="p" variant="caption">
              폴리모프의 멋진 앱을 사용해 남들과는 다른 경험을 드리는 것이 우리의 목표입니다.
              <br />
              프로젝트 진행동안 작업된 모든 내용들을 함께 나누고 공유하며, 작업이 진행되는 과정에서도 멋진 경험을 드리기
              위해 노력합니다.
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
