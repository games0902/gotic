import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const menuItems = [
  {
    id: 1,
    name: "Чёрный эликсир",
    price: 450,
    description: "Эспрессо двойной крепости с нотками ладана. Приготовлен по старинному рецепту монахов XIII века.",
    image: "/images/1.jpeg" // Путь относительно папки public
  },
  {
    id: 2,
    name: "Кровь дракона",
    price: 520,
    description: "Латте с корицей и красным перцем. Напиток, вдохновлённый легендами о древних драконах.",
    image: "/images/2.jpeg"
  },
  {
    id: 3,
    name: "Тень полуночи",
    price: 480,
    description: "Американо с тёмным шоколадом. Погрузитесь в атмосферу полуночных размышлений.",
    image: "/images/3.jpeg"
  },
  {
    id: 4,
    name: "Проклятие ведьмы",
    price: 550,
    description: "Капучино с мятным сиропом и щепоткой мускатного ореха. Тайный рецепт, передаваемый из поколения в поколение.",
    image: "/images/4.jpeg"
  },
  {
    id: 5,
    name: "Лунный туман",
    price: 490,
    description: "Фильтр‑кофе с лавандой и ванильным экстрактом. Напиток для тех, кто ищет умиротворения.",
    image: "/images/5.jpeg"
  },
  {
    id: 6,
    name: "Гримуар",
    price: 580,
    description: "Раф с карамелью и корицей. Напиток назван в честь древних книг заклинаний.",
    image: "/images/6.jpeg"
  },
  {
    id: 7,
    name: "Полночный ворон",
    price: 510,
    description: "Мокко с тёмным какао и апельсиновой цедрой. Вкус, достойный королей ночи.",
    image: "/images/7.jpeg" 
  },
  {
    id: 8,
    name: "Заклинание холода",
    price: 530,
    description: "Айс‑латте с мятным сиропом и шоколадной крошкой. Освежающий напиток для жарких дней.",
    image: "/images/8.jpeg"
  },
  {
    id: 9,
    name: "Тайна склепа",
    price: 600,
    description: "Фраппучино с ореховым сиропом и взбитыми сливками. Напиток с многослойным вкусом, как история древнего склепа.",
    image: "/images/9.jpeg"
  }
];

interface MenuItemPageProps {
  params: {
    id: string;
  };
}

export default function MenuItemPage({ params }: MenuItemPageProps) {
  const itemId = parseInt(params.id, 10);
  const menuItem = menuItems.find(item => item.id === itemId);

  if (!menuItem) {
    notFound();
  }

  return (
    <div className="gothic-bg min-h-screen">
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-black/50 p-8 rounded-lg border border-amber-700 backdrop-blur-sm">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Блок с картинкой */}
            <div className="relative w-full h-64 lg:h-96 rounded-lg overflow-hidden shadow-2xl border border-amber-800/30">
              <Image
                src={menuItem.image}
                alt={menuItem.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Блок с описанием */}
            <div>
              <h1 className="text-4xl md:text-5xl gothic-text mb-4 font-bold tracking-wide">
                {menuItem.name}
              </h1>
              <p className="gothic-text text-lg mb-8 leading-relaxed">
                {menuItem.description}
              </p>
              <div className="mb-10">
                <span className="text-5xl text-amber-300 font-extrabold tracking-tight">
                  {menuItem.price} ₽
                </span>
              </div>
              <Link
                href="/menu"
                className="bg-amber-900 text-amber-50 px-6 py-3 rounded-lg hover:bg-amber-800 transition-all shadow-lg shadow-amber-900/30 hover:shadow-amber-900/50 inline-flex items-center gap-2 font-medium"
              >
                ← Назад в меню
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}