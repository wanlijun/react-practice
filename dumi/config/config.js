import path from 'path';
console.log(path.resolve(__dirname, '../../', 'src/components'), '====>')
export default {
  title: '公共组件',
  resolve: {
    includes: [path.resolve(__dirname, '../../', 'src/components')]
  },
  define: {
    'process.env.TARO_ENV': '',
  },
  alias: {
    src: path.resolve(__dirname, '../../', 'src'),
  },
  styles: [`/antd/dist/antd.css`],
}