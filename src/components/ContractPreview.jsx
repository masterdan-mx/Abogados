import React from 'react';

export default function ContractPreview({ contractRef, formData }) {
  const { contractType, name1, name2, address1, duration, rentAmount } = formData;

  const dateStr = new Date().toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="w-full flex justify-center py-2">
      {/* Contenedor simulador de hoja A4 en blanco */}
      <div
        ref={contractRef}
        className="w-full bg-white text-slate-900 shadow-2xl rounded-sm p-8 md:p-14 text-xs md:text-sm font-serif leading-relaxed border border-slate-200 min-h-[750px] flex flex-col justify-between"
        style={{ color: '#0f172a', backgroundColor: '#ffffff' }}
      >
        <div>
          {/* Encabezado del documento legal */}
          <div className="text-center pb-6 border-b-2 border-slate-900 mb-8">
            <p className="text-xs uppercase tracking-widest font-sans text-slate-500 font-semibold mb-1">BUFFET DE ABOGADOS "LEX & ARMA"</p>
            <h2 className="text-lg md:text-2xl font-bold uppercase tracking-wider font-serif text-slate-900">
              {contractType === 'arrendamiento' && 'CONTRATO DE ARRENDAMIENTO DE BIEN INMUEBLE'}
              {contractType === 'nda' && 'ACUERDO DE CONFIDENCIALIDAD Y NO DIVULGACIÓN (NDA)'}
              {contractType === 'servicios' && 'CONTRATO DE PRESTACIÓN DE SERVICIOS PROFESIONALES'}
              {contractType === 'compraventa' && 'CONTRATO PRIVADO DE COMPRAVENTA DE BIEN INMUEBLE'}
            </h2>
            <p className="text-xs italic text-slate-600 mt-2 font-sans">
              expediente electrónico N° {Math.floor(100000 + Math.random() * 900000)}
            </p>
          </div>

          {/* Cuerpo según el tipo de contrato elegido */}
          {contractType === 'arrendamiento' && (
            <div className="space-y-6 text-slate-800 font-serif">
              <p>
                En la ciudad de México, a <span className="font-semibold underline">{dateStr}</span>, comparecen por una parte el/la C.{' '}
                <strong className="text-slate-950 uppercase underline font-sans bg-amber-50 px-1">{name1 || '________________________'}</strong>, a quien en lo sucesivo se le denominará <strong>"EL ARRENDADOR"</strong>, y por otra parte el/la C.{' '}
                <strong className="text-slate-950 uppercase underline font-sans bg-amber-50 px-1">{name2 || '________________________'}</strong>, a quien en lo sucesivo se le denominará <strong>"EL ARRENDATARIO"</strong>, manifestando ambas partes contar con la capacidad legal suficiente para obligarse conforme a las siguientes:
              </p>

              <h3 className="font-bold text-center uppercase tracking-wide border-y border-slate-300 py-1 font-sans text-xs">CLÁUSULAS</h3>

              <div className="space-y-4">
                <p>
                  <strong>PRIMERA. OBJETO.–</strong> "EL ARRENDADOR" entrega en arrendamiento y "EL ARRENDATARIO" recibe en dicho concepto el inmueble ubicado en:{' '}
                  <span className="font-semibold underline uppercase bg-amber-50 px-1">{address1 || '________________________________________________'}</span>.
                </p>

                <p>
                  <strong>SEGUNDA. PLAZO Y VIGENCIA.–</strong> Las partes convienen de común acuerdo que el plazo forzoso del presente contrato será de:{' '}
                  <span className="font-semibold underline uppercase bg-amber-50 px-1">{duration || '________'}</span>, contados a partir de la firma del presente instrumento.
                </p>

                <p>
                  <strong>TERCERA. RENTA MENSUAL.–</strong> "EL ARRENDATARIO" se obliga a pagar a "EL ARRENDADOR" o a quien sus derechos represente, la cantidad mensual de:{' '}
                  <span className="font-bold text-slate-950 underline bg-amber-50 px-1">{rentAmount ? `$${rentAmount} MXN` : '$________ MXN'}</span> por concepto de renta pactada, de forma anticipada dentro de los primeros cinco días de cada mes.
                </p>

                <p>
                  <strong>CUARTA. USO Y DESTINO.–</strong> El inmueble objeto de este contrato será destinado exclusivamente para uso residencial y no podrá ser subarrendado sin autorización previa por escrito de "EL ARRENDADOR".
                </p>
              </div>
            </div>
          )}

          {contractType === 'nda' && (
            <div className="space-y-6 text-slate-800 font-serif">
              <p>
                Conste por el presente documento el Acuerdo de Confidencialidad (NDA) celebrado entre el/la C.{' '}
                <strong className="text-slate-950 uppercase underline font-sans bg-amber-50 px-1">{name1 || '________________________'}</strong> (en adelante <strong>"LA PARTE REVELADORA"</strong>) y el/la C.{' '}
                <strong className="text-slate-950 uppercase underline font-sans bg-amber-50 px-1">{name2 || '________________________'}</strong> (en adelante <strong>"LA PARTE RECEPTORA"</strong>).
              </p>

              <h3 className="font-bold text-center uppercase tracking-wide border-y border-slate-300 py-1 font-sans text-xs">CLÁUSULAS</h3>

              <div className="space-y-4">
                <p>
                  <strong>PRIMERA. INFORMACIÓN CONFIDENCIAL.–</strong> Toda la información técnica, comercial o financiera compartida con relación a las instalaciones situadas en{' '}
                  <span className="font-semibold underline uppercase bg-amber-50 px-1">{address1 || '________________________________________________'}</span> ostentará carácter estrictamente privado.
                </p>

                <p>
                  <strong>SEGUNDA. DURACIÓN DE LA OBLIGACIÓN.–</strong> La obligación de confidencialidad pactada en el presente instrumento tendrá una validez de:{' '}
                  <span className="font-semibold underline uppercase bg-amber-50 px-1">{duration || '________'}</span> a partir de la entrega de la información.
                </p>

                <p>
                  <strong>TERCERA. PENA CONVENCIONAL.–</strong> En caso de divulgación no autorizada, "LA PARTE RECEPTORA" responderá por daños y perjuicios estipulados en un monto base de:{' '}
                  <span className="font-bold text-slate-950 underline bg-amber-50 px-1">{rentAmount ? `$${rentAmount} MXN` : '$________ MXN'}</span>.
                </p>
              </div>
            </div>
          )}

          {contractType === 'servicios' && (
            <div className="space-y-6 text-slate-800 font-serif">
              <p>
                Contrato de Prestación de Servicios Profesionales que celebran el/la C.{' '}
                <strong className="text-slate-950 uppercase underline font-sans bg-amber-50 px-1">{name1 || '________________________'}</strong> (el <strong>"CLIENTE"</strong>) y el/la C.{' '}
                <strong className="text-slate-950 uppercase underline font-sans bg-amber-50 px-1">{name2 || '________________________'}</strong> (el <strong>"PRESTADOR DE SERVICIOS"</strong>).
              </p>

              <h3 className="font-bold text-center uppercase tracking-wide border-y border-slate-300 py-1 font-sans text-xs">CLÁUSULAS</h3>

              <div className="space-y-4">
                <p>
                  <strong>PRIMERA. LUGAR DE PRESTACIÓN.–</strong> Los servicios acordados se prestarán en las dependencias ubicadas en:{' '}
                  <span className="font-semibold underline uppercase bg-amber-50 px-1">{address1 || '________________________________________________'}</span>.
                </p>

                <p>
                  <strong>SEGUNDA. PLAZO DE ENTREGA.–</strong> El servicio se ejecutará durante un periodo total de:{' '}
                  <span className="font-semibold underline uppercase bg-amber-50 px-1">{duration || '________'}</span>.
                </p>

                <p>
                  <strong>TERCERA. HONORARIOS Y CONTRAPRESTACIÓN.–</strong> El "CLIENTE" abonará la suma fija de:{' '}
                  <span className="font-bold text-slate-950 underline bg-amber-50 px-1">{rentAmount ? `$${rentAmount} MXN` : '$________ MXN'}</span> contra entrega de los entregables aprobados.
                </p>
              </div>
            </div>
          )}

          {contractType === 'compraventa' && (
            <div className="space-y-6 text-slate-800 font-serif">
              <p>
                Contrato Privado de Compraventa que celebran por una parte el/la C.{' '}
                <strong className="text-slate-950 uppercase underline font-sans bg-amber-50 px-1">{name1 || '________________________'}</strong> (el <strong>"VENDEDOR"</strong>) y por la otra el/la C.{' '}
                <strong className="text-slate-950 uppercase underline font-sans bg-amber-50 px-1">{name2 || '________________________'}</strong> (el <strong>"COMPRADOR"</strong>).
              </p>

              <h3 className="font-bold text-center uppercase tracking-wide border-y border-slate-300 py-1 font-sans text-xs">CLÁUSULAS</h3>

              <div className="space-y-4">
                <p>
                  <strong>PRIMERA. OBJETO.–</strong> "EL VENDEDOR" transmite la propiedad del inmueble sito en:{' '}
                  <span className="font-semibold underline uppercase bg-amber-50 px-1">{address1 || '________________________________________________'}</span>.
                </p>

                <p>
                  <strong>SEGUNDA. PRECIO Y FORMA DE PAGO.–</strong> El precio total pactado de la compraventa asciende a la cantidad de:{' '}
                  <span className="font-bold text-slate-950 underline bg-amber-50 px-1">{rentAmount ? `$${rentAmount} MXN` : '$________ MXN'}</span>, el cual se liquidará en un plazo de:{' '}
                  <span className="font-semibold underline uppercase bg-amber-50 px-1">{duration || '________'}</span>.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Sección de Firmas al final de la página */}
        <div className="mt-16 pt-8 border-t border-slate-300">
          <p className="text-center text-xs italic mb-12">
            En fe de lo cual las partes firman de conformidad al margen y al calce del presente documento.
          </p>
          <div className="grid grid-cols-2 gap-12 text-center text-xs font-sans">
            <div>
              <div className="border-t border-slate-900 pt-2 font-bold uppercase text-slate-950">
                {name1 || 'PARTE UNO / ARRENDADOR'}
              </div>
              <p className="text-slate-500 text-[10px]">FIRMA AUTÓGRAFA Y HUELLA</p>
            </div>
            <div>
              <div className="border-t border-slate-900 pt-2 font-bold uppercase text-slate-950">
                {name2 || 'PARTE DOS / ARRENDATARIO'}
              </div>
              <p className="text-slate-500 text-[10px]">FIRMA AUTÓGRAFA Y HUELLA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
