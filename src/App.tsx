import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Leaf, 
  ShieldCheck, 
  TreePine, 
  Wind, 
  MapPin, 
  Globe, 
  Check, 
  ArrowLeft, 
  Mail, 
  Phone, 
  ArrowRight,
  Send,
  User,
  Building,
  MessageSquare,
  Instagram
} from "lucide-react";

/**
 * Reusable LetterBox for branding
 */
const LetterBox = ({ letter }: { letter: string }) => (
  <motion.div 
    whileHover={{ rotate: [-2, 2, 0], scale: 1.05 }}
    className="w-10 h-10 md:w-12 md:h-12 border-2 border-ink-900 bg-white flex items-center justify-center font-outfit font-black text-xl md:text-2xl text-ink-900 shadow-[2px_2px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_rgba(0,0,0,1)]"
  >
    {letter}
  </motion.div>
);

/**
 * Section container for the home view
 */
const DocumentSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="border-2 border-ink-900 p-8 space-y-6 bg-white relative group"
  >
    <div className="absolute top-0 right-0 p-2 text-[10px] font-bold opacity-20 group-hover:opacity-100 transition-opacity">REF:BSN-026</div>
    <div className="flex items-center gap-4 text-ink-900">
      <div className="w-2 h-8 bg-gold-600" />
      <h3 className="font-outfit font-black text-xl uppercase tracking-tighter">{title}</h3>
    </div>
    <div className="text-sm font-light leading-relaxed text-ink-800 space-y-4">
      {children}
    </div>
  </motion.div>
);

/**
 * Full Product Detail Section (High-Impact Design)
 */
const ProductDetailSection = ({ 
  number, 
  title, 
  headline, 
  description, 
  points, 
  image, 
  reverse = false 
}: { 
  number: string, 
  title: string, 
  headline: string, 
  description: string, 
  points: string[], 
  image: string,
  reverse?: boolean
}) => (
  <motion.section 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className={`grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] border-b-2 border-ink-900 ${reverse ? 'lg:flex-row-reverse' : ''}`}
  >
    <div className={`p-6 md:p-20 flex flex-col justify-center space-y-6 md:space-y-8 bg-paper-50 ${reverse ? 'lg:order-2 lg:border-l-2 border-ink-900' : 'lg:border-r-2 border-ink-900'}`}>
      <motion.span 
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="text-gold-600 font-outfit font-bold text-xs md:text-sm tracking-[0.3em] uppercase text-left"
      >
        {headline}
      </motion.span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-outfit font-black text-ink-900 leading-tight md:leading-[0.9] text-left break-words">
        <span className="opacity-10 mr-2 md:mr-4 font-light">{number}.</span>
        {title}
      </h2>
      <p className="text-lg md:text-xl font-light leading-relaxed max-w-xl text-ink-700 text-left">
        {description}
      </p>
      <div className="grid grid-cols-1 gap-3 md:gap-4 pt-4">
        {points.map((point, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="flex items-start gap-3 md:gap-4"
          >
            <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-ink-900 flex items-center justify-center shrink-0 mt-0.5 bg-ink-900 text-paper-50">
              <Check size={12} className="md:w-3.5 md:h-3.5" strokeWidth={3} />
            </div>
            <span className="text-ink-800 font-bold text-sm md:text-base uppercase tracking-tight text-left">{point}</span>
          </motion.div>
        ))}
      </div>
    </div>
    <div className={`relative h-[30vh] md:h-[50vh] lg:h-auto overflow-hidden grayscale contrast-125 brightness-90 hover:grayscale-0 hover:brightness-110 transition-all duration-1000 ${reverse ? 'lg:order-1 border-b-2 lg:border-b-0 border-ink-900 lg:border-r-2' : 'border-t-2 lg:border-t-0 border-ink-900 lg:border-l-2'}`}>
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-ink-900 text-white px-3 py-1.5 md:px-4 md:py-2 font-mono text-[9px] md:text-xs uppercase tracking-widest shadow-2xl">
        STAMP_QUALITY_{number}
      </div>
    </div>
  </motion.section>
);

type ActiveView = 'home' | 'producto' | 'proceso' | 'contacto';

export default function App() {
  const [view, setView] = useState<ActiveView>('home');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-paper-200 p-2 md:p-10 flex flex-col items-center">
      
      {/* Paper Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Archive Scanline Effect */}
      <motion.div 
        animate={{ y: ['0%', '100%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="fixed inset-0 pointer-events-none z-[101] h-1/4 bg-gradient-to-b from-transparent via-ink-900/5 to-transparent opacity-20"
      />
      
      {/* Decorative background lines */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="h-full w-px bg-ink-900 absolute left-1/4" />
        <div className="h-full w-px bg-ink-900 absolute left-2/4" />
        <div className="h-full w-px bg-ink-900 absolute left-3/4" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-7xl w-full border-4 border-ink-900 p-0.5 md:p-1 bg-paper-100 shadow-[20px_20px_0px_rgba(0,0,0,0.05)] md:shadow-[40px_40px_0px_rgba(0,0,0,0.05)] relative z-10"
      >
        <div className="border-2 border-ink-900 p-3 md:p-12 space-y-8 md:space-y-12">
          
          {/* Header metadata */}
          <header className="flex flex-col lg:flex-row justify-between items-center border-b-4 border-ink-900 pb-8 gap-8">
            <div className="flex gap-1.5 md:gap-2 items-center cursor-pointer" onClick={() => setView('home')}>
              <LetterBox letter="B" />
              <LetterBox letter="A" />
              <LetterBox letter="S" />
              <LetterBox letter="O" />
              <LetterBox letter="A" />
              <LetterBox letter="N" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] opacity-40">
              <span className="flex items-center gap-2"><MapPin size={12} className="md:w-3.5 md:h-3.5" /> Araba / Euskadi</span>
              <span className="inline-block">/ Est. 1998</span>
              <span className="bg-ink-900 text-white px-2 py-0.5 animate-pulse text-[7px] md:text-[8px]">Live Archive</span>
            </div>
          </header>

          {/* Hero Header */}
          <div className="py-8 md:py-12 border-b-4 border-double border-ink-900 text-center relative overflow-hidden bg-paper-50/50">
             <motion.h1 
              key={view}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              onClick={() => setView('home')}
              className="px-4 text-3xl sm:text-4xl md:text-7xl font-display font-medium uppercase tracking-tighter text-ink-900 leading-none relative z-10 cursor-pointer"
             >
               Solo hongos silvestres
             </motion.h1>
             <p className="mt-4 md:mt-6 text-lg md:text-2xl font-display italic text-gold-600 opacity-80 px-4">Nada más. Nada menos.</p>
          </div>

          {/* Sticky Navigation */}
          <nav className="sticky top-0 z-50 bg-paper-100/95 backdrop-blur-sm flex justify-center border-b-2 border-ink-900 py-3 md:py-6 -mx-3 md:-mx-12 px-2 md:px-4 shadow-sm">
            <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-16 gap-y-2 md:gap-y-6">
              <button onClick={() => setView('home')} className={`nav-link text-[10px] sm:text-xs md:text-base ${view === 'home' ? 'text-gold-600 font-bold underline decoration-2 underline-offset-8' : ''}`}>Inicio</button>
              <button onClick={() => setView('producto')} className={`nav-link text-[10px] sm:text-xs md:text-base ${view === 'producto' ? 'text-gold-600 font-bold underline decoration-2 underline-offset-8' : ''}`}>Producto</button>
              <button onClick={() => setView('proceso')} className={`nav-link text-[10px] sm:text-xs md:text-base ${view === 'proceso' ? 'text-gold-600 font-bold underline decoration-2 underline-offset-8' : ''}`}>Proceso</button>
              <button onClick={() => setView('contacto')} className={`nav-link text-[10px] sm:text-xs md:text-base ${view === 'contacto' ? 'text-gold-600 font-bold underline decoration-2 underline-offset-8' : ''}`}>Contacto</button>
            </div>
          </nav>

          {/* Main Content Area */}
          <main className="min-h-[60vh] py-8">
            <AnimatePresence mode="wait">
              {view === 'home' && (
                <motion.div 
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12"
                >
                  <div className="lg:col-span-5 space-y-10">
                    <DocumentSection title="Filosofía Basoan">
                      <div className="flex items-center gap-3 mb-6 bg-gold-600/10 border-l-4 border-gold-600 p-3">
                        <div className="w-2 h-2 rounded-full bg-gold-600 animate-ping" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-gold-700">Estado de Temporada: Boletus Edulis & Amanita</span>
                      </div>
                      <p className="text-lg md:text-xl leading-relaxed first-letter:text-5xl md:first-letter:text-6xl first-letter:font-display first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-ink-900 text-ink-800">
                        Nuestra labor comienza cuando el sol a&uacute;n no ha salido. En el silencio de los bosques de Araba, seleccionamos uno a uno los tesoros que la tierra nos ofrece, respetando siempre el ciclo natural.
                      </p>
                      <p className="text-ink-800 text-sm md:text-base">Exportamos frescura. No acumulamos stock innecesario. Cada pedido es gestionado como una pieza de artesan&iacute;a micol&oacute;gica.</p>
                      <button 
                        onClick={() => setView('proceso')}
                        className="btn-primary mt-4 group w-full md:w-auto"
                      >
                        Ver nuestro proceso <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                      </button>
                    </DocumentSection>
                    
                    <div className="border-4 border-ink-900 p-8 bg-white rotate-2 hover:rotate-0 transition-transform cursor-crosshair">
                      <div className="flex items-center gap-4 mb-4">
                        <ShieldCheck size={32} className="text-gold-600" />
                        <h4 className="font-outfit font-black text-sm uppercase tracking-widest underline">Pureza Garantizada</h4>
                      </div>
                      <p className="text-[11px] font-mono leading-relaxed opacity-60 uppercase">Sello de calidad Basoan Micol&oacute;gica 2026. Verificaci&oacute;n por especies y grado de maduraci&oacute;n m&aacute;s r&iacute;gida de Europa.</p>
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-12">
                    <motion.div 
                      whileHover={{ y: -10 }}
                      className="border-8 border-ink-900 p-2 bg-white shadow-2xl relative"
                    >
                      <div className="aspect-video grayscale contrast-150 overflow-hidden border-2 border-ink-900 group cursor-pointer" onClick={() => setView('producto')}>
                        <img 
                          src="https://images.unsplash.com/photo-1590487053356-912b7f0de209?q=80&w=1200" 
                          alt="Boletus" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms]"
                        />
                        <div className="absolute inset-0 bg-ink-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <span className="bg-paper-50 text-ink-900 px-6 py-2 border-2 border-ink-900 font-bold uppercase text-[10px] tracking-widest">Ver Producto</span>
                        </div>
                      </div>
                    </motion.div>
                    
                    <div className="grid grid-cols-2 gap-8 border-t-4 border-ink-900 pt-8">
                      <div className="space-y-4 text-left">
                        <h5 className="font-outfit font-black text-xs uppercase opacity-40 tracking-widest">M&eacute;trica Fidelidad:</h5>
                        <div className="text-5xl font-display font-medium text-ink-900 tracking-tighter">98.5%</div>
                      </div>
                      <div className="space-y-4 border-l-2 border-ink-900 pl-8 text-left">
                        <h5 className="font-outfit font-black text-xs uppercase opacity-40 tracking-widest">Alcance:</h5>
                        <div className="flex gap-2">
                           <Globe size={28} strokeWidth={1} className="text-gold-600" />
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Log&iacute;stica Global</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {view === 'producto' && (
                <motion.div 
                  key="producto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="-mx-4 md:-mx-12"
                >
                  <div className="px-4 md:px-12 mb-10 md:mb-16 text-center space-y-4 md:space-y-6">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display uppercase tracking-tighter text-ink-900 px-4">Formatos</h2>
                    <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light text-ink-700 italic px-4">Disponibilidad adaptada a la temporada y necesidades de la alta cocina.</p>
                  </div>

                  <ProductDetailSection 
                    number="1"
                    title="Fresco"
                    headline="Entero, laminado o troceado"
                    description="Selección por especie y estado del producto. Preparación orientada a restauración y distribución especializada, siempre condicionada por la disponibilidad natural."
                    points={["Sujeto a Campaña", "Recolección manual al amanecer", "Envío refrigerado 24h"]}
                    image="https://images.unsplash.com/photo-1627918451167-a2f64121946a?q=80&w=1200"
                  />
                  <ProductDetailSection 
                    number="2"
                    title="Congelado"
                    headline="Uso profesional todo el año"
                    description="Producto seleccionado y ultracongelado para preservar y concentrar las cualidades originales del hongo silvestre. Estabilidad garantizada sin mermas."
                    points={["Sistema IQF de alta precisión", "Sabor técnico concentrado", "Stock permanente asegurado"]}
                    image="https://images.unsplash.com/photo-1590487053356-912b7f0de209?q=80&w=1200"
                    reverse
                  />
                  <ProductDetailSection 
                    number="3"
                    title="Deshidratado"
                    headline="Concentración de aroma"
                    description="Hongo silvestre seleccionado y deshidratado para preservar su aroma y facilitar su uso profesional en fondos, cremas y salsas."
                    points={["Máximo rendimiento por kg", "Almacenaje sencillo a temperatura ambiente", "Potenciador natural sin aditivos"]}
                    image="https://images.unsplash.com/photo-1544084944-15269ec7b5a0?q=80&w=1200"
                  />
                  <ProductDetailSection 
                    number="4"
                    title="Conserva"
                    headline="Artesanía Micológica"
                    description="Elaboraciones en campañas concretas, respetando el origen y sin forzar volúmenes industriales. Series limitadas para el sector gourmet."
                    points={["Producción artesana local", "Garantía de origen certificado", "Máxima categoría Gourmet"]}
                    image="https://images.unsplash.com/photo-1589135012574-884ec8942b03?q=80&w=1200"
                    reverse
                  />
                </motion.div>
              )}

              {view === 'proceso' && (
                <motion.div 
                  key="proceso"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-16"
                >
                  <div className="relative h-64 md:h-[50vh] overflow-hidden border-4 border-ink-900 group">
                    <img 
                      src="https://images.unsplash.com/photo-1590487053356-912b7f0de209?q=80&w=1600" 
                      className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-[3000ms]" 
                      alt="Proceso"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-6 text-white bg-ink-900/40">
                      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-medium uppercase tracking-tighter">Proceso</h2>
                      <p className="text-xs sm:text-sm md:text-lg uppercase tracking-[0.1em] md:tracking-[0.4em] font-bold mt-2 md:mt-4 opacity-80 px-4">Un mismo criterio, del origen al mercado</p>
                    </div>
                  </div>

                  <div className="max-w-5xl mx-auto space-y-24 py-12 px-4">
                    {/* Phase 01 */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      <div className="lg:col-span-1 text-gold-600 font-display font-black text-6xl opacity-20">01</div>
                      <div className="lg:col-span-5 space-y-6 text-left">
                        <h3 className="text-4xl font-display uppercase tracking-tighter text-ink-900">Selecci&oacute;n en Origen</h3>
                        <p className="text-lg font-light text-ink-800 leading-relaxed">
                          Con base en el Pa&iacute;s Vasco, el proceso de Basoan se apoya en el conocimiento del territorio y en una red consolidada de recolectores. No aceptamos producto masivo; cada lote es inspeccionado visual y sensorialmente antes de entrar en nuestras instalaciones.
                        </p>
                      </div>
                      <div className="lg:col-span-6 border-2 border-ink-900 p-2 grayscale hover:grayscale-0 transition-all">
                        <img src="https://images.unsplash.com/photo-1544084944-15269ec7b5a0?q=80&w=800" alt="Seleccion" className="w-full h-64 object-cover" />
                      </div>
                    </div>

                    {/* Phase 02 */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      <div className="lg:col-span-1 text-gold-600 font-display font-black text-6xl opacity-20 lg:order-3">02</div>
                      <div className="lg:col-span-5 space-y-6 text-left lg:text-right lg:order-2">
                        <h3 className="text-4xl font-display uppercase tracking-tighter text-ink-900">Estabilizaci&oacute;n T&eacute;cnica</h3>
                        <p className="text-lg font-light text-ink-800 leading-relaxed">
                          Utilizamos tecnolog&iacute;a de fr&iacute;o y deshidrataci&oacute;n para preservar las cualidades organol&eacute;pticas sin alterar la estructura del hongo. Cada pieza conserva su potencia gustativa gracias a un control estricto de humedad y temperatura constante.
                        </p>
                      </div>
                      <div className="lg:col-span-6 border-2 border-ink-900 p-2 grayscale hover:grayscale-0 transition-all lg:order-1">
                        <img src="https://images.unsplash.com/photo-1627918451167-a2f64121946a?q=80&w=800" alt="Control" className="w-full h-64 object-cover" />
                      </div>
                    </div>

                    {/* Phase 03 */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      <div className="lg:col-span-1 text-gold-600 font-display font-black text-6xl opacity-20">03</div>
                      <div className="lg:col-span-5 space-y-6 text-left">
                        <h3 className="text-4xl font-display uppercase tracking-tighter text-ink-900">Trazabilidad & Log&iacute;stica</h3>
                        <p className="text-lg font-light text-ink-800 leading-relaxed">
                          Nuestra ubicaci&oacute;n estrat&eacute;gica nos permite responder con agilidad a pedidos nacionales e internacionales. Desde el bosque a la cocina en menos de 24 horas, garantizando la frescura y el cumplimiento de las normativas europeas m&aacute;s exigentes.
                        </p>
                      </div>
                      <div className="lg:col-span-6 border-2 border-ink-900 p-2 grayscale hover:grayscale-0 transition-all">
                        <img src="https://images.unsplash.com/photo-1589135012574-884ec8942b03?q=80&w=800" alt="Logistica" className="w-full h-64 object-cover" />
                      </div>
                    </div>

                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      className="border-y-4 border-double border-ink-900 py-16 text-center"
                    >
                       <p className="text-3xl md:text-5xl font-display italic text-gold-600 leading-tight max-w-4xl mx-auto">
                         "Un proceso pensado para respetar el producto, el origen y el tiempo, sin perder coherencia cuando el destino cambia."
                       </p>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {view === 'contacto' && (
                <motion.div 
                  key="contacto"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="max-w-5xl mx-auto"
                >
                  <div className="border-4 border-ink-900 p-8 md:p-16 bg-white shadow-2xl space-y-12 relative overflow-hidden">
                    <div className="flex flex-col lg:flex-row justify-between items-start border-b-2 border-ink-900 pb-10 gap-8">
                       <div className="text-left space-y-3">
                          <h2 className="text-4xl md:text-7xl font-display font-medium uppercase tracking-tighter text-ink-900">Enquiry Form</h2>
                          <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">Central de Suministro Iberia & Export</p>
                       </div>
                       <div className="text-right font-mono text-[11px] opacity-50 bg-paper-100 p-4 border border-ink-900/10 hidden lg:block">
                         DOCUMENT: CONTACT_FORM_V3<br/>
                         ISSUE: {new Date().toLocaleDateString()}<br/>
                         SEC: {view.toUpperCase()}
                       </div>
                    </div>

                    <form className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 text-left" onSubmit={handleFormSubmit}>
                      {formSubmitted ? (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="lg:col-span-2 py-20 text-center space-y-6"
                        >
                          <div className="w-20 h-20 border-4 border-gold-600 rounded-full flex items-center justify-center mx-auto text-gold-600">
                            <Check size={40} strokeWidth={3} />
                          </div>
                          <h3 className="text-3xl font-display font-medium uppercase text-ink-900">Consulta Recibida</h3>
                          <p className="text-ink-700 font-light max-w-sm mx-auto italic">
                            Su solicitud ha sido indexada en nuestro archivo central. Un agente especializado contactar&aacute; con usted en breve.
                          </p>
                        </motion.div>
                      ) : (
                        <>
                          <div className="space-y-8 md:space-y-10">
                            <div className="space-y-3">
                              <label className="text-[10px] md:text-[11px] font-black uppercase tracking-widest flex items-center gap-3 text-ink-900/60"><User size={14}/>Nombre / Raz&oacute;n Social</label>
                              <input required type="text" placeholder="Ej. Restaurante Arzak" className="input-field" />
                            </div>
                            <div className="space-y-3">
                              <label className="text-[10px] md:text-[11px] font-black uppercase tracking-widest flex items-center gap-3 text-ink-900/60"><Mail size={14}/>Correo Electr&oacute;nico</label>
                              <input required type="email" placeholder="contacto@empresa.com" className="input-field" />
                            </div>
                            <div className="space-y-3">
                              <label className="text-[10px] md:text-[11px] font-black uppercase tracking-widest flex items-center gap-3 text-ink-900/60"><Phone size={14}/>Tel&eacute;fono de Contacto</label>
                              <input required type="tel" placeholder="+34 000 000 000" className="input-field" />
                            </div>
                            <div className="space-y-3">
                              <label className="text-[10px] md:text-[11px] font-black uppercase tracking-widest flex items-center gap-3 text-ink-900/60"><Building size={14}/>Ubicaci&oacute;n</label>
                              <input required type="text" placeholder="Ciudad, Pa&iacute;s" className="input-field" />
                            </div>
                          </div>
                          <div className="space-y-8 md:space-y-10 h-full flex flex-col">
                            <div className="space-y-3 flex-1">
                              <label className="text-[10px] md:text-[11px] font-black uppercase tracking-widest flex items-center gap-3 text-ink-900/60"><MessageSquare size={14}/>Consulta Espec&iacute;fica</label>
                              <textarea required placeholder="Detalle su solicitud..." className="input-field h-32 md:h-44 resize-none" />
                            </div>
                            <motion.button 
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              type="submit"
                              className="btn-primary w-full group shadow-[6px_6px_0px_rgba(0,0,0,0.1)] md:shadow-[10px_10px_0px_rgba(0,0,0,0.1)]"
                            >
                              Enviar Consulta <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                            </motion.button>
                          </div>
                        </>
                      )}
                    </form>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 pb-12">
                     <div className="lg:col-span-5 space-y-8 text-left">
                        <div className="border-2 border-ink-900 p-8 bg-paper-50 space-y-6 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                           <div className="space-y-4">
                              <h3 className="text-3xl font-outfit font-black uppercase text-ink-900 tracking-tighter decoration-gold-600 underline decoration-4 underline-offset-4">Basoan</h3>
                              <a href="mailto:basoan@basoan.com" className="text-xl font-bold text-ink-700 hover:text-gold-600 transition-colors block border-b border-ink-900/20 pb-2">basoan@basoan.com</a>
                           </div>
                           
                           <div className="space-y-2 font-mono text-sm uppercase">
                              <div className="flex items-center gap-3">
                                 <Phone size={16} className="text-gold-600" />
                                 <span className="font-bold">Tel: +34 945 365 616</span>
                              </div>
                              <div className="flex items-center gap-3">
                                 <Phone size={16} className="text-gold-600" />
                                 <span className="font-bold">Tel: +34 696 726 981</span>
                              </div>
                              <a 
                                 href="https://wa.me/34696726981" 
                                 target="_blank" 
                                 rel="noreferrer" 
                                 className="flex items-center gap-3 text-gold-600 hover:underline font-black mt-4"
                              >
                                 <MessageSquare size={16} /> WhatsApp Directo
                              </a>
                           </div>

                           <div className="space-y-2 border-t-2 border-ink-900 pt-6">
                              <h4 className="text-[11px] font-black uppercase tracking-widest opacity-60">Ubicación Central:</h4>
                              <p className="text-base font-bold leading-tight text-ink-900">
                                 Parque Empresarial Subillabide<br/>
                                 C/ Tratado de París 1, pabellón 11<br/>
                                 01230 Nanclares de la Oca (Álava)<br/>
                                 Spain
                              </p>
                           </div>
                        </div>

                        {/* Social Instagram Link */}
                        <a 
                           href="https://www.instagram.com/basoan.co?igsh=Z2F2OXFhd3BlaWhv" 
                           target="_blank" 
                           rel="noreferrer"
                           className="bg-ink-900 p-8 border-2 border-ink-900 text-center space-y-4 text-paper-50 flex items-center justify-center gap-6 hover:bg-ink-800 transition-colors shadow-[8px_8px_0px_rgba(212,175,55,1)]"
                         >
                           <Instagram size={32} className="text-gold-600" />
                           <p className="text-2xl font-black">@basoan.co</p>
                        </a>
                     </div>

                     <div className="lg:col-span-7 h-[400px] lg:h-auto border-4 border-ink-900 shadow-[12px_12px_0px_rgba(0,0,0,0.05)] bg-white p-2">
                        <iframe 
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.123!2d-2.812!3d42.815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQ4JzU0LjAiTiAywrA0OCc0My4yIlc!5e0!3m2!1ses!2ses!4v1715011000000!5m2!1ses!2ses" 
                           className="w-full h-full contrast-110"
                           style={{ border: 0 }} 
                           allowFullScreen 
                           loading="lazy" 
                           referrerPolicy="no-referrer-when-downgrade"
                        />
                     </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </main>

          {/* Luxury Footer */}
          <footer className="pt-12 md:pt-24 border-t-4 border-ink-900 flex flex-col md:flex-row justify-between items-center md:items-end gap-12 mt-12 pb-10 opacity-60">
            <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
               <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                 <div className="w-14 h-14 md:w-16 md:h-16 border-4 border-ink-900 flex items-center justify-center font-outfit font-black text-xl md:text-2xl bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] text-ink-900">B</div>
                 <div className="space-y-1">
                    <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] block text-ink-900">Respeto Forestal • 2026</span>
                    <p className="text-[9px] md:text-[10px] font-mono opacity-60">RGSEAA: 21.26146/VI</p>
                 </div>
               </div>
               <p className="text-[9px] md:text-[10px] max-w-sm font-mono leading-relaxed uppercase text-ink-900 px-4 md:px-0">
                 Basoan Micol&oacute;gica S.L.U. NIF B01507284. Vitoria-Gasteiz, Araba. Suministro Gourmet Certificado.
               </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-end">
               <div className="text-center md:text-right space-y-2">
                  <span className="text-[9px] font-black uppercase opacity-40 block tracking-widest">Institutional Support:</span>
                  <div className="flex gap-4 items-center justify-center md:justify-end grayscale opacity-50">
                     <div className="w-8 h-5 bg-ink-900" />
                     <span className="text-[9px] font-bold text-ink-900">UE NextGeneration</span>
                  </div>
               </div>
               <div className="text-center md:text-right md:border-l-2 border-ink-900 md:pl-16 font-mono text-[9px] md:text-[10px] space-y-1 text-ink-900">
                  REF_DB: 080326<br/>
                  LOC: EU-S1
               </div>
            </div>
          </footer>

        </div>
      </motion.div>

      {/* Floating Bottom Label */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        className="mt-16 flex flex-col md:flex-row items-center gap-6 text-[11px] uppercase tracking-[1em] font-black text-ink-900"
      >
        <span>Basoan</span>
        <div className="w-2 h-2 bg-gold-600 rounded-full animate-pulse" />
        <span>Basque Country</span>
        <div className="w-2 h-2 bg-gold-600 rounded-full animate-pulse" />
        <span>1998</span>
      </motion.div>

    </div>
  );
}
