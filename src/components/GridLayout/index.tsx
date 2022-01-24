
import React, { useMemo } from 'react';
import styles from './index.module.less';

export interface IGridLayout {
  number?: number;
  gutter?: String;
  children: React.ReactNode;
}
const GridLayout: React.FC<IGridLayout> =  ({ number = 1, children, gutter }) => {
  const width = useMemo(() => 100 / number, [number]);
  const gutterStyle = gutter ? { marginLeft: gutter + 'px', marginRight: gutter + 'px' } : undefined;
  const colStyle = gutter ? Object.assign(gutterStyle, {width: `${width}%`}) : {width: `${width}%`};
  return (
    <div className={styles.layout} style={gutterStyle}>
      {React.Children.map(children, (child) => {
        return (
          <div
            className={styles.col}
            style={colStyle}>
            {child}
          </div>
        )
      })}
    </div>
  )
}
export default GridLayout