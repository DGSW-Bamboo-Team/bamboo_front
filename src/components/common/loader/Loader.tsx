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

interface LoaderProps {
  isLoaded: boolean;
}

const Loader: any = memo(({ isLoaded }: LoaderProps) => {
  return (
    <>
      {isLoaded && (
        <LoaderWrap>
          <ReactLoading type='spin' color='#A593E0' />
        </LoaderWrap>
      )}
    </>
  );
});

const Container = memo(({ setTarget, children }: { setTarget: any; children: React.ReactNode }) => {
  return <div ref={setTarget}>{children}</div>;
});

Loader.Container = Container;
export default Loader;
