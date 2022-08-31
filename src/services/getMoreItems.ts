import faker from 'faker';
import { v4 as idGenerator } from 'uuid';
import { FakerType } from '~/components/domain/Issue/Issue.types';
import range from './range';

const getMoreItems = async () => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  const items: FakerType[] = range(10).map(() => {
    return { id: idGenerator(), name: faker.lorem.word(), writing: faker.lorem.text() };
  });

  return items;
};

export default getMoreItems;
