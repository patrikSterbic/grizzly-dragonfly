import { Metadata } from 'next';

import Container from '@/components/shared/Container';
import { Heading } from '@/components/shared/Heading';

export const metadata: Metadata = {
  title: 'Nabídka bytů - Rezidence Marica',
};

const ApartmentsPage = () => {
  return (
    <Container className="my-16">
      <Heading level="h3">Nabídka bytů</Heading>
    </Container>
  );
};

export default ApartmentsPage;
