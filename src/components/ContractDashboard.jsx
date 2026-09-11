import React, { useState, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { 
  Search, 
  Bell, 
  HelpCircle, 
  Plus, 
  Lock, 
  RotateCcw, 
  FileText, 
  Building2, 
  User, 
  MapPin, 
  Calendar, 
  CreditCard, 
  Eye, 
  Download, 
  Mail, 
  MessageSquare, 
  ShieldCheck, 
  ZoomIn, 
  Printer 
} from 'lucide-react';

export default function ContractDashboard({ user, onLogout }) {
  const [contractType, setContractType] = useState('arrendamiento');
  const [nombre1, setNombre1] = useState('Inmobiliaria Bosques del Prado S.A.');
  const [nombre2, setNombre2] = useState('Lic. Carlos Mendoza Ramos');
  const [direccion, setDireccion] = useState('Av. Paseo de la Reforma 450, Piso 18, CDMX');
  const [plazo, setPlazo] = useState('12 meses');
  const [renta, setRenta] = useState('$45,000.00 MXN');

  const [generatingPdf, setGeneratingPdf] = useState(false);
  const [highlighting, setHighlighting] = useState(false);
  const [notification, setNotification] = useState(null);

  const contractRef = useRef(null);

  const showNotify = (text) => {
    setNotification(text);
    setTimeout(() => setNotification(null), 3500);
  };

  const handleReset = () => {
    setContractType('arrendamiento');
    setNombre1('Inmobiliaria Bosques del Prado S.A.');
    setNombre2('Lic. Carlos Mendoza Ramos');
    setDireccion('Av. Paseo de la Reforma 450, Piso 18, CDMX');
    setPlazo('12 meses');
    setRenta('$45,000.00 MXN');
    showNotify('Campos restablecidos por defecto');
  };

  const handleVistaPrevia = () => {
    setHighlighting(true);
    if (contractRef.current) {
      contractRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => setHighlighting(false), 1200);
  };

  const handleGenerarPDF = async () => {
    if (!contractRef.current) return;
    try {
      setGeneratingPdf(true);
      showNotify('Generando PDF de alta resolución...');

      const element = contractRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`LawNest_Contrato_${Date.now()}.pdf`);
      showNotify('✅ PDF generado y descargado exitosamente');
    } catch (err) {
      console.error(err);
      alert('Error al exportar a PDF');
    } finally {
      setGeneratingPdf(false);
    }
  };

  const handleEnviarMail = () => {
    const subject = encodeURIComponent(`Contrato LawNest - ${contractType.toUpperCase()}`);
    const body = encodeURIComponent(`Borrador preparado para:\n- Parte 1: ${nombre1}\n- Parte 2: ${nombre2}\n- Dirección: ${direccion}\n- Plazo: ${plazo}\n- Renta: ${renta}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    showNotify('📧 Cliente de correo iniciado');
  };

  const handleEnviarWhatsApp = () => {
    const text = encodeURIComponent(`🏛️ *LawNest IA Jurisprudencial*\nContrato: ${contractType.toUpperCase()}\n- Nombre 1: ${nombre1}\n- Nombre 2: ${nombre2}\n- Ubicación: ${direccion}\n- Plazo: ${plazo}\n- Renta: ${renta}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
    showNotify('💬 Iniciando WhatsApp Web');
  };

  return (
    <div className="bg-[#f9f9ff] text-[#111c2d] font-sans min-h-screen flex flex-col antialiased">
      {/* BARRA SUPERIOR DE LA APLICACIÓN */}
      <header className="sticky top-0 z-40 bg-white dark:bg-[#0f2027] border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex justify-between items-center w-full px-6 py-3">
          {/* Marca y Navegación Izquierda */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-[#0f2027] flex items-center justify-center border border-[#775a00] shadow-sm">
                <span className="font-serif font-bold text-[#ffdf98] text-base">LN</span>
              </div>
              <span className="text-xl font-serif font-bold text-[#000508] dark:text-white tracking-tight">LawNest</span>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <a className="text-[#000508] dark:text-white font-semibold text-sm border-b-2 border-[#775a00] pb-1 pt-1" href="#contratos">Contratos</a>
              <a className="text-slate-500 font-semibold text-sm hover:text-[#000508] dark:hover:text-white pb-1 pt-1 transition-colors" href="#modelos">Modelos</a>
              <a className="text-slate-500 font-semibold text-sm hover:text-[#000508] dark:hover:text-white pb-1 pt-1 transition-colors" href="#expedientes">Expedientes</a>
              <a className="text-slate-500 font-semibold text-sm hover:text-[#000508] dark:hover:text-white pb-1 pt-1 transition-colors" href="#biblioteca">Biblioteca Legal</a>
            </nav>
          </div>

          {/* Buscador y Acciones */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center relative w-72">
              <Search className="absolute left-3 text-slate-400 w-4 h-4 pointer-events-none" />
              <input
                className="w-full pl-9 pr-3 py-1.5 bg-slate-100 rounded-lg border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#775a00]"
                placeholder="Buscar contratos, clientes..."
                type="text"
              />
            </div>

            <div className="flex items-center space-x-2 border-l border-slate-200 pl-4">
              <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors" title="Notificaciones">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors" title="Ayuda">
                <HelpCircle className="w-5 h-5" />
              </button>

              {/* Perfil del Abogado */}
              <div className="flex items-center space-x-3 ml-2 pl-3 py-1 pr-3 rounded-full bg-slate-100 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-[#0f2027] border border-[#775a00] flex items-center justify-center font-bold text-xs text-[#ffdf98]">
                  RM
                </div>
                <div className="hidden xl:block text-left pr-2">
                  <p className="text-xs font-bold text-[#000508] leading-tight">{user?.email || 'Lic. Roberto Morales'}</p>
                  <p className="text-[10px] text-[#775a00] font-semibold">Socio Director</p>
                </div>
              </div>

              <button onClick={onLogout} className="hidden sm:flex items-center space-x-1 bg-[#0f2027] hover:bg-[#0d1d3c] text-white px-4 py-2 rounded-lg border border-[#eec14b]/70 shadow-sm text-xs font-semibold">
                <Plus className="w-4 h-4 text-[#ffdf98]" />
                <span>Nuevo Contrato</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* SUB-ENCABEZADO / BARRA DE CONTEXTO */}
      <section className="bg-slate-100/80 border-b border-slate-200 px-6 py-3">
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex flex-col">
            <nav className="flex items-center space-x-2 text-xs text-slate-400 mb-1">
              <span>Inicio</span>
              <span>/</span>
              <span>Generador de Contratos</span>
              <span>/</span>
              <span className="text-[#775a00] font-semibold">Fase 1: Redacción Dinámica</span>
            </nav>
            <div className="flex items-center space-x-3">
              <h1 className="font-serif text-xl font-bold text-[#000508]">Portal de Generación de Contratos - Fase 1: Redacción y Vista Previa en Vivo</h1>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#fece57]/20 text-[#735700] border border-[#775a00]/30 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#775a00]"></span>
                Borrador Activo
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600">
              <Lock className="w-3.5 h-3.5 mr-1.5 text-[#775a00]" />
              <span>Cifrado SSL Legal 256-Bit</span>
            </div>
            <button onClick={handleReset} className="p-1.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-slate-600 transition-colors" title="Restablecer Campos">
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Alerta flotante */}
      {notification && (
        <div className="fixed top-20 right-6 z-50 bg-[#0f2027] text-[#ffdf98] px-4 py-2.5 rounded-lg border border-[#eec14b] shadow-2xl text-xs font-semibold animate-pulse">
          {notification}
        </div>
      )}

      {/* CUADRÍCULA PRINCIPAL EN DOS COLUMNAS */}
      <main className="flex-1 w-full px-6 py-6 max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* COLUMNA IZQUIERDA: CONFIGURADOR (5 Columnas) */}
          <section className="lg:col-span-5 bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
            <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
              <div>
                <h2 className="font-serif text-lg font-bold text-[#000508]">Configuración del Contrato</h2>
                <p className="text-xs text-slate-500 mt-0.5">Complete las cláusulas esenciales para actualizar la vista en tiempo real.</p>
              </div>
              <FileText className="w-5 h-5 text-[#775a00]" />
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {/* TIPO DE CONTRATO */}
              <div>
                <label className="block text-[11px] font-bold text-[#111c2d] mb-1.5 tracking-wider uppercase">
                  SELECCIONAR TIPO DE CONTRATO
                </label>
                <select
                  value={contractType}
                  onChange={(e) => setContractType(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-[#000508] focus:border-[#0f2027] focus:ring-2 focus:ring-[#775a00]/20 cursor-pointer font-medium"
                >
                  <option value="arrendamiento">Opción 1: Contrato de Arrendamiento</option>
                  <option value="nda">Opción 2: Acuerdo de Confidencialidad (NDA)</option>
                  <option value="servicios">Opción 3: Prestación de Servicios Profesionales</option>
                  <option value="compraventa">Opción 4: Contrato de Compraventa Mercantil</option>
                </select>
              </div>

              {/* NOMBRE 1 */}
              <div>
                <label className="block text-[11px] font-bold text-[#111c2d] mb-1.5 tracking-wider uppercase">
                  NOMBRE 1 (Arrendador / Otorgante)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={nombre1}
                    onChange={(e) => setNombre1(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 pr-10 text-sm text-[#000508] focus:border-[#0f2027] focus:ring-2 focus:ring-[#775a00]/20"
                  />
                  <Building2 className="absolute right-3 top-3 text-slate-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>

              {/* NOMBRE 2 */}
              <div>
                <label className="block text-[11px] font-bold text-[#111c2d] mb-1.5 tracking-wider uppercase">
                  NOMBRE 2 (Arrendatario / Receptor)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={nombre2}
                    onChange={(e) => setNombre2(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 pr-10 text-sm text-[#000508] focus:border-[#0f2027] focus:ring-2 focus:ring-[#775a00]/20"
                  />
                  <User className="absolute right-3 top-3 text-slate-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>

              {/* DIRECCIÓN 1 */}
              <div>
                <label className="block text-[11px] font-bold text-[#111c2d] mb-1.5 tracking-wider uppercase">
                  DIRECCIÓN 1 (Inmueble / Domicilio Legal)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 pr-10 text-sm text-[#000508] focus:border-[#0f2027] focus:ring-2 focus:ring-[#775a00]/20"
                  />
                  <MapPin className="absolute right-3 top-3 text-slate-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>

              {/* PLAZO Y RENTA */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-[#111c2d] mb-1.5 tracking-wider uppercase">
                    PLAZO DEL CONTRATO
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={plazo}
                      onChange={(e) => setPlazo(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 pr-10 text-sm text-[#000508] focus:border-[#0f2027] focus:ring-2 focus:ring-[#775a00]/20"
                    />
                    <Calendar className="absolute right-3 top-3 text-slate-400 w-4 h-4 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#111c2d] mb-1.5 tracking-wider uppercase">
                    RENTA MENSUAL ($)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={renta}
                      onChange={(e) => setRenta(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 pr-10 text-sm text-[#000508] focus:border-[#0f2027] focus:ring-2 focus:ring-[#775a00]/20"
                    />
                    <CreditCard className="absolute right-3 top-3 text-slate-400 w-4 h-4 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* BOTÓN VISTA PREVIA */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleVistaPrevia}
                  className="w-full py-3 px-4 rounded-lg bg-[#0f2027] text-white font-semibold text-sm flex items-center justify-center space-x-2 border border-[#775a00] shadow-md hover:bg-[#0d1d3c] transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#ffdf98]" />
                  <span>Vista Previa</span>
                </button>
              </div>

              {/* BOTONES DE ACCIÓN DE EXPORTACIÓN */}
              <div className="pt-2 grid grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={handleGenerarPDF}
                  disabled={generatingPdf}
                  className="flex flex-col sm:flex-row items-center justify-center p-2.5 sm:space-x-1.5 rounded-lg bg-[#0f2027] hover:bg-[#0d1d3c] border border-[#775a00]/60 text-white transition-all text-center cursor-pointer disabled:opacity-50"
                >
                  <Download className="w-4 h-4 text-[#ffdf98]" />
                  <span className="text-xs font-bold mt-1 sm:mt-0">Generar PDF</span>
                </button>

                <button
                  type="button"
                  onClick={handleEnviarMail}
                  className="flex flex-col sm:flex-row items-center justify-center p-2.5 sm:space-x-1.5 rounded-lg bg-[#0f2027] hover:bg-[#0d1d3c] border border-[#775a00]/60 text-white transition-all text-center cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#ffdf98]" />
                  <span className="text-xs font-bold mt-1 sm:mt-0">Enviar Mail</span>
                </button>

                <button
                  type="button"
                  onClick={handleEnviarWhatsApp}
                  className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#0f2027] hover:bg-[#0d1d3c] border border-[#775a00]/60 text-white transition-all text-center cursor-pointer"
                >
                  <div className="flex items-center space-x-1">
                    <MessageSquare className="w-3.5 h-3.5 text-[#ffdf98]" />
                    <span className="text-xs font-bold">Enviar WhatsApp</span>
                  </div>
                  <span className="text-[9px] text-[#ffdf98] opacity-90 leading-tight">(API Oficial)</span>
                </button>
              </div>
            </form>

            <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-200 flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-[#775a00] shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600 leading-relaxed">
                <p><span className="font-bold text-[#000508]">Cumplimiento Notarial:</span> Esta plantilla cumple con las disposiciones del Código Civil Federal y las normativas mercantiles vigentes.</p>
              </div>
            </div>
          </section>

          {/* COLUMNA DERECHA: VISTA PREVIA (7 Columnas) */}
          <section className="lg:col-span-7 flex flex-col items-center">
            {/* Barra de Herramientas */}
            <div className="w-full max-w-[850px] bg-white rounded-t-xl border border-b-0 border-slate-200 px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-[#000508] tracking-wider uppercase">VISTA PREVIA DE CONTRATO</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#d3e5ef] text-[#384951]">Modo Dinámico</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400 text-xs">
                <span className="flex items-center"><ZoomIn className="w-3.5 h-3.5 mr-1" /> 100%</span>
                <span>|</span>
                <span>2 Páginas</span>
                <span>|</span>
                <button onClick={() => window.print()} className="hover:text-slate-700 transition-colors" title="Imprimir borrador">
                  <Printer className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Hoja de Papel del Documento Legal */}
            <div
              ref={contractRef}
              className="w-full max-w-[850px] bg-white border border-slate-200 rounded-b-xl shadow-xl p-8 sm:p-12 relative overflow-hidden text-[#111c2d]"
              style={{ backgroundColor: '#ffffff', color: '#111c2d' }}
            >
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#ffdf98]/40 border border-[#775a00]/40 text-[#5a4300] font-bold text-xs tracking-wide">
                  VISTA PREVIA EN TIEMPO REAL
                </span>
              </div>

              {/* Encabezado Legal */}
              <div className="text-center pb-8 border-b-2 border-slate-200">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full border border-[#775a00] flex items-center justify-center bg-[#0f2027]">
                  <span className="text-[#ffdf98] font-serif font-bold text-sm tracking-widest">LN</span>
                </div>
                <p className="text-xs font-bold text-[#775a00] tracking-widest uppercase">REPOSITORIO NOTARIAL & CORPORATIVO LAWNEST</p>
                <h3 className="font-serif text-xl sm:text-2xl text-[#000508] mt-1 font-bold">
                  {contractType === 'arrendamiento' && 'CONTRATO DE ARRENDAMIENTO INMOBILIARIO'}
                  {contractType === 'nda' && 'ACUERDO DE CONFIDENCIALIDAD Y NO DIVULGACIÓN (NDA)'}
                  {contractType === 'servicios' && 'CONTRATO DE PRESTACIÓN DE SERVICIOS PROFESIONALES'}
                  {contractType === 'compraventa' && 'CONTRATO DE COMPRAVENTA MERCANTIL'}
                </h3>
                <p className="text-xs text-slate-500 italic mt-1">Expediente Digital Ref: LN-2026-ARR-0921B</p>
              </div>

              {/* Texto Dinámico */}
              <div className="mt-8 space-y-6 font-serif text-sm leading-relaxed text-justify text-slate-800">
                <div>
                  <h4 className="font-sans font-bold text-[#000508] mb-2 text-xs uppercase tracking-wider">PÁRRAFO DE INTRODUCCIÓN</h4>
                  <p>
                    En la Ciudad de México, comparece por una parte en su calidad de <strong className="text-[#000508]">"EL ARRENDADOR / OTORGANTE"</strong>:{' '}
                    <mark className={`bg-[#ffdf98]/60 text-[#251a00] font-semibold px-1.5 py-0.5 rounded border border-[#775a00]/30 transition-all ${highlighting ? 'ring-2 ring-[#775a00]' : ''}`}>
                      {nombre1 || '[Nombre 1]'}
                    </mark>, representada legalmente por su apoderado general; y por la otra parte, en su calidad de <strong className="text-[#000508]">"EL ARRENDATARIO / RECEPTOR"</strong>:{' '}
                    <mark className={`bg-[#ffdf98]/60 text-[#251a00] font-semibold px-1.5 py-0.5 rounded border border-[#775a00]/30 transition-all ${highlighting ? 'ring-2 ring-[#775a00]' : ''}`}>
                      {nombre2 || '[Nombre 2]'}
                    </mark>, personas que se reconocen mutua y recíprocamente con capacidad jurídica idónea y suficiente.
                  </p>
                </div>

                <div className="pl-3 border-l-2 border-[#775a00]/50 space-y-1">
                  <h4 className="font-sans font-bold text-[#000508] text-xs uppercase tracking-wider">CLÁUSULA PRIMERA (OBJETO Y VIGENCIA):</h4>
                  <p>
                    Se concede el uso o vigencia temporal de los derechos objeto del instrumento por el término improrrogable de:{' '}
                    <mark className={`bg-[#ffdf98]/60 text-[#251a00] font-semibold px-1.5 py-0.5 rounded border border-[#775a00]/30 transition-all ${highlighting ? 'ring-2 ring-[#775a00]' : ''}`}>
                      {plazo || '[Plazo]'}
                    </mark>, el cual comenzará a computarse a partir de la firma de las partes.
                  </p>
                </div>

                <div className="pl-3 border-l-2 border-[#775a00]/50 space-y-1">
                  <h4 className="font-sans font-bold text-[#000508] text-xs uppercase tracking-wider">CLÁUSULA SEGUNDA (CONTRAPRESTACIÓN Y RENTA):</h4>
                  <p>
                    Como contraprestación pactada, se compromete a abonar la cantidad neta convenida de:{' '}
                    <mark className={`bg-[#ffdf98]/60 text-[#251a00] font-semibold px-1.5 py-0.5 rounded border border-[#775a00]/30 transition-all ${highlighting ? 'ring-2 ring-[#775a00]' : ''}`}>
                      {renta || '[$0.00]'}
                    </mark>, pagaderos en moneda corriente dentro de los primeros cinco días hábiles de cada periodo.
                  </p>
                </div>

                <div className="pl-3 border-l-2 border-[#775a00]/50 space-y-1">
                  <h4 className="font-sans font-bold text-[#000508] text-xs uppercase tracking-wider">CLÁUSULA TERCERA (UBICACIÓN Y DOMICILIO):</h4>
                  <p>
                    El objeto material del presente acuerdo se encuentra ubicado legalmente en:{' '}
                    <mark className={`bg-[#ffdf98]/60 text-[#251a00] font-semibold px-1.5 py-0.5 rounded border border-[#775a00]/30 transition-all ${highlighting ? 'ring-2 ring-[#775a00]' : ''}`}>
                      {direccion || '[Dirección]'}
                    </mark>, libre de todo gravamen u oposición posesoria.
                  </p>
                </div>

                {/* Firmas */}
                <div className="pt-10 mt-10 border-t border-slate-300 grid grid-cols-2 gap-8 font-sans">
                  <div className="text-center">
                    <div className="h-14 flex items-end justify-center pb-1">
                      <span className="text-[11px] text-slate-400 italic">[Firma Digital Tokenizada 0x8F9B]</span>
                    </div>
                    <div className="border-t border-slate-700 pt-2">
                      <p className="font-bold text-xs text-[#000508]">{nombre1 || 'PARTE UNO'}</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider">EL ARRENDADOR / OTORGANTE</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="h-14 flex items-end justify-center pb-1">
                      <span className="text-[11px] text-slate-400 italic">[Pendiente de Validación Biométrica]</span>
                    </div>
                    <div className="border-t border-slate-700 pt-2">
                      <p className="font-bold text-xs text-[#000508]">{nombre2 || 'PARTE DOS'}</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider">EL ARRENDATARIO / RECEPTOR</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Barra de Estado del Documento */}
              <div className="mt-10 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-slate-400 text-[11px] font-sans">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#775a00]"></span>
                  <span>Validación SHA-256: 4e8b...1a09</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span>Zoom: 100%</span>
                  <span>•</span>
                  <span>Firma: Pendiente</span>
                  <span>•</span>
                  <span className="text-[#000508] font-bold">Página 1 de 2</span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
