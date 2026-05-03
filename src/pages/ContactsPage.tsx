import { Button } from '@/components/ui/Button';
import { COMPANY_INFO } from '@/data/navigation';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

export default function ContactsPage() {
  return (
    <div className="flex flex-col text-[#0B1F33]" id="contacts">
      <section className="pt-24 pb-16 px-6 lg:px-12 bg-[#F7FAFC]">
        <div className="max-w-[1400px] mx-auto text-center">
          <h1 className="text-[40px] sm:text-[56px] font-bold tracking-tight text-[#0B1F33] mb-6 leading-tight">
            Свяжитесь с нами
          </h1>
          <p className="text-lg text-[#5B6B7A] leading-relaxed max-w-2xl mx-auto">
            Мы всегда готовы проконсультировать пациентов, врачей и представителей клиник по вопросам диагностики сна и сотрудничества.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-gray-100">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16">
               
               {/* Contact Info */}
               <div>
                  <h2 className="text-[32px] sm:text-[40px] font-bold mb-10 tracking-tight leading-tight">Контактная информация</h2>
                  <div className="flex flex-col gap-8">
                     
                     <div className="flex gap-4">
                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0A84FF] shrink-0 shadow-sm">
                           <Phone className="w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="font-bold text-[#5B6B7A] mb-2 uppercase text-xs tracking-widest">Телефоны</h4>
                           <div className="flex flex-col gap-1">
                              {COMPANY_INFO.phones.map(p => (
                                 <a key={p} href={`tel:${p.replace(/[^0-9+]/g, '')}`} className="text-xl font-bold text-[#0B1F33] hover:text-[#0A84FF] transition-colors">{p}</a>
                              ))}
                           </div>
                        </div>
                     </div>

                     <div className="flex gap-4">
                        <div className="w-12 h-12 bg-[#25D366]/10 rounded-2xl flex items-center justify-center text-[#25D366] shrink-0 shadow-sm">
                           <MessageCircle className="w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="font-bold text-[#5B6B7A] mb-2 uppercase text-xs tracking-widest">WhatsApp</h4>
                           <a href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="text-xl font-bold text-[#0B1F33] hover:text-[#25D366] transition-colors">{COMPANY_INFO.whatsapp}</a>
                        </div>
                     </div>

                     <div className="flex gap-4">
                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0A84FF] shrink-0 shadow-sm">
                           <Mail className="w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="font-bold text-[#5B6B7A] mb-2 uppercase text-xs tracking-widest">Email</h4>
                           <a href={`mailto:${COMPANY_INFO.email}`} className="text-xl font-bold text-[#0B1F33] hover:text-[#0A84FF] transition-colors">{COMPANY_INFO.email}</a>
                        </div>
                     </div>

                     <div className="flex gap-4">
                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0A84FF] shrink-0 shadow-sm">
                           <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="font-bold text-[#5B6B7A] mb-2 uppercase text-xs tracking-widest">Адрес</h4>
                           <p className="text-xl font-bold text-[#0B1F33]">{COMPANY_INFO.address}</p>
                        </div>
                     </div>

                     <div className="flex gap-4">
                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0A84FF] shrink-0 shadow-sm">
                           <Clock className="w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="font-bold text-[#5B6B7A] mb-2 uppercase text-xs tracking-widest">Время работы</h4>
                           <p className="text-xl font-bold text-[#0B1F33]">Пн-Пт: 09:00 - 18:00</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Form */}
               <div className="bg-[#EEF7FB] p-8 md:p-12 rounded-[40px] border border-[#0A84FF]/10 shadow-inner">
                  <h3 className="text-[24px] sm:text-[32px] font-bold mb-8">Оставить заявку</h3>
                  <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert("Форма успешно отправлена! Мы свяжемся с вами в ближайшее время."); }}>
                     <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-[#5B6B7A] uppercase tracking-widest">Ваше имя</label>
                        <input type="text" required className="h-14 px-5 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:border-[#0A84FF] focus:ring-1 focus:ring-[#0A84FF] transition-all font-medium placeholder-gray-400 shadow-sm" placeholder="Спиридон Врачев" />
                     </div>
                     <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-[#5B6B7A] uppercase tracking-widest">Телефон</label>
                        <input type="tel" required className="h-14 px-5 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:border-[#0A84FF] focus:ring-1 focus:ring-[#0A84FF] transition-all font-medium placeholder-gray-400 shadow-sm" placeholder="+7 (___) ___-__-__" />
                     </div>
                     <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-[#5B6B7A] uppercase tracking-widest">Тип обращения</label>
                        <select className="h-14 px-5 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:border-[#0A84FF] focus:ring-1 focus:ring-[#0A84FF] transition-all cursor-pointer font-medium shadow-sm">
                           <option>Я пациент (запись на диагностику)</option>
                           <option>Я врач (вопросы сотрудничества)</option>
                           <option>Представитель клиники</option>
                           <option>Вопросы по оборудованию / сервис</option>
                        </select>
                     </div>
                     <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-[#5B6B7A] uppercase tracking-widest">Сообщение</label>
                        <textarea rows={4} className="p-5 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:border-[#0A84FF] focus:ring-1 focus:ring-[#0A84FF] transition-all resize-none font-medium placeholder-gray-400 shadow-sm" placeholder="Опишите, чем мы можем вам помочь..." />
                     </div>
                     <Button type="submit" size="lg" className="mt-4 w-full shadow-xl">Отправить заявку</Button>
                     <p className="text-xs text-[#5B6B7A] text-center mt-2">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p>
                  </form>
               </div>

            </div>
         </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] bg-[#F7FAFC] relative">
         <div className="absolute inset-0 flex items-center justify-center p-6 lg:p-12">
             <div className="w-full max-w-[1400px] h-full bg-white border border-gray-100 rounded-[40px] shadow-sm flex items-center justify-center relative overflow-hidden">
                 {/* Decorative map grid */}
                 <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#0A84FF 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.1 }} />
                 <div className="text-center z-10 flex flex-col items-center bg-white/80 backdrop-blur-md p-8 rounded-[32px] border border-white shadow-xl">
                    <MapPin className="w-12 h-12 text-[#0A84FF] mb-4 animate-bounce" />
                    <h3 className="text-[24px] font-bold mb-2">{COMPANY_INFO.address}</h3>
                    <p className="text-[#5B6B7A] font-medium tracking-wide text-sm">Интерактивная карта (Placeholder)</p>
                 </div>
             </div>
         </div>
      </section>
    </div>
  );
}
