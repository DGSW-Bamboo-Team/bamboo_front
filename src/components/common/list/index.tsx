import React, { memo } from 'react';
import { Container, ItemContainer, ItemName, ItemWriting } from './List';
import Loader from './Loading';
import useList from './hooks/useList';

export interface fakerType {
  name: string | null;
  writing: string | null;
}

const List = () => {
  const { isLoaded, itemLists, setTarget } = useList();

  return (
    <Container>
      {itemLists.map((v: fakerType) => (
        <ItemValue v={v} />
      ))}
      <div ref={setTarget} className='Target-Element'>
        {isLoaded && <Loader />}
      </div>
    </Container>
  );
};

const ItemValue = memo(({ v }: { v: fakerType }) => {
  return (
    <ItemContainer>
      <ItemName>{v.name}</ItemName>
      <ItemWriting>{v.writing}</ItemWriting>
    </ItemContainer>
  );
});

export default List;
