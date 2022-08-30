import React, { memo } from 'react';
import { Container, ItemContainer, ItemName, ItemWriting } from './list.style';
import Loader from './Loading';
import useList from './hooks/useList';
import { FakerType } from './list.d';

const List = memo(() => {
  const { isLoaded, itemLists, setTarget } = useList();

  return (
    <Container>
      {itemLists.map((v: FakerType) => (
        <ItemValue item={v} />
      ))}
      <Loader.Container setTarget={setTarget}>
        <Loader isLoaded={isLoaded} />
      </Loader.Container>
    </Container>
  );
});

const ItemValue = memo(({ item }: { item: FakerType }) => {
  return (
    <ItemContainer>
      <ItemName>{item.name}</ItemName>
      <ItemWriting>{item.writing}</ItemWriting>
    </ItemContainer>
  );
});

export default List;
