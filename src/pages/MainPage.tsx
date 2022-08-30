import Item from '~/components/common/item/index';
import Toggle from '~/components/common/Toggle';

const MainPage = () => {
  return (
    <>
      <Toggle>
        <Toggle.On>On</Toggle.On>
        <Toggle.Off>Off</Toggle.Off>
        <Toggle.Trigger />
      </Toggle>
      <Item />
    </>
  );
};

export default MainPage;
