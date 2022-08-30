import List from '~/components/list/index';
import Toggle from '~/components/common/Toggle';

const MainPage = () => {
  return (
    <>
      <Toggle>
        <Toggle.On>On</Toggle.On>
        <Toggle.Off>Off</Toggle.Off>
        <Toggle.Trigger />
      </Toggle>
      <List />
    </>
  );
};

export default MainPage;
