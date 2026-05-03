import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Building2, Stethoscope, Briefcase, GraduationCap, ShieldCheck, ArrowRight, Settings, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ClinicsPage() {
  return (
    <div className="flex flex-col text-[#0B1F33]">
      <section className="pt-24 pb-16 px-6 lg:px-12 bg-[#F7FAFC]">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-[#20C7D9] text-xs font-bold uppercase tracking-wider mb-8 border border-cyan-100">
            <Building2 className="w-4 h-4" /> Для клиник
          </div>
          <h1 className="text-[40px] sm:text-[56px] font-bold tracking-tight text-[#0B1F33] mb-6 leading-tight">
            Внедрение <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A84FF] to-[#073B6B]">сомнологической помощи</span> в клинике
          </h1>
          <p className="text-lg text-[#5B6B7A] leading-relaxed max-w-3xl mx-auto">
            Мы предлагаем сотрудничество клиникам и торговым компаниям, помогаем организовать направление медицины сна: от поставок инновационного оборудования до обучения персонала и технического сопровождения.
          </p>
        </div>
      </section>

      {/* Model */}
      <section className="py-24 bg-white border-y border-gray-100">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { icon: Building2, title: 'Медицинским клиникам', desc: 'Организация лаборатории сна и скрининга.' },
                 { icon: Briefcase, title: 'Торговым компаниям', desc: 'Условия дистрибуции оборудования.' },
                 { icon: Stethoscope, title: 'Врачам и специалистам', desc: 'Обучение и консультационная поддержка.' },
                 { icon: ShieldCheck, title: 'Региональным партнерам', desc: 'Развитие сети диагностики по всему Казахстану.' }
               ].map((m, i) => (
                 <Card key={i} className="flex flex-col gap-4 text-center items-center p-8 bg-[#F7FAFC] hover:bg-white transition-colors cursor-pointer border border-gray-100 shadow-sm hover:shadow-xl">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#0A84FF] shadow-sm mb-4">
                       <m.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-bold text-[#0B1F33] text-lg">{m.title}</h3>
                    <p className="text-sm text-[#5B6B7A] font-medium leading-relaxed">{m.desc}</p>
                 </Card>
               ))}
            </div>
         </div>
      </section>

      {/* What we provide */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
           <h2 className="text-[32px] sm:text-[40px] font-bold text-center mb-16 tracking-tight">Что предоставляет Спиро Медикал</h2>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { icon: ShieldCheck, title: 'Поставка оборудования', desc: 'Прямые поставки от Itamar Medical (Израиль) и других мировых брендов.' },
                { icon: GraduationCap, title: 'Обучение врачей', desc: 'Организация тренингов, семинаров по работе с оборудованием и расшифровке данных.' },
                { icon: Settings, title: 'Настройка процессов', desc: 'Помощь в организации кабинетного и домашнего скрининга на базе вашей клиники.' },
                { icon: ArrowRight, title: 'Консультации', desc: 'Поддержка по вопросам эксплуатации и клинического применения технологий.' },
                { icon: Wrench, title: 'Сервисный центр', desc: 'Собственная гарантийная и постгарантийная техническая поддержка.' },
                { icon: Briefcase, title: 'Региональные партнеры', desc: 'Персональные условия для развития направления в новых регионах.' }
              ].map((item, i) => (
                 <div key={i} className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0A84FF] shrink-0 border border-blue-100">
                       <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                       <h4 className="font-bold text-[#0B1F33] mb-2">{item.title}</h4>
                       <p className="text-sm text-[#5B6B7A] leading-relaxed font-medium">{item.desc}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* Official representative */}
      <section className="py-24 bg-[#0B1F33] text-white overflow-hidden relative">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="bg-gradient-to-br from-[#0A84FF] to-[#073B6B] rounded-[40px] p-8 lg:p-16 text-white relative overflow-hidden flex flex-col md:flex-row gap-16 items-center shadow-[#0A84FF]/20 shadow-2xl border border-white/10">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[120px] rounded-full -z-0 pointer-events-none" />
               <div className="flex-1 relative z-10">
                  <h2 className="text-[32px] sm:text-[40px] font-bold mb-8 tracking-tight leading-tight">Сотрудничество с официальным представителем — защита от рисков</h2>
                  <p className="text-white/80 text-lg leading-relaxed mb-10">
                     Работа с дорогостоящим медицинским оборудованием требует кристально прозрачной технической поддержки, четкой гарантии и специалистов, которые знают каждый нюанс в эксплуатации. Как единственный официальный представитель ключевых брендов, мы гарантируем надежность процессов.
                  </p>
                  <Button size="lg" className="bg-[#20C7D9] text-[#0B1F33] hover:bg-white border-none shadow-xl rounded-full" asChild>
                     <Link to="/contacts">Обсудить сотрудничество</Link>
                  </Button>
               </div>
               <div className="w-full md:w-1/3 flex flex-col gap-6 relative z-10">
                  <div className="bg-white/10 p-6 rounded-[24px] flex items-center gap-5 border border-white/20 backdrop-blur-md shadow-lg">
                     <ShieldCheck className="w-10 h-10 text-[#20C7D9]" />
                     <span className="font-bold text-lg text-white">Официальная гарантия</span>
                  </div>
                  <div className="bg-white/10 p-6 rounded-[24px] flex items-center gap-5 border border-white/20 backdrop-blur-md shadow-lg">
                     <Building2 className="w-10 h-10 text-[#20C7D9]" />
                     <span className="font-bold text-lg text-white">Локальный сервис в РК</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}
