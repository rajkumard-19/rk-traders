// src/app/page.js
"use client";
import React from "react"; // Explicitly import React
import { garlicVarieties, contactInfo, lastUpdated } from "./garlicData";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaStar, FaGlobeAmericas, FaShippingFast, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-slate-50 selection:bg-gold-500 selection:text-white">
      {/* Navbar */}
      <nav className="glass-nav py-4 px-6 md:px-12 flex justify-between items-center text-white shadow-2xl">
        <div className="flex items-center gap-3">
          {/* Logo would go here, using text for now */}
          <div className="relative">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              RK TRADERS
            </h1>
            <span className="absolute -bottom-2 right-0 text-[10px] text-gray-300 tracking-widest uppercase">Export Quality</span>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide text-gray-300">
          <a href="#products" className="hover:text-yellow-400 transition-colors">PRODUCTS</a>
          <a href="#about" className="hover:text-yellow-400 transition-colors">WHY US</a>
          <a href="#contact" className="hover:text-yellow-400 transition-colors">CONTACT</a>
        </div>

        <a
          href={`https://wa.me/${contactInfo.whatsapp}`}
          target="_blank"
          className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg hover:shadow-green-500/30 transition-all transform hover:-translate-y-0.5"
        >
          <FaWhatsapp size={20} />
          <span className="hidden md:inline">Connect Now</span>
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Premium Garlic Farm"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-slate-50"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-[-50px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 border border-yellow-500/50 rounded-full text-yellow-500 text-xs md:text-sm font-bold tracking-widest mb-4 bg-black/30 backdrop-blur-sm">
              PREMIUM WHOLESALE & EXPORT
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
              World's Finest <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500">Indian Garlic</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Direct from the misty hills of Kodaikanal and Ooty to the global market.
              Experience the authentic aroma and medicinal power.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="#products" className="btn-primary w-full md:w-auto justify-center text-lg">
                View Today's Rates
              </a>
              <a href="#contact" className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 text-white font-semibold transition-all w-full md:w-auto">
                Request Sample
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ticker */}
      <div className="bg-yellow-500 text-green-950 py-2 overflow-hidden flex items-center relative z-20 shadow-lg">
        <div className="whitespace-nowrap animate-marquee flex gap-10 font-bold text-sm tracking-wider w-full justify-center">
          <span>⚡ WHOLESALE RATES UPDATED: {lastUpdated}</span>
          <span className="opacity-50">•</span>
          <span>AVAILABLE FOR EXPORT & PAN-INDIA DELIVERY</span>
          <span className="opacity-50">•</span>
          <span>BULK ORDERS ONLY</span>
        </div>
      </div>

      {/* Product Catalog */}
      <section id="products" className="py-24 px-4 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-green-800 text-sm font-bold tracking-widest uppercase mb-2">Our Collection</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">Premium Garlic Varieties</h3>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 gap-16 md:gap-24">
          {garlicVarieties.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-yellow-500 rounded-3xl transform rotate-3 group-hover:rotate-1 transition-all duration-500 opacity-20"></div>
                <div className="relative h-[400px] w-full bg-white p-2 rounded-3xl shadow-2xl overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    fill
                    className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 md:pl-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {item.origin}
                  </span>
                  {item.id.includes('kodaikanal') && (
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                      <FaStar size={10} /> Premium
                    </span>
                  )}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{item.name}</h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {item.description}
                </p>

                {/* Grade Table */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm mb-8">
                  <div className="grid grid-cols-4 bg-slate-100 p-3 text-xs font-bold text-slate-500 uppercase tracking-widest text-center">
                    <div className="text-left pl-2">Grade</div>
                    <div>Size</div>
                    <div>Price</div>
                    <div>Status</div>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {item.grades.map((g) => (
                      <div key={g.name} className="grid grid-cols-4 p-4 text-sm items-center hover:bg-slate-50 transition-colors text-center">
                        <div className="font-bold text-slate-800 text-left pl-2">{g.name}</div>
                        <div className="text-slate-500">{g.size}</div>
                        <div className="font-bold text-green-700 text-lg">{g.price}</div>
                        <div>
                          <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${g.status === 'Available' ? 'bg-green-100 text-green-700' :
                            g.status === 'Limited' ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'
                            }`}>
                            {g.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/${contactInfo.whatsapp}?text=I am interested in ${item.name}`}
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl hover:shadow-2xl"
                >
                  <FaWhatsapp className="text-green-400" size={24} />
                  Book Order for {item.name}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="bg-slate-900 text-white py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-green-400 font-bold tracking-widest uppercase mb-4">Why RK Traders?</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Excellence in Every Bulb</h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                As a registered exporter, we understand the nuances of international quality standards.
                Our garlic is sourced directly from trusted farmers in the hills of South India
                and the plains of Madhya Pradesh.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: FaCheckCircle, title: "100% Organic", desc: "No harmful chemicals" },
                  { icon: FaGlobeAmericas, title: "Global Export", desc: "Serving 10+ countries" },
                  { icon: FaShippingFast, title: "Fast Logistics", desc: "Air & Sea cargo ready" },
                  { icon: FaStar, title: "Premium Grading", desc: "Strict quality control" }
                ].map((f, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="bg-white/10 p-3 rounded-lg text-yellow-400">
                      <f.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{f.title}</h4>
                      <p className="text-sm text-slate-400">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaGlobeAmericas className="text-blue-400" /> Export Destinations
              </h4>
              <div className="flex flex-wrap gap-3">
                {["UAE", "Singapore", "Malaysia", "Sri Lanka", "Maldives", "Qatar", "Kuwait", "Saudi Arabia"].map(c => (
                  <span key={c} className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors cursor-default border border-white/5">
                    {c}
                  </span>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl text-black">
                <p className="font-bold text-lg mb-2">Looking for a specific variety?</p>
                <p className="text-sm mb-4 opacity-90">We can source any Indian spice or garlic variety based on your requirement.</p>
                <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-bold w-full hover:opacity-80 transition">Enquire Custom Order</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="bg-green-900 text-white p-12 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-2">Get in Touch</h3>
              <p className="text-green-200 text-sm mb-10">Ready to start business? Reach out to us 24/7.</p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-2 rounded-full"><FaPhoneAlt /></div>
                  <div>
                    <p className="text-xs text-green-300 uppercase">Call Us</p>
                    <p className="font-bold">{contactInfo.phone[0]}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-2 rounded-full"><FaWhatsapp /></div>
                  <div>
                    <p className="text-xs text-green-300 uppercase">WhatsApp</p>
                    <p className="font-bold">{contactInfo.whatsapp}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-2 rounded-full"><FaEnvelope /></div>
                  <div>
                    <p className="text-xs text-green-300 uppercase">Email</p>
                    <p className="font-bold text-sm truncate">{contactInfo.email}</p>
                  </div>
                </div>
                <a href={contactInfo.mapLink} target="_blank" className="flex items-center gap-4 hover:opacity-80 transition">
                  <div className="bg-white/20 p-2 rounded-full"><FaMapMarkerAlt /></div>
                  <div>
                    <p className="text-xs text-green-300 uppercase">Location</p>
                    <p className="font-bold text-sm">{contactInfo.address}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-12 relative z-10">
              <div className="text-4xl font-black text-white/10 tracking-widest absolute bottom-0 left-0 -mb-4">contact</div>
            </div>
          </div>

          <div className="p-12 md:w-3/5">
            <h4 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="w-full p-4 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-yellow-400 transition" />
                <input type="text" placeholder="Phone" className="w-full p-4 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-yellow-400 transition" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full p-4 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-yellow-400 transition" />
              <textarea placeholder="Your Requirement (e.g. 500kg Ooty Garlic)" rows="4" className="w-full p-4 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-yellow-400 transition"></textarea>
              <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition shadow-lg">Send Inquiry</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">RK TRADERS</h2>
          <p className="mb-2 text-sm">Premium Garlic Exporters • India</p>
          <a href={contactInfo.mapLink} target="_blank" className="text-yellow-500 hover:text-yellow-400 text-sm transition mb-8 inline-block">
            📍 {contactInfo.address}
          </a>

          <div className="flex justify-center gap-6 mb-8">
            {contactInfo.phone.map(phone => (
              <a key={phone} href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-yellow-400 transition text-sm">{phone}</a>
            ))}
          </div>

          <div className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} RK Traders. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}