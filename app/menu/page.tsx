import Link from 'next/link';

const menuItems = [
  {
    id: 1,
    name: "Чёрный эликсир",
    price: 450,
    description: "Эспрессо двойной крепости с нотками ладана"
  },
  {
    id: 2,
    name: "Кровь дракона",
    price: 520,
    description: "Латте с корицей и красным перцем"
  },
  {
    id: 3,
    name: "Тень полуночи",
    price: 480,
    description: "Американо с тёмным шоколадом"
  },
  {
    id: 4,
    name: "Проклятие ведьмы",
    price: 550,
    description: "Капучино с мятным сиропом и щепоткой мускатного ореха. Тайный рецепт, передаваемый из поколения в поколение.",
    image: "https://via.placeholder.com/400x300/1a1a2e/8B4513?text=Проклятие+ведьмы"
  },
  {
    id: 5,
    name: "Лунный туман",
    price: 490,
    description: "Фильтр‑кофе с лавандой и ванильным экстрактом. Напиток для тех, кто ищет умиротворения.",
    image: "https://via.placeholder.com/400x300/1a1a2e/8B4513?text=Лунный+туман"
  },
  {
    id: 6,
    name: "Гримуар",
    price: 580,
    description: "Раф с карамелью и корицей. Напиток назван в честь древних книг заклинаний.",
    image: "https://via.placeholder.com/400x300/1a1a2e/8B4513?text=Гримуар"
  },
  {
    id: 7,
    name: "Полночный ворон",
    price: 510,
    description: "Мокко с тёмным какао и апельсиновой цедрой. Вкус, достойный королей ночи.",
    image: "https://via.placeholder.com/400x300/1a1a2e/8B4513?text=Полночный+ворон"
  },
  {
    id: 8,
    name: "Заклинание холода",
    price: 530,
    description: "Айс‑латте с мятным сиропом и шоколадной крошкой. Освежающий напиток для жарких дней.",
    image: "https://via.placeholder.com/400x300/1a1a2e/8B4513?text=Заклинание+холода"
  },
  {
    id: 9,
    name: "Тайна склепа",
    price: 600,
    description: "Фраппучино с ореховым сиропом и взбитыми сливками. Напиток с многослойным вкусом, как история древнего склепа.",
    image: "https://via.placeholder.com/400x300/1a1a2e/8B4513?text=Тайна+склепа"
  }
];

export default function MenuPage() {
  return (
    <div className="gothic-bg min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-5xl gothic-text text-center mb-12">Меню</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-black/40 p-6 rounded-lg border border-amber-700">
              <h3 className="text-2xl gothic-text mb-2">{item.name}</h3>
              <p className="gothic-text mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-amber-300 font-bold">{item.price} ₽</span>
                <Link
                  href={`/menu/${item.id}`}
                  className="bg-amber-900 text-amber-100 px-4 py-2 rounded hover:bg-amber-800"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
