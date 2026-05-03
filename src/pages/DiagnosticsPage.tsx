import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Activity, Moon, HeartPulse, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DiagnosticsPage() {
  return (
    <div className="flex flex-col text-[#0B1F33]">
      {/* Hero */}
      <section className="pt-24 pb-16 px-6 lg:px-12 bg-[#F7FAFC]">
        <div className="max-w-[1400px] mx-auto text-center">
           <h1 className="text-[40px] sm:text-[56px] font-bold tracking-tight text-[#0B1F33] mb-6 leading-tight">
            Диагностика <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A84FF] to-[#20C7D9]">нарушений дыхания</span> во сне
          </h1>
          <p className="text-lg text-[#5B6B7A] leading-relaxed max-w-3xl mx-auto">
            Компьютерная сомнография и респираторный мониторинг помогают выявить признаки СОАС, ночной гипоксии и других нарушений дыхания во сне. Безопасно, комфортно и с высокой точностью.
          </p>
        </div>
      </section>

      {/* What is SOAS */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[32px] sm:text-[40px] font-bold mb-8 tracking-tight leading-tight">Что такое СОАС?</h2>
            <p className="text-[#5B6B7A] text-lg leading-relaxed mb-12">
              Синдром обструктивного апноэ сна (СОАС) — это состояние, при котором во время сна происходит частичная или полная остановка дыхания. Оно может проявляться громким храпом, падением уровня кислорода в крови, фрагментацией сна и сильной дневной усталостью. Выявить эту проблему помогают современные методы аппаратного скрининга.
            </p>
          </div>
        </div>
      </section>

      {/* PAT Technology Description */}
      <section className="py-24 bg-[#EEF7FB] relative overflow-hidden">
         <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0A84FF]/5 rounded-full blur-[100px] -z-0" />
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-[32px] sm:text-[40px] font-bold mb-8 tracking-tight leading-tight">Компьютерная сомнография (PAT)</h2>
                <p className="text-[#5B6B7A] text-lg leading-relaxed mb-6">
                  Компьютерная сомнография основана на технологии PAT (Peripheral Arterial Tone). Инновационный прибор с высокой точностью фиксирует изменения периферического артериального тонуса, пульсоксиметрию, частоту пульса, положение тела, а также интенсивность храпа.
                </p>
                <p className="text-[#5B6B7A] text-lg leading-relaxed mb-10">
                  Эти данные передаются встроенному алгоритму, который оценивает дыхательные инциденты и позволяет врачу сделать выводы о тяжести состояния.
                </p>
                <Button size="lg" asChild className="rounded-full shadow-xl">
                  <Link to="/services">Посмотреть цены на диагностику</Link>
                </Button>
             </div>
             <div className="relative aspect-video rounded-[40px] bg-white border border-[#0A84FF]/10 shadow-lg flex items-center justify-center overflow-hidden p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-transparent" />
                <div className="grid grid-cols-2 gap-6 w-full h-full relative z-10">
                   <div className="bg-[#F7FAFC] rounded-[24px] p-6 flex flex-col justify-end shadow-sm">
                     <span className="text-4xl text-[#0A84FF] mb-4"><Moon /></span>
                     <span className="text-sm font-bold tracking-wide uppercase text-[#5B6B7A]">Оценка фаз сна</span>
                   </div>
                   <div className="bg-[#0B1F33] text-white rounded-[24px] p-6 flex flex-col justify-end shadow-lg shadow-blue-900/20">
                     <span className="text-4xl text-[#20C7D9] mb-4"><Activity /></span>
                     <span className="text-sm font-bold tracking-wide uppercase text-white">Артериальный тонус</span>
                   </div>
                </div>
             </div>
           </div>
         </div>
      </section>

      {/* Registrated Metrics */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-center mb-16 tracking-tight">Регистрируемые параметры</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { m: 'AHI', desc: 'Индекс апноэ/гипопноэ' },
               { m: 'AHIc', desc: 'Индекс центральных апноэ/гипопноэ' },
               { m: 'ODI', desc: 'Индекс десатураций' },
               { m: 'RDI', desc: 'Индекс дыхательных расстройств' },
               { m: 'TST', desc: 'Истинное время сна' },
               { m: 'Sleep Stages', desc: 'REM / Deep / Light фазы сна' },
               { m: 'Body Position', desc: 'Положение тела' },
               { m: 'Snoring', desc: 'Интенсивность храпа' },
               { m: 'Chest Movement', desc: 'Движения грудной клетки' }
             ].map((param, i) => (
                <Card key={i} className="flex flex-col gap-3 p-8">
                  <span className="text-[28px] font-bold text-[#0A84FF] leading-none">{param.m}</span>
                  <span className="text-[#0B1F33] font-bold">{param.desc}</span>
                </Card>
             ))}
          </div>
        </div>
      </section>

      {/* Respiratory Monitoring */}
      <section className="py-24 bg-[#0B1F33] text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0A84FF]/20 rounded-full blur-[120px] pointer-events-none" />
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
               <div className="w-20 h-20 bg-white/10 rounded-[24px] flex items-center justify-center mx-auto mb-8 border border-white/10">
                  <ShieldCheck className="w-10 h-10 text-[#20C7D9]" />
               </div>
               <h2 className="text-[32px] sm:text-[40px] font-bold mb-8 tracking-tight">Респираторный мониторинг</h2>
               <p className="text-white/80 text-lg leading-relaxed mb-6">
                 Респираторный мониторинг — метод скринингового обследования пациентов с высоким риском ночной гипоксии, синдрома обструктивного или центрального апноэ. 
               </p>
                <p className="text-white/80 text-lg leading-relaxed">
                 Метод широко востребован в ЛОР, кардиологической, пульмонологической, эндокринологической и неврологической практике, когда необходима быстрая и надежная аппаратная оценка характера нарушений дыхания во сне.
               </p>
            </div>
         </div>
      </section>

      {/* Who needs it */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-center mb-16 tracking-tight">Кому может быть показана диагностика?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Пациентам с сильным храпом',
              'При подозрении на остановки дыхания (апноэ)',
              'Пациентам с выявленной ночной гипоксией',
              'При необъяснимой дневной сонливости',
              'Пациентам с артериальной гипертензией',
              'Пациентам после профильного направления врача'
            ].map((p, i) => (
               <div key={i} className="flex items-center gap-4 bg-[#F7FAFC] p-6 rounded-[24px] border border-gray-100 shadow-sm">
                 <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0A84FF] shrink-0">
                    <HeartPulse className="w-6 h-6" />
                 </div>
                 <span className="font-bold text-[#0B1F33]">{p}</span>
               </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Button size="lg" asChild className="rounded-full shadow-xl">
                <Link to="/contacts">Получить консультацию</Link>
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
