import { COMPANY_INFO } from '@/data/navigation';

export function Footer() {
  return (
    <footer className="w-full bg-[#0B1F33] py-4 px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center border-t border-gray-800">
      <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-[11px] text-gray-400 font-medium tracking-wide mb-4 sm:mb-0">
        <span>{COMPANY_INFO.address}</span>
        <span>{COMPANY_INFO.phones[0]}</span>
        <span>{COMPANY_INFO.email}</span>
      </div>
      <p className="text-[10px] text-gray-500 italic max-w-sm sm:text-right text-center">
        Информация на сайте носит ознакомительный характер и не заменяет консультацию врача.
      </p>
    </footer>
  );
}
