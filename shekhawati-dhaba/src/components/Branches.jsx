import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { branches } from "../data/branches";

export default function Branches() {
  return (
    <section id="locations" className="bg-[#f0e5d4] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a87929]">Visit us in Jaipur</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#35251b] sm:text-5xl">Find Your Nearest Branch</h2>
          <p className="mt-4 leading-7 text-[#766455]">Branch details are being verified. Please confirm addresses, phone numbers and timings before launch.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {branches.map((branch, index) => (
            <article key={branch.name} className="rounded-2xl border border-[#e1d1ba] bg-[#fffaf2] p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#39271c] text-[#e6bd69]"><MapPin size={21} /></div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#a87929]">Branch {index + 1}</p>
              <h3 className="mt-2 font-serif text-xl font-bold text-[#35251b]">{branch.name}</h3>
              <p className="mt-3 flex gap-2 text-sm leading-6 text-[#766455]"><MapPin className="mt-1 shrink-0" size={16} />{branch.address}</p>
              <p className="mt-3 flex gap-2 text-sm text-[#766455]"><Clock className="shrink-0" size={16} />{branch.hours}</p>
              {branch.phone && <p className="mt-3 flex gap-2 text-sm text-[#766455]"><Phone size={16} />{branch.phone}</p>}
              <div className="mt-5 flex flex-wrap gap-3">
                {branch.mapsUrl && <a href={branch.mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#39271c] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#76502b]"><Navigation size={15} /> Directions</a>}
                {branch.phone && <a href={`tel:${branch.phone}`} className="inline-flex items-center gap-2 rounded-full border border-[#d9c7ac] px-4 py-2.5 text-sm font-semibold text-[#493425]"><Phone size={15} /> Call</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}