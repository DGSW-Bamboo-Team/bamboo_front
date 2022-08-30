import React, { memo, useEffect } from 'react';
import { Container, ItemContainer, ItemName, ItemWriting } from './List';
import Loader from './Loading';
import useList from './hooks/useList';
import { fakerType } from './list.d';

const List = memo(() => {
  const { isLoaded, itemLists, setTarget } = useList();

  return (
    <Container>
      {itemLists.map((v: fakerType) => (
        <ItemValue v={v} />
      ))}

      <Loader.Container setTarget={setTarget}>
        <Loader isLoaded={isLoaded} />
      </Loader.Container>
    </Container>
  );
});

const ItemValue = memo(({ v }: { v: fakerType }) => {
  return (
    <ItemContainer>
      <ItemName>{v.name}</ItemName>
      <ItemWriting>{v.writing}</ItemWriting>
    </ItemContainer>
  );
});

export default List;
