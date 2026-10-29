import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="gothic-bg min-h-screen flex flex-col">
      {/* Навигация (опционально, если нет отдельного layout) */}
      <nav className="border-b border-amber-500/20">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-2xl font-bold text-amber-300">
            DARK BREW
          </Link>
        </div>
      </nav>

      {/* Основной контент */}
      <main className="flex-grow container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-amber-300 mb-4 tracking-wide">
          DARK BREW
        </h1>
        <p className="text-xl text-amber-200 mb-12 italic">
          «Где тьма встречается с ароматом кофе»
        </p>

        <Link
          href="/menu"
          className="bg-amber-900 text-amber-50 px-8 py-4 rounded-lg hover:bg-amber-800 transition-all transform hover:scale-105 duration-300 shadow-lg shadow-amber-900/30"
        >
          Посмотреть меню
        </Link>

        <div className="mt-16 bg-black/40 p-8 rounded-lg max-w-2xl mx-auto backdrop-blur-sm border border-amber-500/20">
          <h2 className="text-3xl text-amber-300 mb-4 font-semibold">
            Добро пожаловать в мир тёмных ароматов
          </h2>
          <p className="text-amber-200 leading-relaxed">
            Погрузитесь в атмосферу старинной готической кофейни, где каждый глоток — это путешествие сквозь века.
          </p>
        </div>
      </main>

      {/* Футер */}
      <footer className="border-t border-amber-500/20 py-6 bg-black/30">
        <div className="container mx-auto px-4">
          <p className="text-sm text-center text-amber-400">
            © 2024 Dark Brew. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
