import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';


export const cdapPlugin = createPlugin({
  id: 'uiux',
  routes: {
    root: rootRouteRef,
  },
});

export const CdapPage = cdapPlugin.provide(
  createRoutableExtension({
    name: 'CdapPage',
    component: () =>
      import('./components/UIUXComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);





