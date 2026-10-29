export default function AboutPage() {
  return (
    <div className="gothic-bg min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-5xl gothic-text text-center mb-12">О нас</h1>
        <div className="max-w-3xl mx-auto bg-black/40 p-8 rounded-lg border border-amber-700">
          <h2 className="text-3xl gothic-text mb-6">История Dark Brew</h2>
          <p className="gothic-text mb-6">
            Наша кофейня открылась в 2018 году в старинном особняке XIX века. Мы воссоздали атмосферу готической эпохи, где каждый элемент интерьера напоминает о средневековых замках.
          </p>
          <h3 className="text-2xl gothic-text mb-4">Наши ценности</h3>
          <ul className="gothic-text list-disc pl-6 mb-6">
            <li>Аутентичность во всём — от рецептов до декора</li>
            <li>Использование редких сортов кофе</li>
            <li>Уважение к традициям приготовления</li>
            <li>Создание уникальной атмосферы</li>
          </ul>
          <p className="gothic-text">
            Мы верим, что кофе — это не просто напиток, а магический эликсир, способный перенести вас в другие эпохи.
          </p>
        </div>
      </section>
    </div>
  );
}