import React, { useCallback, useEffect, useState } from 'react';
import faker from 'faker';
import { Container, ItemContainer, ItemName, ItemWriting } from './Item';

interface fakerType {
  name: string | null;
  writing: string | null;
}

const Item = () => {
  const [dumy, setDumy] = useState<fakerType[]>([{ name: 'abc', writing: 'aa' }]);

  const startDumy = useCallback(() => {
    const result = [];
    for (let i = 0; i < 500; i++) {
      result.push({ name: faker.lorem.word(), writing: faker.lorem.text() });
    }
    setDumy(result);
  }, []);

  useEffect(() => {
    startDumy();
  }, []);

  return (
    <Container>
      {dumy.map((v) => (
        <ItemContainer>
          <ItemName>{v.name}</ItemName>
          <ItemWriting>{v.writing}</ItemWriting>
        </ItemContainer>
      ))}
    </Container>
  );
};

export default Item;
