import { SiFacebook, SiInstagram } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-200 mt-auto px-8 z-50">
      <div className="py-8 max-w-7xl m-auto flex justify-between">
        <div className="border-l-[4px] border-red-600 pl-2">
          <p className="text-sm">Rezidence</p>
          <p className="text-lg font-bold">Marica</p>
        </div>
        <div>
          <p className="text-xl text-gray-700 font-bold mb-4">Adresa</p>
          <p>K Tabulkám</p>
          <p>517 41 Kostelec nad Orlicí</p>
        </div>
        <div>
          <p className="text-xl text-gray-700 font-bold mb-4">Kontakt</p>
          <p>
            <a href="tel:+420800100160">+420 800 100 160</a>
          </p>
          <p>
            <a href="mailto:info@rezidencetabulky.cz">
              info@rezidencetabulky.cz
            </a>
          </p>
        </div>
        <div>
          <p className="text-xl text-gray-700 font-bold mb-4">Sociální sítě</p>
          <div className="flex gap-8">
            <a
              href="https://www.facebook.com/profile.php?id=100063473502840"
              target="_blank"
            >
              <SiFacebook className="w-8 h-8 transition-all delay-100 hover:text-green-600 text-[#232B2B]" />
            </a>
            <a href="https://www.instagram.com/rybka.building/" target="_blank">
              <SiInstagram className="w-8 h-8 transition-all delay-100 hover:text-green-600 text-[#232B2B]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
