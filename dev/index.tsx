import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { cdapPlugin, CdapPage } from '../src/plugin';

createDevApp()
  .registerPlugin(cdapPlugin)
  .addPage({
    element: <CdapPage />,
    title: 'Root Page',
    path: '/cdap'
  })
  .render();
