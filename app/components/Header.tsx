import Link from 'next/link';

export default function Header() {
  return (
    <header className="gothic-bg border-b-4 border-amber-800">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-4xl gothic-text font-black">
            ✠ DARK BREW ✠
          </Link>
          <nav className="space-x-8">
            <Link href="/" className="gothic-text hover:text-amber-400 transition">Главная</Link>
            <Link href="/menu" className="gothic-text hover:text-amber-400 transition">Меню</Link>
            <Link href="/about" className="gothic-text hover:text-amber-400 transition">О нас</Link>
            <Link href="/contact" className="gothic-text hover:text-amber-400 transition">Контакты</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
