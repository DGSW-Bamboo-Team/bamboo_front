import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, NotFoundPage, SettingPage } from './pages';
import Layout from './components/common/Layout';
import NormalizeStyle from './styles/Normalize';

function App() {
  return (
    <>
      <NormalizeStyle />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path='/setting' element={<SettingPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
