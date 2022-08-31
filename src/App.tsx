import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, NotFoundPage, SettingPage } from './pages';
import Layout from './components/common/Layout';
import ResetStyle from './styles/reset';

function App() {
  return (
    <>
      <ResetStyle />
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
