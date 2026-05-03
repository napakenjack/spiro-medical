import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ShieldCheck, Activity, Brain, HeartPulse, Stethoscope, ArrowRight, CheckCircle2, Bed, Beaker } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '@/data/navigation';

export default function HomePage() {
  return (
    <div className="flex flex-col text-brand-navy">
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-32 px-6 lg:px-12 w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-3/5 pr-0 lg:pr-12 pt-8 flex flex-col justify-start z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#20C7D9] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">ЭКСКЛЮЗИВНЫЙ ПРЕДСТАВИТЕЛЬ ITAMAR MEDICAL</span>
            </div>
            
            <h1 className="text-[48px] sm:text-[64px] leading-[1.05] font-bold text-[#0B1F33] mb-6 tracking-tight">
              Современная <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A84FF] to-[#20C7D9]">диагностика сна</span> <br/>
              в Казахстане
            </h1>
            
            <p className="text-lg text-[#5B6B7A] leading-relaxed mb-10 max-w-lg">
              Компьютерная сомнография и технологии WatchPAT для выявления нарушений дыхания во сне. Сосредоточьтесь на главном.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button variant="secondary" asChild>
                <Link to="/clinics">Консультация для врачей</Link>
              </Button>
              <div className="flex flex-col">
                <span className="text-[#5B6B7A] text-xs font-semibold uppercase">Связаться в WhatsApp</span>
                <span className="text-lg font-bold text-[#0A84FF]">+7 701 491 36 29</span>
              </div>
            </div>

            {/* Features Strip inline */}
             <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Card className="!p-5">
                  <div className="text-[#20C7D9] mb-2">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-sm mb-1 text-[#0B1F33]">Itamar Medical / Израиль</h3>
                  <p className="text-xs text-[#5B6B7A]">Мировой золотой стандарт PAT-технологии</p>
                </Card>
                <Card className="!p-5">
                  <div className="text-[#0A84FF] mb-2">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-sm mb-1 text-[#0B1F33]">Свой сервис-центр</h3>
                  <p className="text-xs text-[#5B6B7A]">Техническая поддержка 24/7 в Алматы</p>
                </Card>
                <Card className="!p-5">
                  <div className="text-[#35C99F] mb-2">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-sm mb-1 text-[#0B1F33]">Обучение врачей</h3>
                  <p className="text-xs text-[#5B6B7A]">Регулярные тренинги по медицине сна</p>
                </Card>
             </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-2/5 relative flex items-center justify-center mt-16 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            {/* Floating Medical Interface Mockup */}
            <div className="relative bg-white p-8 rounded-[40px] shadow-2xl border border-gray-100 flex flex-col w-full max-w-md mx-auto">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <span className="text-[10px] uppercase tracking-tighter font-bold text-gray-400">Sleep Diagnostic Report</span>
                  <h4 className="text-xl font-bold text-[#0B1F33]">WatchPAT ONE</h4>
                </div>
                <div className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-full border border-green-100">ACTIVE DEVICE</div>
              </div>
              
              <div className="space-y-6">
                {/* Mini Chart */}
                <div className="h-20 flex items-end gap-1">
                  <div className="flex-1 bg-blue-100 h-[40%] rounded-t-sm" />
                  <div className="flex-1 bg-blue-200 h-[60%] rounded-t-sm" />
                  <div className="flex-1 bg-blue-400 h-[90%] rounded-t-sm" />
                  <div className="flex-1 bg-blue-500 h-[100%] rounded-t-sm" />
                  <div className="flex-1 bg-blue-300 h-[70%] rounded-t-sm" />
                  <div className="flex-1 bg-blue-100 h-[30%] rounded-t-sm" />
                  <div className="flex-1 bg-cyan-400 h-[50%] rounded-t-sm" />
                  <div className="flex-1 bg-cyan-500 h-[80%] rounded-t-sm" />
                </div>

                {/* Stats Grid */}
                <div class="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <span className="block text-xs text-[#5B6B7A]">AHI Index</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[#0B1F33]">4.2</span>
                      <span className="text-[10px] font-medium text-green-500">Normal</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <span className="block text-xs text-[#5B6B7A]">ODI Score</span>
                    <span className="text-2xl font-bold text-red-500">12.5</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <span className="block text-xs text-[#5B6B7A]">Deep Sleep</span>
                    <span className="text-2xl font-bold text-[#0B1F33]">24%</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <span className="block text-xs text-[#5B6B7A]">REM Phases</span>
                    <span className="text-2xl font-bold text-[#0B1F33]">5</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                      <Activity className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0B1F33]">Автоматический отчет zzzPAT</p>
                      <p className="text-[10px] text-[#5B6B7A]">Передача данных по запросу</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Tags Floating */}
              <div className="absolute -top-6 -right-6 lg:-right-12 bg-[#20C7D9] text-white p-6 rounded-3xl shadow-xl transform rotate-6 z-20">
                <span className="block text-[10px] uppercase font-bold opacity-80">Premium</span>
                <span className="text-xl sm:text-2xl font-black">100 000 ₸</span>
              </div>

              <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 transform -rotate-3 z-20">
                <span className="block text-[10px] uppercase font-bold text-[#5B6B7A]">Стандарт</span>
                <span className="text-xl sm:text-2xl font-black text-[#0B1F33]">70 000 ₸</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Problem Section */}
      <section className="py-24 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16 px-4 sm:px-0">
            <h2 className="text-[32px] sm:text-[40px] font-bold tracking-tight text-[#0B1F33] mb-6 leading-tight">
              Нарушения дыхания во сне часто остаются незамеченными
            </h2>
            <p className="text-[#5B6B7A] text-lg">
              Синдром обструктивного апноэ сна (СОАС) способен значительно снижать качество жизни. Ночная гипоксия и остановки дыхания создают серьезную нагрузку на сердечно-сосудистую систему, вызывая целый каскад проблем со здоровьем.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: 'Храп и остановки дыхания', desc: 'Заметные паузы в дыхании и громкий храп, которые часто первыми замечают близкие.' },
              { icon: HeartPulse, title: 'Ночная гипоксия', desc: 'Снижение уровня кислорода в крови из-за остановок дыхания.' },
              { icon: Bed, title: 'Дневная сонливость', desc: 'Ощущение разбитости утром и сильное желание спать в течение дня.' },
              { icon: Activity, title: 'Повышенное давление', desc: 'Сложно поддающаяся коррекции артериальная гипертензия.' },
              { icon: ShieldCheck, title: 'Риски для сердца', desc: 'Повышенная нагрузка на сердечно-сосудистую систему.' },
              { icon: Beaker, title: 'Снижение качества сна', desc: 'Фрагментированный сон без нормального прохождения глубоких фаз.' }
            ].map((card, i) => (
              <Card key={i} className="flex flex-col gap-4 !p-6 border border-gray-100 bg-white/60 backdrop-blur-md shadow-sm rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#0A84FF] mb-2">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[#0B1F33] tracking-tight">{card.title}</h3>
                <p className="text-[#5B6B7A] text-sm leading-relaxed">{card.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Main Solution */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[32px] sm:text-[40px] font-bold tracking-tight text-[#0B1F33] mb-6 leading-tight">
                Компьютерная сомнография — удобный способ получить данные о сне
              </h2>
              <p className="text-[#5B6B7A] text-lg mb-8 leading-relaxed">
                Метод основан на инновационной технологии PAT (Peripheral Arterial Tone). Прибор фиксирует изменения тонуса артерий и с помощью сложного алгоритма оценивает дыхательные события и структуру сна, пока пациент спит в комфортной домашней обстановке.
              </p>
              
              <div className="flex flex-col gap-6">
                {[
                  { step: '1', title: 'Врач направляет пациента', desc: 'Нет необходимости госпитализации в стационар.' },
                  { step: '2', title: 'Спиро Медикал выдает прибор', desc: 'Оформление договора и инструктаж.' },
                  { step: '3', title: 'Сон в домашних условиях', desc: 'Пациент спит с небольшим комфортным прибором WatchPAT.' },
                  { step: '4', title: 'Анализ и передача данных', desc: 'Автоматическое формирование отчета для врача.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0A84FF] font-bold shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B1F33] text-lg">{item.title}</h4>
                      <p className="text-[#5B6B7A]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] sm:aspect-video lg:aspect-[4/5] rounded-[40px] overflow-hidden bg-[#F7FAFC] border border-gray-100 flex items-center justify-center p-8 shadow-inner">
                {/* Visual placeholder for WatchPAT solution */}
                <div className="w-full max-w-sm flex flex-col gap-6 relative z-10">
                   <div className="bg-white/60 backdrop-blur-md p-6 rounded-[24px] shadow-sm flex flex-col gap-4 border border-white/50 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-50/50 rounded-bl-[40px] -z-10" />
                     <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0A84FF] mb-2">
                       <Stethoscope className="w-6 h-6" />
                     </div>
                     <h3 className="font-bold text-lg text-[#0B1F33]">PAT Technology</h3>
                     <p className="text-sm text-[#5B6B7A]">Неинвазивная оценка симпатической нервной системы и дыхательных инцидентов.</p>
                   </div>
                   <div className="bg-white/60 backdrop-blur-md p-6 rounded-[24px] shadow-sm flex flex-col gap-4 border border-white/50 ml-8 relative overflow-hidden">
                     <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-[#35C99F] mb-2">
                       <Activity className="w-6 h-6" />
                     </div>
                     <h3 className="font-bold text-lg text-[#0B1F33]">Home Study</h3>
                     <p className="text-sm text-[#5B6B7A]">Полный комфорт для пациента без искажения привычного сна.</p>
                   </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A84FF]/5 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Preview */}
      <section className="py-24 bg-[#0B1F33] relative overflow-hidden" id="services-preview">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#0A84FF]/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[32px] sm:text-[40px] font-bold tracking-tight mb-4 text-white leading-tight">Выбор диагностической услуги</h2>
            <p className="text-white/70 text-lg">Оптимальные решения для скрининга и точной диагностики нарушений сна с помощью израильского оборудования.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standard Service */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 lg:p-10 flex flex-col hover:bg-white/10 transition-colors shadow-2xl">
              <span className="text-[#20C7D9] font-bold text-xs mb-4 tracking-widest uppercase">Услуга аренды</span>
              <h3 className="text-2xl font-bold mb-2 text-white">Компьютерная сомнография</h3>
              <p className="text-white/60 mb-6">Аренда прибора WatchPAT на одну ночь</p>
              <div className="mb-8 flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">70 000 ₸</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8 flex-1">
                {['Программирование прибора менеджером', 'Договор аренды оборудования', 'Подробный инструктаж пациента', 'Считывание данных на следующий день', 'Передача результатов врачу'].map((ft, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#20C7D9] shrink-0 mt-0.5" />
                    <span className="text-white/80 font-medium">{ft}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-white text-[#0B1F33] hover:bg-gray-100 border-none rounded-full" size="lg">
                <Link to="/contacts">Выбрать диагностику</Link>
              </Button>
            </div>

            {/* Premium Service */}
            <div className="bg-gradient-to-b from-[#0A84FF] to-[#073B6B] border border-[#20C7D9]/30 rounded-[32px] p-8 lg:p-10 flex flex-col relative shadow-2xl shadow-blue-500/20 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -z-0" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#20C7D9]/20 text-[#20C7D9] text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 border border-[#20C7D9]/30 w-fit">
                   Рекомендуется для регионов
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Компьютерная сомнография Premium</h3>
                <p className="text-white/80 mb-6">Device WatchPAT ONE + Мобильное приложение</p>
                <div className="mb-8 flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white">100 000 ₸</span>
                </div>
                <ul className="flex flex-col gap-4 mb-8 flex-1">
                  {['Доступно в любом регионе Казахстана', 'Инновационное одноразовое устройство', 'Помощь с настройкой приложения', 'Подробный инструктаж онлайн/офлайн', 'Автоматическое получение данных врачом'].map((ft, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-white/90 font-medium">{ft}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-[#20C7D9] text-[#0B1F33] hover:bg-white border-none shadow-xl rounded-full" size="lg">
                  <Link to="/contacts">Выбрать Premium</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. For Doctors and Clinics CTA */}
      <section className="py-24 bg-[#F7FAFC]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-[40px] p-8 md:p-16 border border-gray-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-50 rounded-full blur-[100px] -z-10" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-[32px] sm:text-[40px] font-bold tracking-tight text-[#0B1F33] mb-6 leading-tight">
                  Для врачей: больше данных о сне — точнее тактика лечения
                </h2>
                <p className="text-[#5B6B7A] text-lg mb-6 leading-relaxed">
                  Практикующие врачи часто сталкиваются с необходимостью проверить пациента на нарушения дыхания во сне. Мы помогаем организовать исследование так, чтобы врач мог своевременно получить данные и сфокусироваться на терапии, не тратя время на организацию сложных лабораторий.
                </p>
                <div className="flex flex-col gap-4 mb-10">
                  {['Автоматический отчет zzzPAT', 'Возможность независимого ручного анализа', 'Поддержка и обучение работе с ПО', 'Быстрый маршрут для пациента'].map((ft, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#0A84FF]" />
                      </div>
                      <span className="text-[#0B1F33] font-bold">{ft}</span>
                    </div>
                  ))}
                </div>
                <Button asChild size="lg" className="rounded-full shadow-xl">
                  <Link to="/clinics">Узнать условия для врачей</Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-6 relative">
                 {/* Decorative layout for doctors */}
                 <div className="bg-[#EEF7FB] rounded-[32px] p-8 border border-[#0A84FF]/10 flex flex-col items-center justify-center text-center gap-4 h-56 translate-y-6 shadow-sm">
                   <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-2">
                     <Activity className="w-8 h-8 text-[#0A84FF]" />
                   </div>
                   <span className="font-bold text-[#0B1F33]">Простота направления</span>
                 </div>
                 <div className="bg-[#0B1F33] rounded-[32px] p-8 flex flex-col items-center justify-center text-center gap-4 h-56 text-white -translate-y-6 shadow-2xl">
                   <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-2">
                     <ShieldCheck className="w-8 h-8 text-[#20C7D9]" />
                   </div>
                   <span className="font-bold text-white">Точные данные</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-24 bg-[#0B1F33] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A84FF]/20 to-[#20C7D9]/20 mix-blend-overlay" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <h2 className="text-[32px] sm:text-[48px] font-bold tracking-tight mb-6 leading-tight">
              Готовы сделать медицину сна доступнее?
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-10">
              Свяжитесь с нами, чтобы обсудить поставку оборудования, обучение специалистов или организацию сомнологического кабинета.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-[#0B1F33] hover:bg-gray-100 shadow-xl rounded-full" asChild>
                <Link to="/contacts">Связаться с нами</Link>
              </Button>
              <Button size="lg" className="bg-[#0A84FF] text-white hover:bg-[#0A84FF]/80 shadow-xl border-none rounded-full" asChild>
                <a href={`tel:${COMPANY_INFO.phones[0].replace(/[^0-9+]/g, '')}`}>Позвонить сейчас</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
