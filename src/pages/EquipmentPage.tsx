import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Wind, BriefcaseMedical, Wrench, Shield, CirclePlus, Waves, Bed, Sun, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EquipmentPage() {
  const categories = [
    { title: 'AutoCPAP-аппараты', icon: Wind },
    { title: 'CPAP-аппараты', icon: Wind },
    { title: 'BiLevel / TriLevel аппараты', icon: Wind },
    { title: 'Маски', icon: BriefcaseMedical },
    { title: 'Увлажнители', icon: Droplets },
    { title: 'Дыхательный тренажер', icon: CirclePlus },
    { title: 'Протрузионные устройства от храпа', icon: Bed },
    { title: 'Средства от храпа', icon: Waves },
    { title: 'Средства дезинфекции', icon: Shield },
    { title: 'Коррекция артериального давления', icon: HeartPulseIcon },
    { title: 'Кислородные концентраторы', icon: Wind },
    { title: 'Светотерапия', icon: Sun },
    { title: 'Комфорт и уход', icon: Bed },
    { title: 'Аксессуары', icon: CirclePlus },
  ];

  function HeartPulseIcon(props: any) {
     return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 9.2a2 2 0 0 0-.2.4v0c-.22.47-.4.96-.4 1.4A2.5 2.5 0 0 0 11 13h2a2.5 2.5 0 0 1 2.5 2.5c0 .44-.18.93-.4 1.4v0a2 2 0 0 0-.2.4L12 21"/></svg>;
  }

  return (
    <div className="flex flex-col text-[#0B1F33]">
      <section className="pt-24 pb-16 px-6 lg:px-12 bg-[#F7FAFC]">
        <div className="max-w-[1400px] mx-auto text-center">
          <h1 className="text-[40px] sm:text-[56px] font-bold tracking-tight text-[#0B1F33] mb-6 leading-tight">
            Оборудование для <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A84FF] to-[#073B6B]">диагностики и терапии</span> сна
          </h1>
          <p className="text-lg text-[#5B6B7A] leading-relaxed max-w-2xl mx-auto">
            Спиро Медикал предлагает решения для диагностики, терапии и комфорта пациентов с нарушениями дыхания во сне. Надежное оборудование от мировых производителей.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((cat, i) => (
                 <Card key={i} className="flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 group cursor-pointer border border-gray-100 hover:border-transparent hover:shadow-[0_20px_40px_-15px_rgba(10,132,255,0.15)] bg-white p-8">
                    <div className="w-16 h-16 rounded-2xl bg-[#EEF7FB] group-hover:bg-[#0A84FF] flex items-center justify-center text-[#0A84FF] group-hover:text-white mb-6 transition-colors duration-300 shadow-sm">
                       <cat.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-[#0B1F33] mb-4 group-hover:text-[#0A84FF] transition-colors">{cat.title}</h3>
                    <Button variant="ghost" size="sm" className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity bg-cyan-50 text-[#20C7D9] hover:bg-[#20C7D9] hover:text-white rounded-full px-6" asChild>
                       <Link to="/contacts">Подробнее</Link>
                    </Button>
                 </Card>
              ))}
           </div>
        </div>
      </section>

      {/* Service Center */}
      <section className="py-24 bg-[#0B1F33] text-white relative overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#20C7D9]/20 text-[#20C7D9] text-xs font-bold uppercase tracking-wider mb-8 border border-[#20C7D9]/30">
                     <Wrench className="w-4 h-4" /> Техническая поддержка
                  </div>
                  <h2 className="text-[32px] sm:text-[40px] font-bold mb-8 tracking-tight leading-tight">Собственный сервисный центр</h2>
                  <div className="text-white/80 space-y-6 text-lg leading-relaxed">
                     <p>
                        Мы не отправляем клиентов искать ближайший центр гарантийного обслуживания. Все вопросы решаются на месте в нашем собственном сервисном центре.
                     </p>
                     <p>
                        Клиенты получают информацию о сроках ремонтных работ напрямую, а опытный инженер сервисного центра выполняет необходимые работы качественно и в срок. Это гарантирует бесперебойную работу вашего медицинского оборудования и уверенность пациентов.
                     </p>
                  </div>
                  <div className="mt-10">
                     <Button asChild size="lg" className="bg-[#20C7D9] text-[#0B1F33] hover:bg-white border-none shadow-xl rounded-full px-8">
                       <Link to="/contacts">Связаться с сервисом</Link>
                     </Button>
                  </div>
               </div>
               
               <div className="bg-gradient-to-br from-[#0A84FF]/20 to-transparent border border-white/10 p-10 lg:p-12 rounded-[40px] backdrop-blur-md relative overflow-hidden flex flex-col gap-8 shadow-2xl">
                  <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#20C7D9]/30 rounded-full blur-[100px] pointer-events-none" />
                  
                  <div className="flex items-start gap-6 relative z-10">
                     <div className="bg-white/10 p-4 rounded-2xl shrink-0 border border-white/10 shadow-inner"><Shield className="w-8 h-8 text-[#20C7D9]" /></div>
                     <div className="pt-1">
                        <h4 className="font-bold text-xl mb-2 text-white">Гарантийное обслуживание</h4>
                        <p className="text-white/70 text-sm leading-relaxed">Официальная поддержка от производителя</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-6 relative z-10">
                     <div className="bg-white/10 p-4 rounded-2xl shrink-0 border border-white/10 shadow-inner"><Wrench className="w-8 h-8 text-[#20C7D9]" /></div>
                     <div className="pt-1">
                        <h4 className="font-bold text-xl mb-2 text-white">Быстрый ремонт</h4>
                        <p className="text-white/70 text-sm leading-relaxed">Минимальное время простоя оборудования</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-6 relative z-10">
                     <div className="bg-white/10 p-4 rounded-2xl shrink-0 border border-white/10 shadow-inner"><Wind className="w-8 h-8 text-[#20C7D9]" /></div>
                     <div className="pt-1">
                        <h4 className="font-bold text-xl mb-2 text-white">Запчасти в наличии</h4>
                        <p className="text-white/70 text-sm leading-relaxed">Собственный склад комплектующих в Казахстане</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}
