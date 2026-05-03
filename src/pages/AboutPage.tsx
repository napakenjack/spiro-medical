import { Card } from '@/components/ui/Card';
import { Target, Shield, HeartHandshake, History, Globe2, Wrench } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col text-[#0B1F33]">
      <section className="pt-24 pb-16 px-6 lg:px-12 bg-[#F7FAFC]">
        <div className="max-w-[1400px] mx-auto text-center">
          <h1 className="text-[40px] sm:text-[56px] font-bold tracking-tight text-[#0B1F33] mb-6 leading-tight">
            О компании
          </h1>
          <p className="text-lg text-[#5B6B7A] leading-relaxed max-w-2xl mx-auto">
            Компания «Спиро Медикал» оказывает содействие в организации и внедрении сомнологической помощи в медицинских клиниках.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-gray-100">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">
               <div className="relative">
                  <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-[#EEF7FB] rounded-[40px] p-8 flex flex-col justify-between border border-[#0A84FF]/10 shadow-inner overflow-hidden">
                     <span className="inline-flex px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[11px] font-bold uppercase tracking-wider text-blue-600 w-fit">Фокус на медицине сна</span>
                     
                     <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100/50 rounded-full blur-[80px] -z-0" />
                     <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/50 rounded-full blur-[80px] -z-0" />

                     <div className="bg-white/60 backdrop-blur-md p-6 rounded-[24px] shadow-sm border border-white/50 relative z-10 w-4/5 ml-auto">
                        <Globe2 className="w-10 h-10 text-[#0A84FF] mb-4" />
                        <h3 className="font-bold text-lg mb-2 text-[#0B1F33]">Эксклюзивный представитель</h3>
                        <p className="text-sm text-[#5B6B7A]">Официальный представитель Itamar Medical (Израиль) в Казахстане.</p>
                     </div>
                  </div>
               </div>
               
               <div>
                  <h2 className="text-[32px] sm:text-[40px] font-bold mb-6 tracking-tight text-[#0B1F33] leading-tight">Мы предлагаем современные тренды</h2>
                  <div className="prose prose-lg text-[#5B6B7A] mb-10 text-lg leading-relaxed">
                     <p>
                        Мы предлагаем врачам современные тренды медицины сна и передовые методы диагностики нарушений дыхания во сне: компьютерную сомнографию и респираторный мониторинг.
                     </p>
                     <p>
                        Наша задача – не просто поставить оборудование, но и обеспечить профессиональное обучение, интеграцию процессов в работу клиник и торговых компаний, а также оказывать локальную квалифицированную техническую поддержку на протяжении всего срока эксплуатации устройств.
                     </p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-[#20C7D9] shrink-0">
                           <Wrench className="w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="font-bold text-[#0B1F33]">Собственный сервис</h4>
                           <p className="text-sm text-[#5B6B7A] mt-1">Ремонт и обслуживание в Алматы</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0A84FF] shrink-0">
                           <History className="w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="font-bold text-[#0B1F33]">Многолетний опыт</h4>
                           <p className="text-sm text-[#5B6B7A] mt-1">Глубокая экспертиза в отрасли</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0B1F33] text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0A84FF]/20 rounded-full blur-[120px] pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#20C7D9]/20 rounded-full blur-[100px] pointer-events-none" />
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
            <h2 className="text-[32px] sm:text-[40px] font-bold text-center mb-16 tracking-tight">Наши принципы</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { title: 'Инновации', desc: 'Внедряем передовые диагностические технологии, такие как PAT.', icon: Target },
                 { title: 'Доступность', desc: 'Стремимся сделать диагностику сна удобной для каждого пациента.', icon: Globe2 },
                 { title: 'Поддержка врачей', desc: 'Помогаем врачам расширять инструментарий без избыточных затрат.', icon: HeartHandshake },
                 { title: 'Ответственность', desc: 'Гарантируем прозрачность в поставках и техническом обслуживании.', icon: Shield },
                 { title: 'Надежность', desc: 'Собственный сервисный центр для оперативного решения любых задач.', icon: Wrench },
                 { title: 'Обучение', desc: 'Регулярно повышаем квалификацию специалистов.', icon: History }
               ].map((v, i) => (
                 <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-colors">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                       <v.icon className="w-7 h-7 text-[#20C7D9]" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-white">{v.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{v.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
