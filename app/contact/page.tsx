export default function ContactPage() {
  return (
    <div className="gothic-bg min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-5xl gothic-text text-center mb-12">Где нас найти</h1>
        <div className="max-w-3xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="bg-black/40 p-8 rounded-lg border border-amber-700">
            <h2 className="text-3xl gothic-text mb-6">Контактная информация</h2>
            <div className="space-y-4 gothic-text">
              <p><strong>Адрес:</strong> ул. Тёмных Фонарей, 13, Москва</p>
              <p><strong>Телефон:</strong> +7 (495) 123-45-67</p>
              <p><strong>Email:</strong> info@darkbrew.ru</p>
              <p><strong>Instagram:</strong> @darkbrew_coffee</p>
            </div>
            <h3 className="text-2xl gothic-text mt-8 mb-4">Часы работы</h3>
            <p className="gothic-text">Пн–Пт: 8:00–23:00</p>
            <p className="gothic-text">Сб–Вс: 9:00–01:00</p>
          </div>
          <div className="bg-black/40 p-8 rounded-lg border border-amber-700">
            <h2 className="text-3xl gothic-text mb-6">Карта</h2>
            <div className="bg-black/60 h-64 rounded-lg flex items-center justify-center">
              <p className="gothic-text">Здесь будет интерактивная карта</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}