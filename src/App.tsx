/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUpRight, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-surface border-b border-on-surface z-50 flex justify-between items-center px-8 md:px-margin-page py-6 h-20">
      <div className="text-xl md:text-2xl font-serif font-light tracking-[0.2em] text-primary uppercase">
        THE VOID
      </div>
      <div className="hidden md:flex items-center gap-12">
        <a href="#" className="font-label-caps text-primary border-b border-primary pb-1">STUDIO</a>
        <a href="#" className="font-label-caps text-on-surface-variant hover:text-primary transition-colors">CLASSES</a>
        <a href="#" className="font-label-caps text-on-surface-variant hover:text-primary transition-colors">TEACHERS</a>
        <a href="#" className="font-label-caps text-on-surface-variant hover:text-primary transition-colors">PRICING</a>
      </div>
      <button className="bg-primary text-surface px-8 py-2 font-label-caps hover:bg-neutral-800 transition-colors uppercase">
        BOOK
      </button>
      <button className="md:hidden">
        <Menu className="w-6 h-6" />
      </button>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white border-b border-on-surface">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="font-display-xl tracking-[0.1em] uppercase mb-12"
      >
        SOLSTICE
      </motion.h1>
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
        className="h-[1px] w-12 bg-primary mb-12"
      />
      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="border border-primary px-12 py-4 font-label-caps hover:bg-primary hover:text-white transition-all duration-500"
      >
        BOOK CLASS
      </motion.button>
    </section>
  );
};

const Philosophy = () => {
  return (
    <section className="py-section-gap px-6 md:px-margin-page bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto border-l border-primary pl-8 md:pl-16 py-12">
        <p className="font-label-caps text-on-primary-container mb-8 uppercase">Our Philosophy</p>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-headline-lg text-primary mb-12 italic leading-tight"
        >
          The Solstice Method is an architectural approach to the human form.
        </motion.h2>
        <div className="space-y-8 max-w-2xl">
          <p className="font-body-lg text-on-surface">
            We believe in the power of negative space. In our studio, we strip away the unnecessary noise of modern life to reveal the strength and discipline inherent in your practice.
          </p>
          <p className="font-body-md text-secondary">
            By utilizing extreme heat and structural alignment, we create a transformative environment that challenges both physical limits and mental boundaries. Each movement is a deliberate step toward absolute clarity.
          </p>
        </div>
      </div>
    </section>
  );
};

const Offerings = () => {
  const classes = [
    {
      id: "01",
      title: "Hot Vinyasa",
      description: "A rigorous 95-degree flow emphasizing dynamic alignment and breath control.",
      tags: ["Advanced", "95°F"]
    },
    {
      id: "02",
      title: "Bikram Flow",
      description: "The foundational 26 postures reimagined through a modern, structural lens.",
      tags: ["Open Level", "105°F"]
    },
    {
      id: "03",
      title: "Restorative",
      description: "Quiet, structural holds designed to repair and realign the physical body.",
      tags: ["Passive", "80°F"]
    }
  ];

  return (
    <section className="py-section-gap px-6 md:px-margin-page bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <h2 className="font-headline-md tracking-widest uppercase">OFFERINGS</h2>
        <p className="font-label-caps text-secondary uppercase max-w-xs text-left md:text-right">
          Meticulously curated sessions designed for the disciplined practitioner.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-primary">
        {classes.map((item) => (
          <div 
            key={item.id} 
            className="border-b md:border-b-0 md:border-r border-primary p-8 md:p-12 hover:bg-surface-container-low transition-colors duration-500 group"
          >
            <span className="font-label-caps text-on-primary-container mb-4 block">{item.id}</span>
            <h3 className="font-headline-md mb-6">{item.title}</h3>
            <p className="font-body-md text-secondary mb-12">{item.description}</p>
            <div className="flex gap-2">
              {item.tags.map(tag => (
                <span key={tag} className="border border-surface-dim px-3 py-1 font-label-sm uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Space = () => {
  return (
    <section className="py-section-gap px-6 md:px-margin-page bg-surface">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-7 aspect-[4/5] bg-surface-container overflow-hidden group">
          <img 
            alt="Studio interior" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            src="https://images.unsplash.com/photo-1545208393-596651101842?auto=format&fit=crop&q=80&w=1200"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="md:col-span-5 pt-0 md:pt-12">
          <h2 className="font-headline-lg italic mb-8">The Space</h2>
          <p className="font-body-md text-secondary mb-12 max-w-sm">
            Designed by minimalists for practitioners who value silence. Our studio features raw concrete, natural light, and intentional geometry.
          </p>
          <div className="aspect-square bg-surface-container overflow-hidden">
            <img 
              alt="Detail" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
              src="https://images.unsplash.com/photo-1504198453319-5ce911baf2ef?auto=format&fit=crop&q=80&w=1200"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Instructors = () => {
  const teachers = [
    { name: "ELARA VANCE", role: "Lead Instructor • Vinyasa" },
    { name: "MARCUS THORNE", role: "Senior Teacher • Bikram" },
    { name: "SOPHIA CHEN", role: "Founder • Advanced Flow" },
    { name: "JULIAN ROSS", role: "Therapeutics • Alignment" }
  ];

  return (
    <section className="py-section-gap px-6 md:px-margin-page border-t border-primary">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="col-span-1">
          <h2 className="font-label-caps tracking-[0.2em] uppercase mb-8 md:mb-0">INSTRUCTORS</h2>
        </div>
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {teachers.map((teacher) => (
            <div 
              key={teacher.name} 
              className="border-b border-surface-dim pb-8 flex justify-between items-end group cursor-pointer hover:border-primary transition-colors"
            >
              <div>
                <p className="font-label-caps text-primary uppercase">{teacher.name}</p>
                <p className="font-label-sm text-on-primary-container uppercase">{teacher.role}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-surface-dim group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="px-6 md:px-margin-page py-12 border-t border-primary bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-label-sm text-on-primary-container uppercase tracking-widest text-center md:text-left">
          © 2024 THE VOID HOT YOGA. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-8 flex-wrap justify-center font-label-sm">
          {["PRIVACY", "TERMS", "CAREERS", "CONTACT"].map(link => (
            <a key={link} href="#" className="text-on-primary-container hover:text-primary transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary-fixed selection:text-primary">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Philosophy />
        <Offerings />
        <Space />
        <Instructors />
      </main>
      <Footer />
    </div>
  );
}
