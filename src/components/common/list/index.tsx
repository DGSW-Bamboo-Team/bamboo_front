import React, { memo } from 'react';
import { Container, ItemContainer, ItemName, ItemWriting } from './List';
import Loader from './Loading';
import useList from './hooks/useList';
import { fakerType } from './list.d';

const List = memo(() => {
  const { isLoaded, itemLists, setTarget } = useList();

  return (
    <Container>
      {itemLists.map((v: fakerType) => (
        <ItemValue FAKER={v} />
      ))}
      <Loader.Container setTarget={setTarget}>
        <Loader isLoaded={isLoaded} />
      </Loader.Container>
    </Container>
  );
});

const ItemValue = memo(({ FAKER }: { FAKER: fakerType }) => {
  return (
    <ItemContainer>
      <ItemName>{FAKER.name}</ItemName>
      <ItemWriting>{FAKER.writing}</ItemWriting>
    </ItemContainer>
  );
});

export default List;
