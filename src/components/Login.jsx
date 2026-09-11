import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ShieldCheck, ArrowRight } from 'lucide-react';
import justiciaImg from '../assets/justicia.jpg';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('abogado@lawnest.com');
  const [password, setPassword] = useState('PasswordSeguro2026');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin({ email });
    } else {
      alert('Por favor ingrese correo y contraseña.');
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#f9f9ff] text-[#111c2d] font-sans antialiased">
      {/* PANEL IZQUIERDO: Banner de Marca Legal */}
      <aside className="relative w-full lg:w-1/2 min-h-[480px] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#0f2027] text-white p-6 sm:p-8 lg:p-12">
        {/* Imagen de Fondo de Justicia */}
        <img
          alt="Estatua de la Justicia / LawNest"
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 filter brightness-95 contrast-105 transition-transform duration-1000 ease-out hover:scale-100"
          src={justiciaImg}
        />
        {/* Capas de Degradado */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000508] via-[#0f2027]/70 to-[#0f2027]/40 mix-blend-multiply pointer-events-none"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0f2027]/30 to-[#000508]/80 pointer-events-none"></div>

        {/* Encabezado Superior con Logotipo */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            {/* Monograma LN */}
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#0f2027] to-[#000508] border border-[#eec14b]/60 shadow-md flex items-center justify-center p-0.5 transition-transform duration-200 group-hover:scale-105">
              <div className="w-full h-full rounded-[6px] border border-[#775a00]/40 flex items-center justify-center bg-[#000508]/40 backdrop-blur-sm">
                <span className="font-serif text-[#fece57] text-base font-bold tracking-tighter">LN</span>
              </div>
            </div>
            {/* Nombre de Marca */}
            <div className="flex flex-col">
              <span className="font-serif text-white font-bold tracking-tight text-xl leading-none">
                Law<span className="text-[#ffdf98]">Nest</span>
              </span>
              <span className="text-[10px] text-[#eec14b] tracking-widest mt-1 opacity-90 uppercase font-semibold">
                JURISPRUDENCIAL
              </span>
            </div>
          </div>

          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f2027]/80 backdrop-blur-md border border-[#eec14b]/30 text-xs font-semibold text-[#ffdf98]">
            <span className="w-2 h-2 rounded-full bg-[#fece57] animate-pulse"></span>
            Sistema Corporativo v1.0
          </span>
        </div>

        {/* Titular Principal e Indicadores */}
        <div className="relative z-10 max-w-xl pb-6 lg:pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
            <ShieldCheck className="w-4 h-4 text-[#ffdf98]" />
            <span className="text-[11px] font-bold text-white tracking-wider uppercase">
              Seguridad Institucional
            </span>
          </div>
          <h1 className="font-serif text-3xl lg:text-4xl text-white font-semibold mb-3 tracking-tight drop-shadow-sm leading-tight">
            Encuentre a su <span className="italic font-normal text-[#ffdf98]">asesor legal de confianza</span>
          </h1>
          <p className="text-sm lg:text-base text-slate-200/90 max-w-lg mb-8 font-light leading-relaxed">
            Asegurando contratos y protegiendo su futuro a un solo clic. Experimente la síntesis rápida de documentos corporativos.
          </p>

          {/* Indicadores de carrusel */}
          <div aria-label="Diapositivas de características" className="flex items-center gap-2">
            <div className="h-1.5 w-8 rounded-full bg-[#eec14b] transition-all duration-300"></div>
            <div className="h-1.5 w-2 rounded-full bg-white/40 hover:bg-white/70 transition-all duration-200 cursor-pointer"></div>
            <div className="h-1.5 w-2 rounded-full bg-white/40 hover:bg-white/70 transition-all duration-200 cursor-pointer"></div>
          </div>
        </div>
      </aside>

      {/* PANEL DERECHO: Terminal de Autenticación */}
      <main className="relative w-full lg:w-1/2 bg-white flex flex-col justify-between p-6 sm:p-10 lg:p-12">
        {/* Barra Superior */}
        <div className="w-full flex justify-between lg:justify-end items-center mb-8 lg:mb-4">
          {/* Logo Móvil */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#0f2027] border border-[#eec14b]/60 flex items-center justify-center">
              <span className="font-serif text-[#fece57] text-xs font-bold">LN</span>
            </div>
            <span className="font-serif text-[#000508] font-bold text-lg">LawNest</span>
          </div>

          {/* Botón Registrarse */}
          <a
            href="#registrarse"
            onClick={(e) => { e.preventDefault(); alert('Modo demostración. Haga clic en Iniciar Sesión.'); }}
            className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-[#0f2027] text-white font-semibold text-xs border border-[#eec14b]/70 shadow-sm hover:shadow-md hover:bg-[#0d1d3c] transition-all duration-150"
          >
            Registrarse
          </a>
        </div>

        {/* Tarjeta de Formulario de Inicio de Sesión */}
        <div className="w-full max-w-md mx-auto my-auto py-4">
          <div className="text-left mb-8">
            <h2 className="font-serif text-2xl lg:text-3xl text-[#000508] font-semibold tracking-tight mb-2">
              ¡Bienvenido a LawNest!
            </h2>
            <p className="text-sm text-slate-500">
              Inicie sesión en su espacio legal de trabajo
            </p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Correo Electrónico */}
            <div>
              <label className="block text-[11px] font-bold text-slate-600 tracking-wider uppercase mb-2" htmlFor="email">
                CORREO ELECTRÓNICO DEL BUFFET
              </label>
              <div className="relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="abogado@lawnest.com"
                  className="block w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-lg text-[#000508] text-sm placeholder:text-slate-400 focus:border-[#0f2027] focus:ring-2 focus:ring-[#775a00]/20 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Contraseña */}
            <div>
              <label className="block text-[11px] font-bold text-slate-600 tracking-wider uppercase mb-2" htmlFor="password">
                CONTRASEÑA
              </label>
              <div className="relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="block w-full pl-10 pr-11 py-3 bg-white border border-slate-300 rounded-lg text-[#000508] text-sm tracking-wider placeholder:text-slate-400 focus:border-[#0f2027] focus:ring-2 focus:ring-[#775a00]/20 focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-[#000508] transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Fila de Opciones */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-[#0f2027] focus:ring-[#775a00]/30 cursor-pointer accent-[#0f2027]"
                />
                <label htmlFor="remember-me" className="ml-2 block text-xs text-slate-600 select-none cursor-pointer">
                  Recordarme
                </label>
              </div>
              <div>
                <a
                  href="#olvido"
                  onClick={(e) => { e.preventDefault(); alert('Solicitud de recuperación enviada al administrador.'); }}
                  className="text-xs font-semibold text-[#000508] hover:text-[#775a00] transition-colors"
                >
                  ¿Olvidó su contraseña?
                </a>
              </div>
            </div>

            {/* Botón Iniciar Sesión */}
            <button
              type="submit"
              className="w-full mt-2 py-3 px-6 rounded-lg bg-[#0f2027] text-white font-semibold text-sm border border-[#eec14b]/70 shadow-md hover:bg-[#0d1d3c] hover:shadow-lg transition-all duration-150 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Iniciar Sesión</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
            </button>
          </form>

          {/* Divisor */}
          <div className="relative my-7">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-4 text-slate-500 tracking-wider font-semibold uppercase text-[10px]">
                ACCESO INSTANTÁNEO
              </span>
            </div>
          </div>

          {/* Botones SSO */}
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onLogin({ email: 'abogado@lawnest.com' })}
              title="Continuar con Google Workspace"
              className="w-12 h-12 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 flex items-center justify-center transition-all duration-150 hover:shadow-sm active:scale-95 group cursor-pointer"
            >
              <svg className="w-5 h-5 transition-transform group-hover:scale-105" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => onLogin({ email: 'abogado@lawnest.com' })}
              title="Continuar con Microsoft Azure AD"
              className="w-12 h-12 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 flex items-center justify-center transition-all duration-150 hover:shadow-sm active:scale-95 group cursor-pointer"
            >
              <div className="grid grid-cols-2 gap-0.5 w-5 h-5 transition-transform group-hover:scale-105">
                <div className="bg-[#f25022] rounded-xs"></div>
                <div className="bg-[#7fba00] rounded-xs"></div>
                <div className="bg-[#00a4ef] rounded-xs"></div>
                <div className="bg-[#ffb900] rounded-xs"></div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => onLogin({ email: 'abogado@lawnest.com' })}
              title="Continuar con SSO Empresarial"
              className="w-12 h-12 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 flex items-center justify-center transition-all duration-150 hover:shadow-sm active:scale-95 group cursor-pointer"
            >
              <svg className="w-5 h-5 text-[#1877F2] fill-current transition-transform group-hover:scale-105" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Pie de Página */}
        <footer className="w-full text-center pt-6 border-t border-slate-200">
          <p className="text-xs text-slate-500">
            ¿Necesita acceso legal?{' '}
            <a href="#solicitar-cuenta" onClick={(e) => e.preventDefault()} className="text-[#000508] font-semibold underline underline-offset-4 hover:text-[#775a00] transition-colors">
              Solicitar una cuenta
            </a>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-3 text-[11px] text-slate-400">
            <a href="#terminos" onClick={(e) => e.preventDefault()} className="hover:text-slate-700 transition-colors">Términos de Práctica</a>
            <span>•</span>
            <a href="#privilegio" onClick={(e) => e.preventDefault()} className="hover:text-slate-700 transition-colors">Secreto Profesional</a>
            <span>•</span>
            <a href="#cumplimiento" onClick={(e) => e.preventDefault()} className="hover:text-slate-700 transition-colors">Estándares RGPD y del Colegio de Abogados</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
