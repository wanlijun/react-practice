import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import AppMenu from './components/Menu';
import routes from 'src/route';
import RenderRouter from './RenderRouter';
import HeaderBody from './components/Header';
import interceptors from '../../utils/interceptors';
import '../../apis';
import './App.css'
interceptors();

function App() {
  const { Header, Content, Sider } = Layout;
  const fullPageRoute: readonly string[] = ['/login'];
  const pathname = window.location.pathname;
  const fullPage = fullPageRoute.includes(pathname);
  if (fullPage) {
    return (
      <Router basename={'/'}>
        <RenderRouter routes={routes} />
      </Router>
    )
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
       <Header className="header">
          <HeaderBody />
       </Header>
       <Layout>
        <Sider>
          <AppMenu></AppMenu>
        </Sider>
        <Content className="content">
          <Router basename={'/'}>
            <RenderRouter routes={routes} />
          </Router>
        </Content>
       </Layout>
    </Layout>
  )
}

export default App
