import { useCallback, useEffect, useState } from 'react';
import { fakerType } from '../list.d';
import faker from 'faker';

const useList = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const [itemLists, setItemLists] = useState<fakerType[] | []>([]);

  const getMoreItem = useCallback(async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    let Items: fakerType[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
      return { name: faker.lorem.word(), writing: faker.lorem.text() };
    });

    setItemLists((itemLists: fakerType[]) => itemLists.concat(Items));
    setIsLoaded(false);
  }, [itemLists]);

  const onIntersect = useCallback(async ([entry]: any, observer: any) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  }, []);

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

  return { itemLists, isLoaded, setTarget };
};

export default useList;
