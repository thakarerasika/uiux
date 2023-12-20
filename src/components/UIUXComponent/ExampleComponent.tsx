import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';
import { ExampleFetchComponent } from '../ExampleFetchComponent';
import MaterialButton from '@material-ui/core/Button';
import fetchData from './helper.ts';
export const ExampleComponent = () => (
  <Page themeId="tool">
    <Header title="Welcome to UIUX!" subtitle="Welcome to UIUX!">
      <HeaderLabel label="Owner" value="Team X" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <ContentHeader title="UI UX Plugin">
        <SupportButton>Autonomus UI UX Validator</SupportButton>
         <MaterialButton
            onClick={fetchData}
            color="default"
            variant="outlined"
          >
            START
          </MaterialButton>
      </ContentHeader>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard title="Information card">
            <Typography variant="body1">
              All content should be wrapped in a card like this.
            </Typography>
          </InfoCard>
        </Grid>
        <Grid item>
          <ExampleFetchComponent />
        </Grid>
      </Grid>
    </Content>
  </Page>
);
