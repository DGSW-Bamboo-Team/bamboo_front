import { useState } from 'react';
import List from '~/components/common/List';
import Loader from '~/components/common/Loader';
import useIntersectionTarget from '~/hooks/useIntersectionTarget';
import IssueBox from '../IssueBox';
import getMoreItems from '~/services/getMoreItems';
import { FakerType } from '../Issue.types';
import { Container } from './IssueList.style';

function IssueList() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemLists, setItemLists] = useState<FakerType[]>([]);

  const handleIntersect = async (
    [entry]: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) => {
    setIsLoaded(true);
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      const items = await getMoreItems();
      setItemLists((prevItemList) => [...prevItemList, ...items]);
      observer.observe(entry.target);
      setIsLoaded(false);
    }
  };

  const loadTarget = useIntersectionTarget(handleIntersect);

  return (
    <Container>
      <List
        items={itemLists}
        renderItem={({ id, name, writing }) => <IssueBox key={id} name={name} writing={writing} />}
      />

      <Loader.Container ref={loadTarget}>
        <Loader isLoaded={isLoaded} />
      </Loader.Container>
    </Container>
  );
}

export default IssueList;
