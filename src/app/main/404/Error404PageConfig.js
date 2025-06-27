import { lazy } from 'react';
import {authRoles} from "../../auth";

const Error404PageConfig = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: false,
        },
        toolbar: {
          display: false,
        },
        footer: {
          display: false,
        },
        leftSidePanel: {
          display: false,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  auth: authRoles.onlyGuest,
  routes: [
    {
      path: '/404',
      element: lazy(() => import('./Error404Page')),
    },
  ],
};

export default Error404PageConfig;
