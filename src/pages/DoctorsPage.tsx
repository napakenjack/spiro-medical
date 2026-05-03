import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Stethoscope, FileText, Activity, Clock, GraduationCap, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DoctorsPage() {
  return (
    <div className="flex flex-col text-[#0B1F33]">
      {/* Hero */}
      <section className="pt-24 pb-16 px-6 lg:px-12 bg-[#F7FAFC]">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#0A84FF] text-xs font-bold uppercase tracking-wider mb-8 border border-blue-100">
            <Stethoscope className="w-4 h-4" /> Партнерство с врачами
          </div>
          <h1 className="text-[40px] sm:text-[56px] font-bold tracking-tight text-[#0B1F33] mb-6 leading-tight">
            Больше данных о сне пациента — <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A84FF] to-[#073B6B]">точнее лечение</span>
          </h1>
          <p className="text-lg text-[#5B6B7A] leading-relaxed max-w-3xl mx-auto">
            Спиро Медикал помогает врачам получать данные о нарушениях дыхания во сне без сложной организации полноценной лаборатории сна в своей клинике. Отправляйте пациентов на комфортный домашний скрининг и получайте развернутые отчеты.
          </p>
        </div>
      </section>

      {/* Main Copy / Workflow */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-[32px] sm:text-[40px] font-bold mb-8 tracking-tight leading-tight">Почему это необходимо практикующему врачу?</h2>
              <div className="prose prose-lg text-[#5B6B7A] space-y-6">
                <p>
                  Синдром обструктивного апноэ сна (СОАС) часто остается незамеченным самим пациентом. Врачи кардиологи, эндокринологи, неврологи и ЛОР-специалисты регулярно сталкиваются с необходимостью оценки паттернов дыхания во время сна для выявления первопричин гипертензии или остановки потери веса.
                </p>
                <p>
                  Полисомнография по-прежнему считается «золотым стандартом», но требует специализированного отделения, дорогостоящего оборудования и обученного персонала. Далеко не каждая клиника имеет к этому доступ.
                </p>
                <p className="font-bold text-[#0B1F33] border-l-4 border-[#0A84FF] pl-6 py-2 bg-[#F7FAFC] rounded-r-2xl">
                  Практикующим специалистам нужен удобный диагностический маршрут. Мы предоставляем технологию WatchPAT для скрининга на дому: пациент арендует прибор, а вы получаете готовые данные.
                </p>
              </div>
            </div>

            <div className="bg-[#EEF7FB] rounded-[40px] p-8 lg:p-12 border border-[#0A84FF]/10 shadow-inner">
              <h3 className="text-[24px] sm:text-[32px] font-bold mb-10 text-[#0B1F33]">Удобный маршрут диагностики</h3>
              <div className="relative border-l-2 border-[#0A84FF]/20 ml-5 space-y-10">
                {[
                  { title: 'Консультация', desc: 'Врач принимает решение проверить дыхание во сне.' },
                  { title: 'Направление', desc: 'Пациент направляется в Спиро Медикал.' },
                  { title: 'Выдача', desc: 'Мы выдаем оборудование и проводим инструктаж.' },
                  { title: 'Диагностика', desc: 'Пациент спит дома с прибором WatchPAT.' },
                  { title: 'Анализ', desc: 'Данные считываются и формируется отчет.' },
                  { title: 'Тактика лечения', desc: 'Врач получает файл и корректирует лечение пациента.' },
                ].map((step, i) => (
                  <div key={i} className="relative pl-8">
                    <div className="absolute -left-[26px] top-0 w-12 h-12 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center font-bold text-[#0A84FF] ring-4 ring-[#EEF7FB] z-10">
                      {i + 1}
                    </div>
                    <h4 className="font-bold text-lg text-[#0B1F33]">{step.title}</h4>
                    <p className="text-[#5B6B7A] text-sm mt-1.5 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Doctor Receives */}
      <section className="py-24 bg-[#0B1F33] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A84FF]/10 to-[#20C7D9]/10 mix-blend-overlay" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-[32px] sm:text-[40px] font-bold mb-6 tracking-tight leading-tight">Что получает врач в результате исследования?</h2>
            <p className="text-white/70 text-lg">Полный комплект данных, необходимый для постановки диагноза и выбора метода CPAP-терапии или другого лечения.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: 'Автоматический отчет zzzPAT' },
              { icon: Activity, title: 'Индексы AHI, ODI, RDI, TST' },
              { icon: BookOpen, title: 'Возможность ручного анализа' },
              { icon: GraduationCap, title: 'Поддержка и обучение' }
            ].map((card, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 flex flex-col items-center text-center shadow-lg">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <card.icon className="w-8 h-8 text-[#20C7D9]" />
                </div>
                <h4 className="font-bold text-lg leading-tight">{card.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#F7FAFC]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-center mb-16 tracking-tight">Почему это удобно врачу?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Быстрый маршрут пациента без длинных очередей',
              'Экономия времени на организации исследования',
              'Сбор данных в естественных условиях для пациента',
              'Доступ к современному программному обеспечению',
              'Регулярное обучение специалистов',
              'Возможность расширить практику медицины сна'
            ].map((feature, i) => (
              <Card key={i} className="flex items-start gap-4 p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#20C7D9]" />
                </div>
                <p className="font-bold text-[#0B1F33] leading-relaxed pt-1.5">{feature}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full shadow-xl" asChild>
              <Link to="/contacts">Стать партнером</Link>
            </Button>
            <Button variant="secondary" size="lg" className="rounded-full !bg-white !text-[#0B1F33] border border-gray-200 shadow-sm hover:!bg-gray-50" asChild>
              <Link to="/contacts">Получить консультацию</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
