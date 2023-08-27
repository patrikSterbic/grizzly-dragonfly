import Link from './Link';

const Navigation = () => {
  return (
    <nav className="w-full px-8 z-50 bg-white border-b">
      <div className="max-w-7xl flex justify-between m-auto items-center py-4">
        <div className="border-l-[4px] border-red-600 pl-2">
          <p className="text-sm">Rezidence</p>
          <p className="text-xl font-bold">Marica</p>
        </div>
        <ul className="flex gap-12">
          <li>
            <Link href="/">Úvod</Link>
          </li>
          <li>
            <Link href="/lokalita">Lokalita</Link>
          </li>
          <li>
            <Link href="/o-projektu">O projektu</Link>
          </li>
          <li>
            <Link href="/byty">Nabídka bytů</Link>
          </li>
          <li>
            <Link href="/galerie">Galerie</Link>
          </li>
          <li>
            <Link href="/kontakty">Kontakty</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
