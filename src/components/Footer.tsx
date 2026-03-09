
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-migusto-tierra-oscuro border-t border-white/5 mt-6 md:mt-20 py-10 relative">
      <div className="w-full px-8">
        <div className="flex flex-col md:flex-row items-center justify-center relative min-h-[60px]">

          {/* Esquina Inferior Izquierda: Logo + Texto + Instagram (Mobile) */}
          <div className="md:absolute md:left-0 md:bottom-0 flex items-center gap-4 group mb-8 md:mb-0 w-full md:w-auto justify-center md:justify-start">
            <img
              src={`${import.meta.env.BASE_URL}Logo Mi Gusto 2025.png`}
              alt="Mi Gusto"
              className="h-8 md:h-10 w-auto object-contain brightness-200 contrast-125 grayscale opacity-40 group-hover:opacity-100 transition-opacity"
            />
            <div className="flex flex-col">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.1em] text-migusto-crema/40 font-black">
                Golden Tickets Mi Gusto Lovers · 2026
              </p>
              <p className="text-[8px] text-migusto-crema/20 uppercase tracking-[0.2em]">
                La calidad no se negocia
              </p>
            </div>

            {/* Instagram Mobile Inline Icon */}
            <div className="md:hidden flex items-center ml-2 border-l border-white/10 pl-4">
              <a
                href="https://www.instagram.com/migustoar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
              >
                <div className="p-2 rounded-full bg-white/5 border border-white/10">
                  <Instagram className="h-5 w-5" />
                </div>
              </a>
            </div>
          </div>

          {/* Centrado en el medio de la pantalla */}
          <div className="text-center mb-0 md:mb-0">
            <p className="text-white/40 text-[10px] md:text-xs font-medium tracking-tight">
              © Desarrollado por el <span className="text-white/60 font-bold border-b border-white/20 pb-0.5">Departamento de Sistemas</span> de Mi Gusto | Todos los derechos reservados.
            </p>
          </div>

          {/* Esquina Inferior Derecha: Social Media (Desktop) */}
          <div className="hidden md:flex md:items-center md:absolute md:right-0 md:bottom-0 gap-3">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/migustoar/"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-colors"
            >
              <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#E1306C] group-hover:border-transparent transition-all shadow-lg">
                <Instagram className="h-5 w-5 text-white/70 group-hover:text-white" />
              </div>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/migustoar?lang=es"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-colors"
            >
              <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-white group-hover:border-transparent transition-all shadow-lg">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white/70 group-hover:fill-black">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@migustoar?lang=es"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-colors"
            >
              <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#000000] group-hover:border-transparent transition-all shadow-lg">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white/70 group-hover:fill-white">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.01 1.62 4.14.7.8 1.58 1.48 2.59 1.84V9.3c-1.32-.14-2.6-.61-3.66-1.42-.31-.24-.61-.51-.88-.8-.04 2.94.02 5.89-.02 8.83-.08 1.25-.45 2.5-1.14 3.56-1.57 2.45-4.52 3.6-7.3 2.76-2.5-1.15-4.31-3.63-4.14-6.38.35-3.32 3.44-5.6 6.74-5.06.33.06.67.14.99.24v3.85c-.96-.4-2.03-.43-3.04-.1-.45.14-.87.38-1.22.69-.97.91-1.11 2.48-.32 3.56.91 1.34 2.87 1.53 4.02.43.68-.62.97-1.56.97-2.47V.02z" />
                </svg>
              </div>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
