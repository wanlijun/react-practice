
import React, { useMemo } from 'react';
import styles from './index.module.less';

export interface IGridLayout {
  /**
   * @description　设置每一行放几个元素
   * @default 1　
   */
  number?: number;
  /**
   * @description　设置每个元素的间距，会给数字加上px
   * @default -　
   */
  gutter?: number;
  children: React.ReactNode;
};
const GridLayout: React.FC<IGridLayout> =  ({ number = 1, children, gutter }) => {
  const width = useMemo(() => 100 / number, [number]);
  const gutterStyle = gutter ? { marginLeft: -gutter + 'px', marginRight: -gutter + 'px' } : undefined;
  const colStyle = gutter ?
    Object.assign(
      { paddingLeft: gutter + 'px',  paddingRight: gutter + 'px'},
      {width: `${width}%`})
    : {width: `${width}%`};
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
};
// const Full = () => {

// }
export default GridLayout;