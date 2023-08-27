import { Metadata } from 'next';

import Container from '@/components/shared/Container';
import { Heading } from '@/components/shared/Heading';

export const metadata: Metadata = {
  title: 'Lokalita - Rezidence Marica',
};

const LocationPage = () => {
  return (
    <Container className="my-16">
      <Heading level="h3">Lokalita</Heading>
    </Container>
  );
};

export default LocationPage;
