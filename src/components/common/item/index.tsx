import React, { memo, useCallback, useEffect, useState } from 'react';
import faker from 'faker';
import { Container, ItemContainer, ItemName, ItemWriting } from './Item';
import Loader from './Loading';

interface fakerType {
  name: string | null;
  writing: string | null;
}

const Item = () => {
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemLists, setItemLists] = useState<fakerType[]>([{ name: null, writing: null }]);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    let Items: fakerType[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
      return { name: faker.lorem.word(), writing: faker.lorem.text() };
    });
    setItemLists((itemLists) => itemLists.concat(Items));
    setIsLoaded(false);
  };

  const onIntersect = async ([entry]: any, observer: any) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer: any;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <Container>
      {itemLists.map((v) => (
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

export default Item;
