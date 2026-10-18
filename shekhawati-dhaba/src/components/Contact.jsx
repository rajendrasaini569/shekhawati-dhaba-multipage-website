import { Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#fffaf2] px-5 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a87929]">We'd love to welcome you</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#35251b] sm:text-5xl">Planning a Visit?</h2>
          <p className="mt-5 max-w-xl leading-7 text-[#766455]">Call your preferred branch to ask about table availability, timings and directions. Phone numbers and hours will be added after the client verifies them.</p>
        </div>
        <div className="rounded-2xl bg-[#211811] p-7 text-white sm:p-9">
          <div className="flex gap-4 border-b border-white/10 pb-5">
            <Phone className="mt-1 text-[#e6bd69]" />
            <div><h3 className="font-semibold">Call for a Table</h3><p className="mt-1 text-sm text-[#c8b8a6]">Branch phone number to be confirmed</p></div>
          </div>
          <div className="flex gap-4 border-b border-white/10 py-5">
            <MapPin className="mt-1 text-[#e6bd69]" />
            <div><h3 className="font-semibold">Jaipur, Rajasthan</h3><p className="mt-1 text-sm leading-6 text-[#c8b8a6]">Airport Road, Siddharth Nagar, Jagatpura — supplied branch location</p></div>
          </div>
          <div className="flex gap-4 pt-5">
            <Clock className="mt-1 text-[#e6bd69]" />
            <div><h3 className="font-semibold">Opening Hours</h3><p className="mt-1 text-sm text-[#c8b8a6]">Please confirm with the restaurant</p></div>
          </div>
        </div>
      </div>
    </section>
  );
} 