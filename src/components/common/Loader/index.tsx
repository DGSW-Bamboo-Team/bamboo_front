import { forwardRef } from 'react';
import ReactLoading from 'react-loading';
import { LoaderWrap } from './Loader.style';

interface LoaderProps {
  isLoaded: boolean;
}

function Loader({ isLoaded }: LoaderProps) {
  return (
    <>
      {isLoaded && (
        <LoaderWrap>
          <ReactLoading type='spin' color='#A593E0' />
        </LoaderWrap>
      )}
    </>
  );
}

interface ContainerProps {
  children: React.ReactNode;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(({ children }, ref) => {
  return <div ref={ref}>{children}</div>;
});

Loader.Container = Container;
export default Loader;
