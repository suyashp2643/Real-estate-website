'use client';
import { COMPANY } from '@/lib/data';

const navLinks = ['Home', 'Projects', 'Services', 'About', 'Testimonials', 'Contact'];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(`#${id.toLowerCase()}`);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] border-t border-[rgba(212,168,32,0.1)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src="/logo.png"
              alt="Jaybhadra Builders"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-[13px] text-[#666] leading-relaxed max-w-xs mb-6">
              Sangamner's most trusted construction partner. Building premium residential & commercial spaces since 2010.
            </p>
            <div className="flex gap-3">

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[rgba(37,211,102,0.3)] flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/10 transition-all"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>

              {/* Phone */}
              <a
                href={`tel:${COMPANY.phone}`}
                className="w-9 h-9 rounded-full border border-[rgba(212,168,32,0.3)] flex items-center justify-center text-[#d4a820] hover:bg-[rgba(212,168,32,0.1)] transition-all text-sm"
              >
                📞
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#d4a820] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="text-[13px] text-[#666] hover:text-[#d4a820] transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#d4a820] font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-[13px] text-[#666]">

              {/* Sangamner Address */}
              <div className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <div>
                  <div className="text-[10px] text-[#d4a820] uppercase tracking-wide mb-0.5">Sangamner</div>
                  <span>{COMPANY.address}</span>
                </div>
              </div>

              {/* Nashik Address */}
              <div className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <div>
                  <div className="text-[10px] text-[#d4a820] uppercase tracking-wide mb-0.5">Nashik</div>
                  <span>{COMPANY.nashikAddress}</span>
                </div>
              </div>

              {/* Nashik Phone */}
              <div className="flex items-center gap-2">
                <span>📞</span>
                <div>
                  <div className="text-[10px] text-[#d4a820] uppercase tracking-wide mb-0.5">Nashik</div>
                  <a href={`tel:${COMPANY.nashikPhone}`} className="hover:text-[#d4a820] transition-colors">
                    {COMPANY.nashikPhone}
                  </a>
                </div>
              </div>

              {/* Main Phone */}
              <div className="flex items-center gap-2">
                <span>📞</span>
                <div>
                  <div className="text-[10px] text-[#d4a820] uppercase tracking-wide mb-0.5">Sangamner</div>
                  <a href={`tel:${COMPANY.phone}`} className="hover:text-[#d4a820] transition-colors">
                    {COMPANY.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <span>📧</span>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-[#d4a820] transition-colors">
                  {COMPANY.email}
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(212,168,32,0.1)] pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-[#444]">
            © 2024 Jaybhadra Builders. All rights reserved. | Sangamner & Nashik, Maharashtra, India
          </p>
          <div className="flex gap-4 text-[11px] text-[#444]">
            <span>RERA Compliant</span>
            <span className="text-[#333]">|</span>
            <span>ISO 9001:2015</span>
            <span className="text-[#333]">|</span>
            <span>Trusted Since 2010</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
