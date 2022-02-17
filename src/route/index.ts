import React, { lazy } from 'react';

type ILazy = typeof lazy;
export interface IRouteItem {
  path: string,
  element: React.ComponentType,
  children?: IRouteItem[]
}
const routes: IRouteItem[] = [
  {
    path: '/',
    element: lazy(() => import('src/containers/User/List'))
  },
  {
    path: '/login',
    element: lazy(() => import('src/containers/Login'))
  }
]
export default routes;