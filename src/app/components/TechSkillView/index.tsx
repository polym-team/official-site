import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { SKillCard } from '../SkillCard';

import reactLogoUrl from '@assets/skills/react.svg';
import tsLogoUrl from '@assets/skills/typescript.svg';
import angularLogoUrl from '@assets/skills/angular.svg';
import awsLogoUrl from '@assets/skills/aws.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sectionContainer: {
      marginTop: theme.spacing(15),
      marginBottom: theme.spacing(15),
      textAlign: 'center',
    },
    title: {
      marginTop: theme.spacing(15),
      marginBottom: theme.spacing(18),
      fontWeight: 'bold',
      letterSpacing: -0.86,
    },
    tile: {
      padding: theme.spacing(1.5, 3),
      border: '1px solid #dddddd',
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[0],
    },
  }),
);

export const TechSkillView = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.sectionContainer}>
      <Typography variant="h3" color="inherit" className={classes.title}>
        우리는 웹 기술로 멋진 것들을 만듭니다.
      </Typography>

      <GridList cellHeight={66} cols={5} spacing={20}>
        <GridListTile>
          <SKillCard symbolUrl={tsLogoUrl} title="TypeScript" />
        </GridListTile>
        <GridListTile>
          <SKillCard symbolUrl={reactLogoUrl} title="React" />
        </GridListTile>
        <GridListTile>
          <SKillCard symbolUrl={angularLogoUrl} title="Angular" caption="8+" />
        </GridListTile>
        <GridListTile>
          <SKillCard symbolUrl={awsLogoUrl} title="AWS" />
        </GridListTile>
      </GridList>
    </Container>
  );
};
