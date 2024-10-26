import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider } from 'antd';
import CharacterPage from './views/Character';
import Layout from './Layout';
import Home from './views/Home';
import './App.css';

export default function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character" element={<CharacterPage />} />
          </Routes>
        </Layout>
      </Router>
    </ConfigProvider>
  );
}
