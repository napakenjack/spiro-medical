import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return (
    <div className="flex flex-col text-[#0B1F33]">
      <section className="pt-24 pb-16 px-6 lg:px-12 bg-[#F7FAFC]">
        <div className="max-w-[1400px] mx-auto text-center">
          <h1 className="text-[40px] sm:text-[56px] font-bold tracking-tight text-[#0B1F33] mb-6 leading-tight">
            Услуги и цены
          </h1>
          <p className="text-lg text-[#5B6B7A] leading-relaxed max-w-2xl mx-auto">
            Мы предлагаем аренду диагностического оборудования для проведения исследования в комфортных домашних условиях.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-16">
            
            {/* Standard Service */}
            <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-[40px] p-8 lg:p-16 border border-gray-100 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50/50 rounded-bl-full -z-10" />
               <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="inline-flex px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-[11px] font-bold uppercase tracking-wider text-[#20C7D9] w-fit">Услуга</span>
                    <span className="text-[#5B6B7A] text-sm font-bold tracking-wide uppercase">Itamar Medical / Израиль</span>
                  </div>
                  <h2 className="text-[32px] sm:text-[40px] font-bold mb-6 tracking-tight leading-tight">Компьютерная сомнография — <span className="text-[#5B6B7A]">аренда прибора</span></h2>
                  <p className="text-[#5B6B7A] text-lg mb-10 leading-relaxed">
                    Компьютерная сомнография — методика на основе технологии PAT. Вы забираете прибор WatchPAT в аренду на одну ночь, спите дома, а на следующий день мы считываем данные.
                  </p>
                  <p className="text-[48px] font-bold mb-10 text-[#0B1F33] tracking-tight leading-none">70 000 ₸</p>
                  <Button size="lg" className="w-fit rounded-full shadow-xl" asChild>
                    <Link to="/contacts">Записаться на диагностику</Link>
                  </Button>
               </div>
               
               <div className="bg-[#EEF7FB] rounded-[32px] p-8 lg:p-10 border border-[#0A84FF]/10 shadow-inner">
                 <h3 className="font-bold text-[24px] mb-8 text-[#0B1F33]">Как проходит исследование:</h3>
                 <div className="flex flex-col gap-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] mb-2 before:bg-[#0A84FF]/20">
                   {[
                     'Менеджер программирует WatchPAT',
                     'Оформляется договор аренды',
                     'Проводится очный инструктаж',
                     'На следующий день вы возвращаете прибор для считывания данных',
                     'Отчет записывается на носитель или отправляется врачу'
                   ].map((step, i) => (
                     <div key={i} className="flex relative items-start gap-4">
                       <span className="w-6 h-6 rounded-full bg-[#0A84FF] flex items-center justify-center text-white text-xs font-bold z-10 shrink-0 shadow-md ring-4 ring-[#EEF7FB]">{i + 1}</span>
                       <span className="font-bold text-[#0B1F33] text-sm sm:text-base leading-relaxed">{step}</span>
                     </div>
                   ))}
                 </div>
               </div>
            </div>

            {/* Premium Service */}
            <div className="grid lg:grid-cols-2 gap-12 bg-gradient-to-br from-[#0A84FF] to-[#073B6B] rounded-[40px] p-8 lg:p-16 text-white shadow-[#0A84FF]/20 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#20C7D9]/20 blur-[100px] rounded-full -z-0" />
               <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full -z-0" />
               
               <div className="flex flex-col relative z-10">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="inline-flex px-4 py-1.5 rounded-full bg-[#20C7D9]/20 border border-[#20C7D9]/30 text-[11px] font-bold uppercase tracking-wider text-[#20C7D9] w-fit">Premium</span>
                    <span className="text-white/60 text-sm font-bold tracking-wide uppercase">Itamar Medical / Израиль</span>
                  </div>
                  <h2 className="text-[32px] sm:text-[40px] font-bold mb-6 tracking-tight leading-tight">Компьютерная сомнография Premium</h2>
                  <p className="text-white/80 text-lg mb-10 leading-relaxed">
                    Premium-формат проводится с использованием инновационного одноразового прибора WatchPAT ONE. Огромное преимущество технологии заключается в том, что услуга может быть организована в любом регионе Казахстана.
                  </p>
                  <p className="text-[48px] font-bold mb-10 tracking-tight leading-none">100 000 ₸</p>
                  <Button size="lg" className="w-fit bg-[#20C7D9] text-[#0B1F33] border-none hover:bg-white rounded-full shadow-xl" asChild>
                    <Link to="/contacts">Выбрать Premium</Link>
                  </Button>
               </div>
               
               <div className="bg-white/10 border border-white/20 rounded-[32px] p-8 lg:p-10 backdrop-blur-md shadow-2xl relative z-10">
                 <h3 className="font-bold text-[24px] mb-8 text-white">Особенности формата:</h3>
                 <div className="flex flex-col gap-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] mb-2 before:bg-white/20">
                   {[
                     'Услуга доступна в любом регионе Казахстана',
                     'Менеджер программирует WatchPAT ONE',
                     'Оформляется договор и согласовывается доставка',
                     'Помощь с установкой мобильного приложения',
                     'Специалист проводит инструктаж онлайн',
                     'На следующий день данные автоматически считываются в приложении'
                   ].map((step, i) => (
                     <div key={i} className="flex relative items-start gap-4">
                       <span className="w-6 h-6 rounded-full bg-[#20C7D9] flex items-center justify-center text-[#0B1F33] text-xs font-bold z-10 shrink-0 mt-0.5 shadow-md ring-4 ring-transparent">{i + 1}</span>
                       <span className="font-medium text-white/90 text-sm sm:text-base leading-relaxed">{step}</span>
                     </div>
                   ))}
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Disclamer block */}
      <section className="py-16 bg-[#F7FAFC]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
           <Card className="flex gap-6 items-start bg-white border-gray-100 p-8">
             <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 shrink-0">
               <ShieldCheck className="w-6 h-6" />
             </div>
             <p className="text-[15px] text-[#5B6B7A] leading-relaxed font-medium pt-1">
               Передача оборудования в аренду не является медицинской услугой либо деятельностью и не подлежит лицензированию, так как не входит в перечень лицензирования деятельности в области здравоохранения, для осуществления которой требуется наличие лицензии в соответствии с Законом РК «О разрешениях и уведомлениях» от 16 мая 2014 года.
             </p>
           </Card>
        </div>
      </section>
    </div>
  );
}
