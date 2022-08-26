import Toggle from './components/common/Toggle';

function App() {
  return (
    <Toggle>
      <Toggle.On>불이 켜졌습니다.</Toggle.On>
      <Toggle.Off>불이 꺼졌습니다.</Toggle.Off>
      <Toggle.Trigger />
    </Toggle>
  );
}

export default App;
