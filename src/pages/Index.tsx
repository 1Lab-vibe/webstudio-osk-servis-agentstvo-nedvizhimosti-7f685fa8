import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Phone, MapPin, Mail, ShieldCheck, FileText, Award, Home as HomeIcon,
  Key, Scale, Wallet, Star, Check, ArrowRight,
} from "lucide-react";

import agentImg from "@/assets/agent.jpg";
import apt1 from "@/assets/apt1.jpg";
import apt2 from "@/assets/apt2.jpg";
import apt3 from "@/assets/apt3.jpg";
import keysImg from "@/assets/keys.jpg";
import moscowImg from "@/assets/moscow.jpg";

const listings = [
  { img: apt1, title: "2-комн. квартира, Пресненский р-н", area: "62 м²", price: "24 900 000 ₽", tag: "Продажа" },
  { img: apt2, title: "3-комн. видовая, Москва-Сити", area: "98 м²", price: "47 500 000 ₽", tag: "Эксклюзив" },
  { img: apt3, title: "1-комн. квартира, Хамовники", area: "41 м²", price: "18 200 000 ₽", tag: "Свежее" },
];

const services = [
  { icon: HomeIcon, title: "Продажа квартиры", text: "Оценка, фото, реклама, показы и сделка под ключ." },
  { icon: Key, title: "Подбор и покупка", text: "Подберём объект под ваш бюджет и задачи." },
  { icon: Wallet, title: "Ипотека", text: "Подача в 10+ банков, помощь в одобрении." },
  { icon: Scale, title: "Юр. сопровождение", text: "Проверка истории, безопасные расчёты, договор." },
];

const cases = [
  { who: "Семья с ребёнком", what: "Продали 1-комн. в Бутово, купили 3-комн. в Новой Москве за 11 дней показов." },
  { who: "Инвестор", what: "Подобрали ликвидную студию в ЗАО под аренду, доходность 7,2% годовых." },
  { who: "Пожилой клиент", what: "Безопасная альтернатива: разъезд с детьми, сопровождение нотариуса." },
];

const guarantees = [
  "Договор на оказание услуг — фиксируем условия и комиссию",
  "Юридическая проверка объекта и истории собственников",
  "Безопасные расчёты: аккредитив или банковская ячейка",
  "Прозрачная комиссия — без скрытых платежей",
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", note: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Укажите имя и телефон");
      return;
    }
    toast.success("Заявка отправлена. Перезвоним в течение 30 минут.");
    setForm({ name: "", phone: "", note: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="border-b hairline sticky top-0 z-40 backdrop-blur bg-background/80">
        <div className="container-tight flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-md border border-gold grid place-items-center text-gold font-bold">О</span>
            <span className="font-semibold tracking-tight">ОСК-СЕРВИС</span>
          </a>
          <nav className="hidden md:flex gap-7 text-sm text-muted-foreground">
            <a href="#objects" className="hover:text-foreground">Объекты</a>
            <a href="#services" className="hover:text-foreground">Услуги</a>
            <a href="#about" className="hover:text-foreground">О нас</a>
            <a href="#contacts" className="hover:text-foreground">Контакты</a>
          </nav>
          <a href="tel:+74997030133" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium">
            <Phone className="w-4 h-4 text-gold" /> 8 (499) 703-01-33
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="container-tight grid lg:grid-cols-[1.1fr,1fr] gap-10 lg:gap-14 py-12 lg:py-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold mb-5">
              <span className="w-8 h-px bg-gold" /> Агентство недвижимости · Москва
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Продаём и подбираем квартиры в Москве —
              <span className="text-gold"> без шаблонов и давления.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              ОСК-СЕРВИС — 5 лет на рынке. Работаем по договору, проверяем юридическую чистоту,
              сопровождаем сделку до получения ключей.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 text-base">
                <a href="#lead">Получить подборку объектов <ArrowRight className="ml-1 w-4 h-4" /></a>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-6 text-base border-border hover:bg-secondary">
                <a href="#lead">Узнать стоимость моей квартиры</a>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <div><div className="text-2xl font-bold text-gold">5 лет</div><div className="text-xs text-muted-foreground mt-1">на рынке Москвы</div></div>
              <div><div className="text-2xl font-bold text-gold">5,0</div><div className="text-xs text-muted-foreground mt-1">★ на Яндекс.Картах</div></div>
              <div><div className="text-2xl font-bold text-gold">РГР</div><div className="text-xs text-muted-foreground mt-1">членство гильдии</div></div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border hairline">
              <img src={agentImg} alt="Риелтор ОСК-СЕРВИС" width={1280} height={1280} className="w-full h-[420px] lg:h-[540px] object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-background/95 via-background/60 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-sm text-muted-foreground">Яндекс.Карты · отзывы клиентов</span>
                </div>
                <p className="mt-2 text-sm">«Помогли продать квартиру быстрее, чем ожидали. Всё чётко по договору.»</p>
              </div>
            </div>
            <div className="absolute -left-4 -bottom-4 hidden md:block bg-surface border hairline rounded-xl p-4 shadow-xl">
              <div className="text-xs text-muted-foreground">Среднее время сделки</div>
              <div className="text-xl font-bold text-gold">28 дней</div>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTS */}
      <section id="objects" className="py-16 lg:py-24 border-t hairline">
        <div className="container-tight">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-gold mb-3">Объекты</div>
              <h2 className="text-3xl lg:text-4xl font-bold">Свежие предложения недели</h2>
            </div>
            <a href="#lead" className="hidden sm:inline-flex items-center text-sm text-gold gold-underline">Запросить полный каталог</a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {listings.map((l) => (
              <article key={l.title} className="bg-surface rounded-2xl overflow-hidden border hairline group">
                <div className="relative overflow-hidden">
                  <img src={l.img} alt={l.title} loading="lazy" width={1280} height={896} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full bg-background/90 text-gold border border-gold/40">{l.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg leading-snug">{l.title}</h3>
                  <div className="mt-2 text-sm text-muted-foreground">{l.area}</div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-gold">{l.price}</span>
                    <a href="#lead" className="text-sm text-foreground/80 hover:text-gold inline-flex items-center gap-1">Подробнее <ArrowRight className="w-3.5 h-3.5" /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 lg:py-24 border-t hairline">
        <div className="container-tight">
          <div className="text-xs uppercase tracking-[0.18em] text-gold mb-3">Услуги</div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-10">Что мы делаем для клиента</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl border hairline bg-surface hover:border-gold/50 transition">
                <s.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

          {/* PROCESS — animated SVG */}
          <div className="mt-16 p-6 lg:p-10 rounded-2xl border hairline bg-surface">
            <h3 className="font-semibold text-xl mb-6">Как проходит сделка</h3>
            <svg viewBox="0 0 800 110" className="w-full h-auto" aria-hidden="true">
              <line x1="40" y1="55" x2="760" y2="55" stroke="hsl(var(--border))" strokeWidth="2" />
              <line x1="40" y1="55" x2="760" y2="55" stroke="hsl(var(--primary))" strokeWidth="2" className="draw-path" />
              {[40, 220, 400, 580, 760].map((cx, i) => (
                <g key={cx}>
                  <circle cx={cx} cy="55" r="10" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="2" />
                  <circle cx={cx} cy="55" r="4" fill="hsl(var(--primary))" className="dot-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                </g>
              ))}
              {[
                ["40", "Заявка"],
                ["220", "Подбор"],
                ["400", "Просмотры"],
                ["580", "Договор"],
                ["760", "Ключи"],
              ].map(([x, label]) => (
                <text key={label} x={x} y="95" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="13" fontFamily="Inter">{label}</text>
              ))}
            </svg>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="py-16 lg:py-24 border-t hairline">
        <div className="container-tight grid lg:grid-cols-[1fr,1.1fr] gap-12 items-center">
          <div className="rounded-2xl overflow-hidden border hairline">
            <img src={keysImg} alt="Передача ключей" loading="lazy" width={1280} height={800} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-gold mb-3">Кейсы</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Реальные сделки в районе</h2>
            <div className="space-y-5">
              {cases.map((c) => (
                <div key={c.who} className="p-5 rounded-xl border hairline bg-surface">
                  <div className="text-sm text-gold font-medium">{c.who}</div>
                  <div className="mt-1 text-foreground/90">{c.what}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 lg:py-24 border-t hairline">
        <div className="container-tight grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-gold mb-3">О команде</div>
            <h2 className="text-3xl lg:text-4xl font-bold">Агентство, которому доверяют сделки в Москве</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              ОСК-СЕРВИС работает в Москве с 2020 года. За это время — десятки закрытых сделок,
              5,0 на Яндекс.Картах и постоянные клиенты, которые приходят повторно и по рекомендациям.
            </p>
            <ul className="mt-6 space-y-3">
              {["Опытные агенты с практикой 5+ лет", "Членство в Российской Гильдии Риелторов", "Работа по договору и фиксированной комиссии", "Знание локальных рынков и районов Москвы"].map((t) => (
                <li key={t} className="flex gap-3"><Check className="w-5 h-5 text-gold mt-0.5 shrink-0" /><span>{t}</span></li>
              ))}
            </ul>
          </div>
          <img src={moscowImg} alt="Москва" loading="lazy" width={1600} height={800} className="rounded-2xl border hairline w-full h-[380px] object-cover" />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 lg:py-24 border-t hairline">
        <div className="container-tight">
          <div className="text-xs uppercase tracking-[0.18em] text-gold mb-3">Отзывы</div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-10">Что говорят клиенты</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <figure className="p-6 lg:p-8 rounded-2xl bg-surface border hairline">
              <div className="flex text-gold mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
              <blockquote className="text-lg leading-relaxed">
                «Профессиональный подход. Помогли с продажей и сразу с покупкой альтернативы.
                По договору, без сюрпризов. Рекомендую.»
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">— клиент, Яндекс.Карты</figcaption>
            </figure>
            <div className="p-6 lg:p-8 rounded-2xl border hairline bg-surface flex flex-col justify-between">
              <div>
                <div className="text-5xl font-bold text-gold">5,0</div>
                <div className="text-muted-foreground mt-1">средняя оценка на Яндекс.Картах</div>
              </div>
              <a href="#lead" className="mt-6 inline-flex items-center text-gold gold-underline w-fit">Оставить заявку и стать следующим довольным клиентом</a>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="py-16 lg:py-24 border-t hairline">
        <div className="container-tight">
          <div className="text-xs uppercase tracking-[0.18em] text-gold mb-3">Гарантии</div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-10">Прозрачно и по договору</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {guarantees.map((g, i) => {
              const Icon = [FileText, ShieldCheck, Wallet, Award][i];
              return (
                <div key={g} className="p-6 rounded-xl bg-surface border hairline flex gap-4">
                  <Icon className="w-6 h-6 text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p>{g}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEAD FORM + CONTACTS */}
      <section id="lead" className="py-16 lg:py-24 border-t hairline">
        <div className="container-tight grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-gold mb-3">Заявка</div>
            <h2 className="text-3xl lg:text-4xl font-bold">Подберём объект или оценим вашу квартиру</h2>
            <p className="mt-4 text-muted-foreground">
              Оставьте контакты — перезвоним в течение 30 минут, бесплатно проконсультируем
              и подготовим подборку под ваш запрос.
            </p>

            <form onSubmit={submit} className="mt-8 space-y-4">
              <Input placeholder="Ваше имя" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="h-12 bg-surface border-border" />
              <Input placeholder="Телефон" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="h-12 bg-surface border-border" />
              <Textarea placeholder="Что ищете или что продаёте? (необязательно)" value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} className="min-h-24 bg-surface border-border" />
              <Button type="submit" size="lg" className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 text-base">
                Получить подборку объектов
              </Button>
              <p className="text-xs text-muted-foreground">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p>
            </form>
          </div>

          <div id="contacts" className="space-y-5">
            <div className="rounded-2xl overflow-hidden border hairline bg-surface">
              <iframe
                title="ОСК-СЕРВИС на Яндекс.Картах — Москва"
                src="https://yandex.ru/map-widget/v1/?text=ул.%20Васильцовский%20Стан%2C%201%2C%20Москва&z=16"
                className="w-full h-72 border-0"
                loading="lazy"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="tel:+74997030133" className="p-5 rounded-xl border hairline bg-surface flex gap-3 items-start hover:border-gold/50 transition">
                <Phone className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <div className="text-xs text-muted-foreground">Телефон</div>
                  <div className="font-medium">8 (499) 703-01-33</div>
                </div>
              </a>
              <a href="mailto:ockm@mail.ru" className="p-5 rounded-xl border hairline bg-surface flex gap-3 items-start hover:border-gold/50 transition">
                <Mail className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <div className="text-xs text-muted-foreground">Почта</div>
                  <div className="font-medium">ockm@mail.ru</div>
                </div>
              </a>
              <div className="p-5 rounded-xl border hairline bg-surface flex gap-3 items-start sm:col-span-2">
                <MapPin className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <div className="text-xs text-muted-foreground">Город работы</div>
                  <div className="font-medium">ул. Васильцовский Стан, 1, Москва, 109125</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t hairline py-8">
        <div className="container-tight flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} ОСК-СЕРВИС, агентство недвижимости</div>
          <div>Москва · Работаем по договору</div>
        </div>
      </footer>
    </div>
  );
}
