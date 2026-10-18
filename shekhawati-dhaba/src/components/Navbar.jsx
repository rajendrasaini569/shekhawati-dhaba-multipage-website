import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Our Menu", href: "/menu" },
  { label: "Our Story", href: "/about" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar({ activePage = "home" }) {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-[#e8dcc9] bg-[#fffaf2]/95 backdrop-blur-md">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
      <a href="/" className="flex items-center gap-3" aria-label="Shekhawati Dhaba home">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b78a3b] bg-[#35251b] font-serif text-xl font-bold text-[#edc878]">S</div>
        <div><p className="font-serif text-lg font-bold leading-tight text-[#35251b] sm:text-xl">Shekhawati Dhaba</p><p className="mt-1 text-[9px] font-semibold tracking-[0.2em] text-[#9a7130] sm:text-[10px]">AUTHENTIC RAJASTHANI TASTE</p></div>
      </a>
      <div className="hidden items-center gap-5 lg:flex">{links.map(link => <a key={link.href} href={link.href} className={`nav-link ${activePage === (link.href === "/" ? "home" : link.href.slice(1)) ? "nav-link-active" : ""}`}>{link.label}</a>)}<a href="/booking" className="inline-flex items-center gap-2 rounded-full bg-[#39271c] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#76502b]"><Phone size={16}/> Book a Table</a></div>
      <button type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="rounded-lg border border-[#e3d4bd] p-2 text-[#35251b] lg:hidden">{open ? <X size={23}/> : <Menu size={23}/>}</button>
    </nav>
    {open && <div className="border-t border-[#e8dcc9] bg-[#fffaf2] px-5 py-4 lg:hidden"><div className="mx-auto flex max-w-7xl flex-col gap-1">{links.map(link=><a key={link.href} href={link.href} onClick={()=>setOpen(false)} className={`rounded-lg px-3 py-3 text-sm font-medium ${activePage === (link.href === "/" ? "home" : link.href.slice(1)) ? "bg-[#f1e6d5] text-[#9a7130]" : "text-[#554438] hover:bg-[#f1e6d5]"}`}>{link.label}</a>)}<a href="/booking" onClick={()=>setOpen(false)} className="mt-2 rounded-full bg-[#39271c] px-5 py-3 text-center text-sm font-semibold text-white">Book a Table</a></div></div>}
  </header>;
}
