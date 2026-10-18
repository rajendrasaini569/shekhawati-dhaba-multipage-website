import { ArrowRight, PhoneCall, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[680px] overflow-hidden bg-[#211811] text-white sm:min-h-[760px]"
    >
      {/* Full-width Rajasthani welcome image */}
      <img
        src="/images/shekhawati-hero.png"
        alt="Welcome to Shekhawati Dhaba, inspired by the warmth and heritage of Rajasthan"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        fetchPriority="high"
      />

      {/* Dark overlays keep the text readable */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#211811]/95 via-[#211811]/75 to-[#211811]/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#211811]/80 via-transparent to-black/20" />

      <div className="mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-20 sm:min-h-[760px] sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e6bd69]/50 bg-black/25 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#e6bd69]" />
            <span className="text-xs font-semibold tracking-[0.16em] text-[#f5d99d] sm:text-sm">
              PURE VEGETARIAN · JAIPUR
            </span>
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#f0ce83] sm:text-base">
            Padharo Sa · Khamma Ghani
          </p>

          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Welcome to
            <span className="mt-2 block text-[#f0ce83]">
              Shekhawati Dhaba
            </span>
          </h1>

          <p className="mt-6 max-w-2xl font-serif text-xl leading-relaxed text-[#fff0d7] sm:text-2xl">
            Authentic Rajasthani Flavours, Served with Heart.
          </p>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#f0e5d6] sm:text-base sm:leading-8">
            Experience the warmth of Rajasthan, comforting vegetarian food,
            rich traditional flavours and heartfelt hospitality. Har meal mein
            apnapan, har swaad mein Rajasthan.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e3b85f] px-7 py-4 font-semibold text-[#2b2017] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#f0ce83]"
            >
              Explore Our Menu
              <ArrowRight size={18} />
            </a>

            <a
              href="/booking"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-black/25 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              <PhoneCall size={18} />
              Book a Table
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/25 pt-6 text-sm text-[#f4e5d1]">
            <span>✦ Rajasthani-inspired hospitality</span>
            <span>✦ Vegetarian favourites</span>
            <span className="inline-flex items-center gap-1">
              <MapPin size={15} className="text-[#f0ce83]" />
              Jaipur, Rajasthan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}