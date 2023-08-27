import Image from 'next/image';
import { Metadata } from 'next';

import { Heading } from '@/components/shared/Heading';
import Container from '@/components/shared/Container';

import galleryImg1 from '@/public/images/gallery/building1.jpeg';
import galleryImg2 from '@/public/images/gallery/building2.jpeg';
import galleryImg3 from '@/public/images/gallery/building3.jpeg';
import galleryImg4 from '@/public/images/gallery/building4.jpeg';
import galleryImg5 from '@/public/images/gallery/building5.jpeg';

export const metadata: Metadata = {
  title: 'Galerie - Rezidence Marica',
};

const GalleryPage = () => {
  return (
    <Container className="my-16">
      <Heading level="h3" className="mb-6">
        Galerie
      </Heading>
      <Heading level="h4">Výstavba</Heading>
      <div className="mt-6 flex gap-6 flex-wrap">
        <Image
          src={galleryImg1}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg2}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg3}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg4}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg5}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg1}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg2}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg3}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg4}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg3}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg4}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg5}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
      </div>

      <Heading level="h4" className="mt-5">
        Byt s balkónem
      </Heading>
      <div className="mt-6 flex gap-6 flex-wrap">
        <Image
          src={galleryImg1}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg2}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg3}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg4}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg3}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg4}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg3}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg4}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg5}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
      </div>

      <Heading level="h4" className="mt-6">
        Půdorysy
      </Heading>
      <div className="mt-6 flex gap-6 flex-wrap">
        <Image
          src={galleryImg1}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg2}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg3}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg4}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg3}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg4}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg3}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg4}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
        <Image
          src={galleryImg5}
          alt="Obrázek galerie"
          width={280}
          height={280}
        />
      </div>
    </Container>
  );
};

export default GalleryPage;
