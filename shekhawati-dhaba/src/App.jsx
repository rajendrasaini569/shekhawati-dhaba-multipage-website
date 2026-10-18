import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import Branches from "./components/Branches";
import Contact from "./components/Contact";
import { ArrowRight, CalendarDays, CheckCircle2, Clock, MapPin, Phone, Sparkles, Star, UtensilsCrossed } from "lucide-react";

const path = window.location.pathname.replace(/\/+$/, "") || "/";
const page = path === "/" ? "home" : path.slice(1).split("/")[0];
const titles = { home: "Home", menu: "Our Menu", about: "Our Story", locations: "Locations", contact: "Contact", booking: "Book a Table" };

function PageIntro({ eyebrow, title, description }) {
  return <section className="page-intro"><div className="mx-auto max-w-4xl px-5 py-16 text-center sm:py-20"><p className="eyebrow">{eyebrow}</p><h1 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">{title}</h1><p className="mx-auto mt-5 max-w-2xl leading-7 text-[#e6d8c6]">{description}</p></div></section>;
}

function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our story · Our roots"
        title="A Little Rajasthan on Your Plate"
        description="Food tastes better when it brings people together. Discover the warmth, flavour and hospitality inspired by Rajasthan."
      />

      <section className="section-wrap">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <img
        src="/images/shekhawati-hero.png"
        alt="Shekhawati Dhaba — Traditional Rajasthani Dining"
        className="h-[360px] w-full rounded-3xl object-cover shadow-xl"
           />

          <div>
            <p className="eyebrow">The Shekhawati welcome</p>

            <h2 className="section-title">
              Good food. Warm hearts.
            </h2>

            <p className="mt-5 leading-8 text-[#766455]">
              Shekhawati Dhaba celebrates the familiar comfort of Indian
              vegetarian food, generous flavours and relaxed meals with
              family and friends. Our goal is to make every visit feel
              welcoming, whether it is a quick lunch or a long family dinner.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Vegetarian favourites",
                "Rajasthani-inspired taste",
                "Family-friendly dining",
                "Warm hospitality",
              ].map((x) => (
                <div
                  key={x}
                  className="rounded-xl border border-[#eadfce] bg-white p-4"
                >
                  <CheckCircle2 className="mb-2 text-[#a87929]" />
                  <span className="font-semibold">{x}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function BookingPage() {
 const [form,setForm]=useState({name:"",phone:"",date:"",time:"",guests:"2",notes:""});
 const [sent,setSent]=useState(false);
 const change=e=>setForm({...form,[e.target.name]:e.target.value});
 function submit(e){e.preventDefault();setSent(true)}
 return <><PageIntro eyebrow="Make it a special meal" title="Book Your Table" description="Planning a family meal or catching up with friends? Send your preferred details below. This demo form shows a confirmation on this device; connect it to the restaurant to receive real bookings."/><section className="section-wrap"><div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[.8fr_1.2fr]"><div className="rounded-3xl bg-[#302219] p-8 text-white"><CalendarDays size={32} className="text-[#e6bd69]"/><h2 className="mt-5 font-serif text-3xl font-bold">Your table is waiting</h2><p className="mt-4 leading-7 text-[#d6c6b4]">Share your preferred date and time. The restaurant should confirm availability before your visit.</p><div className="mt-8 space-y-4 text-sm text-[#f2e7d8]"><p className="flex gap-3"><Clock className="text-[#e6bd69]"/>Timings to be confirmed</p><p className="flex gap-3"><MapPin className="text-[#e6bd69]"/>Jaipur, Rajasthan</p><p className="flex gap-3"><UtensilsCrossed className="text-[#e6bd69]"/>Vegetarian dining</p></div></div><div className="rounded-3xl border border-[#eadfce] bg-white p-6 sm:p-8">{sent?<div className="py-12 text-center"><CheckCircle2 size={54} className="mx-auto text-green-700"/><h2 className="mt-4 font-serif text-2xl font-bold">Details captured!</h2><p className="mt-2 text-[#766455]">This is a demo confirmation only. No booking has been sent to the restaurant.</p><button onClick={()=>setSent(false)} className="btn-primary mt-6">Edit details</button></div>:<form onSubmit={submit} className="grid gap-4 sm:grid-cols-2"><label className="field-label">Your name<input required name="name" value={form.name} onChange={change} className="field" placeholder="Enter full name"/></label><label className="field-label">Phone number<input required name="phone" pattern="[0-9+\-\s]{8,15}" value={form.phone} onChange={change} className="field" placeholder="Your contact number"/></label><label className="field-label">Preferred date<input required type="date" min={new Date().toISOString().slice(0,10)} name="date" value={form.date} onChange={change} className="field"/></label><label className="field-label">Preferred time<input required type="time" name="time" value={form.time} onChange={change} className="field"/></label><label className="field-label">Number of guests<select name="guests" value={form.guests} onChange={change} className="field">{["1","2","3","4","5","6","7","8","9","10+"].map(n=><option key={n}>{n}</option>)}</select></label><label className="field-label sm:col-span-2">Special request (optional)<textarea name="notes" value={form.notes} onChange={change} className="field min-h-24" placeholder="Birthday, seating preference..."/></label><button className="btn-primary sm:col-span-2" type="submit">Request a Table <ArrowRight size={17}/></button></form>}</div></div></section></>;
}

function Footer() {
 return <footer className="bg-[#211811] px-5 py-10 text-white"><div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><a href="/" className="font-serif text-2xl font-bold">Shekhawati Dhaba</a><p className="mt-2 text-sm text-[#c8b8a6]">Vegetarian food · Jaipur, Rajasthan</p></div><div className="flex flex-wrap gap-5 text-sm text-[#e4d6c5]"><a className="hover:text-[#e6bd69]" href="/menu">Menu</a><a className="hover:text-[#e6bd69]" href="/locations">Locations</a><a className="hover:text-[#e6bd69]" href="/contact">Contact</a><a className="hover:text-[#e6bd69]" href="/booking">Book a Table</a></div><p className="text-xs text-[#bca995]">© {new Date().getFullYear()} Shekhawati Dhaba</p></div></footer>;
}

export default function App() {
 const [bookingFormSent] = useState(false);
 let content;
 if(page==="menu") content=<MenuSection fullPage/>;
 else if(page==="about") content=<AboutPage/>;
 else if(page==="locations") content=<><PageIntro eyebrow="Come visit us" title="Find Your Way to Us" description="Explore our listed location and check directions before you travel. Please confirm branch details with the restaurant."/><Branches/></>;
 else if(page==="contact") content=<><PageIntro eyebrow="We'd love to hear from you" title="Contact Shekhawati Dhaba" description="Questions about the menu, opening hours or a visit? Find our current contact information below."/><Contact/></>;
 else if(page==="booking") content=<BookingPage/>;
 else content=<><Hero/><section className="section-wrap"><div className="mx-auto max-w-6xl"><div className="mb-9 text-center"><p className="eyebrow">The Shekhawati welcome</p><h2 className="section-title">More than a meal — a feeling of home</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-[#766455]">Good food, comforting flavours and a place to gather with the people who matter.</p></div><div className="grid gap-4 sm:grid-cols-3">{[["Authentic flavours","Inspired by the warmth and richness of Indian cuisine."],["Made for sharing","A welcoming stop for family, friends and food lovers."],["A warm welcome","Relax, settle in and enjoy your time around the table."]].map(([a,b],i)=><article className="feature-card" key={a}><div className="feature-icon">{i===0?<UtensilsCrossed/>:i===1?<Star/>:<Sparkles/>}</div><h3 className="mt-4 font-serif text-xl font-bold">{a}</h3><p className="mt-2 text-sm leading-6 text-[#766455]">{b}</p></article>)}</div></div></section><MenuSection preview/><section className="bg-[#f0e5d4] px-5 py-16 sm:py-20"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-3xl bg-[#302219] p-8 text-center text-white sm:flex-row sm:p-12 sm:text-left"><div><p className="eyebrow">Planning your next outing?</p><h2 className="mt-2 font-serif text-3xl font-bold">Gather around something delicious.</h2><p className="mt-3 text-[#d6c6b4]">Explore the menu or request a table for your next visit.</p></div><a href="/booking" className="btn-gold shrink-0">Book a Table <ArrowRight size={17}/></a></div></section></>;
 return <><Navbar activePage={page}/><main key={page}>{content}</main><Footer/></>;
}
