import { Metadata } from 'next';
import Image from 'next/image';

import { Heading } from '@/components/shared/Heading';
import RybkaBuildingLogo from '@/public/images/logo-rybkabuilding.png';
import Container from '@/components/shared/Container';

export const metadata: Metadata = {
  title: 'Kontakty - Rezidence Marica',
};

export default function ContactsPage() {
  return (
    <Container className="my-16">
      <Heading level="h3">Kontakty</Heading>
      <div className="flex gap-16 mt-6">
        <div className="rounded-lg border border-gray-300 p-6 w-1/2">
          <p className="text-xl font-bold mb-6">
            Investor, Developer & Prodejce bytů
          </p>
          <Image
            src={RybkaBuildingLogo}
            alt="Rybka Building Logo"
            width={130}
            height={22}
          />

          <div className="flex flex-col gap-3 mt-6">
            <p className="font-bold">Rybka Building, a.s.</p>
            <div>
              <p>
                <span className="font-bold">E-mail:</span>{' '}
                <a href="mailto:info@rybkabuilding.cz">info@rybkabuilding.cz</a>
              </p>
              <p>
                <span className="font-bold">Telefon:</span>{' '}
                <a href="tel:+420800100160">+420 800 100 160</a>
              </p>
            </div>

            <div>
              <p>Kostelní 733/2B 747 21</p>
              <p>Kravaře u Hlučína</p>
            </div>

            <div>
              <p>IČO: 05450608</p>
              <p>DIČ: CZ05450608</p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <p className="text-xl font-bold mb-6">Co vás zajímá</p>
          <form action="">FORM</form>
        </div>
      </div>
    </Container>
  );
}
