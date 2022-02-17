import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { IRouteItem } from 'src/route';
import PageLoading from 'src/components/PageLoading';

interface IRenderRouter  {
  routes: IRouteItem[]
}
type IRouteComp = React.ReactElement | null;
const RenderRouter:　React.FC<IRenderRouter> = ({ routes }) => {
    const workLoop = (data: IRouteItem[]) => {
      const output: IRouteComp[] = [];
      if (!data || data.length === 0) {
        return null;
      }
      data.forEach((item, index) => {
        const { element: Com, children, ...routeProps } = item;
        output.push(<Route
          key={`${item.path || 'route'}_${index}`}
          {...routeProps}
          element={<Suspense fallback={<PageLoading />}><Com /></Suspense>}
        >
          {children && workLoop(children)}
        </Route>);
      });
      return output;
    };
    return (<Routes>{workLoop(routes)}</Routes>);
}
export default RenderRouter;