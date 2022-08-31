import { FakerType } from '../Issue.types';
import { Container, Name, Writing } from './IssueBox.style';

function IssueBox({ name, writing }: Omit<FakerType, 'id'>) {
  return (
    <Container>
      <Name>{name}</Name>
      <Writing>{writing}</Writing>
    </Container>
  );
}

export default IssueBox;
