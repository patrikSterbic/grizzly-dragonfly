import { Metadata } from 'next';
import Image from 'next/image';

import Container from '@/components/shared/Container';
import { Heading } from '@/components/shared/Heading';

import HomepageImage from '@/public/images/hero.jpeg';

export const metadata: Metadata = {
  title: 'Úvod - Rezidence Marica',
};

export default function Home() {
  return (
    <div>
      <div className="relative w-screen h-[calc(100vh-5rem)]">
        <Image src={HomepageImage} alt="Hero" fill={true} />
        <div className="absolute bottom-36 right-24 bg-green-100 p-8 w-[500px]">
          <p className="text-3xl font-bold mb-6">
            Bydlení v Ostravě, to je Marica!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
            voluptatum, corporis ut laboriosam voluptate consequatur tenetur
            assumenda dolore voluptatibus, sed doloribus odio amet mollitia quos
            aliquid magnam illo ad. Sint.
          </p>
        </div>
      </div>
      <Container className="my-16">
        <div className="flex gap-16">
          <div className="w-1/2">
            <Heading level="h5" className="mb-6">
              Some text 1
            </Heading>
            <p className="text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              laborum ducimus in eius odit expedita culpa quibusdam, quo
              aspernatur enim obcaecati, repellendus consequuntur praesentium
              natus commodi illum quos suscipit animi. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Nisi laborum ducimus in eius
              odit expedita culpa quibusdam, quo aspernatur enim obcaecati,
              repellendus consequuntur praesentium natus commodi illum quos
              suscipit animi.
            </p>
          </div>
          <div className="w-1/2">
            <Heading level="h5" className="mb-6">
              Some text 1
            </Heading>
            <p className="text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              laborum ducimus in eius odit expedita culpa quibusdam, quo
              aspernatur enim obcaecati, repellendus consequuntur praesentium
              natus commodi illum quos suscipit animi. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Nisi laborum ducimus in eius
              odit expedita culpa quibusdam, quo aspernatur enim obcaecati,
              repellendus consequuntur praesentium natus commodi illum quos
              suscipit animi.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
