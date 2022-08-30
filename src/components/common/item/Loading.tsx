import { memo } from 'react';
import ReactLoading from 'react-loading';
import styled from '@emotion/styled';

const LoaderWrap = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const Loader = memo(() => {
  return (
    <LoaderWrap>
      <ReactLoading type='spin' color='#A593E0' />
    </LoaderWrap>
  );
});

export default Loader;
