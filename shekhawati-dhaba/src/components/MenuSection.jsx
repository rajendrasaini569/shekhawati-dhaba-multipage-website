import { useMemo, useState } from "react";
import { ArrowRight, Leaf, Search, SlidersHorizontal } from "lucide-react";
import { menuCategories } from "../data/menu";

export default function MenuSection({ preview = false, fullPage = false }) {
  const allItems = useMemo(() => menuCategories.flatMap(category => category.items.map(item => ({...item, category: category.name}))), []);
  const [search,setSearch] = useState("");
  const [category,setCategory] = useState("All");
  const categories = ["All", ...menuCategories.map(c=>c.name)];
  const filtered = allItems.filter(item => (category==="All" || item.category===category) && `${item.name} ${item.description} ${item.tag} ${item.category}`.toLowerCase().includes(search.toLowerCase()));
  const visible = preview ? filtered.slice(0,4) : filtered;
  return <section id="menu" className="section-wrap">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl text-center"><p className="eyebrow">{fullPage ? "Something for every appetite" : "Straight from our kitchen"}</p><h1 className="section-title">{fullPage ? "Explore Our Menu" : "Favourites from Our Kitchen"}</h1><p className="mt-4 leading-7 text-[#766455]">{fullPage ? "Search your favourites and browse dishes by category. Menu items and prices should be confirmed by the restaurant before publishing." : "A little preview of the dishes you might love. Explore the complete menu to discover more."}</p></div>
      {!preview && <div className="mt-9 rounded-2xl border border-[#eadfce] bg-white p-4 sm:p-5"><div className="flex flex-col gap-4 md:flex-row"><label className=" block flex-1"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a8876]" size={19}/><input value={search} onChange={e=>setSearch(e.target.value)} className="field pl-11" placeholder="Search dishes, ingredients or category..." aria-label="Search menu"/></label><div className="flex items-center gap-2 text-sm font-semibold text-[#766455]"><SlidersHorizontal size={17}/> Filter</div></div><div className="mt-4 flex flex-wrap gap-2">{categories.map(name=><button key={name} onClick={()=>setCategory(name)} className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${category===name ? "border-[#39271c] bg-[#39271c] text-white" : "border-[#e3d4bd] bg-[#fffaf2] text-[#554438] hover:border-[#a87929]"}`}>{name}</button>)}</div></div>}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{visible.map(item=><article key={item.name} className="group overflow-hidden rounded-2xl border border-[#eadfce] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"><div className="relative overflow-hidden"><img src={item.image} alt={item.name} loading="lazy" className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"/><span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#fffaf2]/95 px-3 py-1 text-xs font-semibold text-[#493425]"><Leaf size={13}/> Vegetarian</span></div><div className="p-5"><p className="text-xs font-semibold uppercase tracking-wide text-[#a87929]">{item.tag}</p><h2 className="mt-2 font-serif text-xl font-bold text-[#35251b]">{item.name}</h2><p className="mt-2 min-h-12 text-sm leading-6 text-[#766455]">{item.description}</p><div className="mt-4 flex items-center justify-between border-t border-[#f0e6d8] pt-4"><span className="font-semibold text-[#493425]">{item.price == null ? "Price to confirm" : `₹${item.price}`}</span><a href="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-[#9a7130] hover:text-[#35251b]">Enquire <ArrowRight size={15}/></a></div></div></article>)}</div>
      {visible.length===0 && <div className="mt-8 rounded-2xl bg-white p-10 text-center"><h2 className="font-serif text-2xl font-bold">No dishes found</h2><p className="mt-2 text-[#766455]">Try another search or choose a different category.</p><button onClick={()=>{setSearch("");setCategory("All")}} className="btn-primary mt-5">Clear filters</button></div>}
      {preview && <div className="mt-9 text-center"><a href="/menu" className="btn-primary">View Full Menu <ArrowRight size={17}/></a></div>}
      {fullPage && <p className="mt-8 text-center text-xs text-[#8a7968]">Menu items, availability and prices are illustrative until verified by the restaurant.</p>}
    </div>
  </section>;
}
