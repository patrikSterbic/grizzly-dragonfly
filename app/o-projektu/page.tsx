import { Metadata } from 'next';

import Container from '@/components/shared/Container';
import { Heading } from '@/components/shared/Heading';

export const metadata: Metadata = {
  title: 'O projektu - Rezidence Marica',
};

const AboutProjectPage = () => {
  return (
    <Container className="my-16">
      <Heading level="h3">O projektu</Heading>
    </Container>
  );
};

export default AboutProjectPage;
