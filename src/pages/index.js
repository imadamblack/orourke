import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
import Faqs from '../components/faqs';

import i00 from '../../public/landing2/01.png';
import i02 from '../../public/landing/inversor03.png';
import i03 from '../../public/landing2/03.png';
import i04 from '../../public/landing2/05.png';
import i05 from '../../public/landing/Casos01.png';
import i06 from '../../public/landing/006.png';
import i07 from '../../public/landing/FAQS01.png';
import c02 from '../../public/landing/c02.png';
import p01 from '../../public/landing/p01.png';
import p02 from '../../public/landing/p02.webp';
import p03 from '../../public/landing/p03.png';
import p04 from '../../public/landing/p04.webp';
import p05 from '../../public/landing/p05.png';
import p06 from '../../public/landing/p06.png';
import p07 from '../../public/landing/p07.png';
import p08 from '../../public/landing/p08.png';
import p09 from '../../public/landing/p09.png';
import p10 from '../../public/landing/p10.png';
import p11 from '../../public/landing/p11.png';
import p12 from '../../public/landing/p12.png';
import p13 from '../../public/landing/p13.png';
import p14 from '../../public/landing/p14.png';
import p15 from '../../public/landing/p15.png';
import p16 from '../../public/landing/p16.png';
import p17 from '../../public/landing/p17.png';
import p18 from '../../public/landing/p18.png';
import p19 from '../../public/landing/p19.png';
// imports
import img_logo1 from '../../public/landing/icons/01.png';
import img_logo2 from '../../public/landing/icons/02.png';
import img_logo3 from '../../public/landing/icons/03.png';
import img_inversor_01 from '../../public/landing/inversor01.png';
import img_inversor_02 from '../../public/landing/inversor02.png';
import img_inversor_03 from '../../public/landing2/06.png';


export default function Home() {
  const [lastClick, setLastClick] = useState('');

  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => {
        fbq('trackCustom', `Scroll Depth: ${value}`);
        console.log('Scroll Depth', value);
      },
    });
  });

  const cta = {
    main: 'Agenda una llamada, clic',
    description: 'Obtén una asesoría de inversión, sin costo',
  };

  const faqs = [
    {
      q: '¿Qué pasa si necesito retirar mi dinero antes de tiempo?',
      a: 'Puedes retirar tu dinero cualquier día sin perder los rendimientos generados hasta ese momento.',
    },
    {
      q: '¿Es realmente seguro este fondo? ',
      a: 'Sí, nuestros fondos están regulados por la CNBV y gestionados por asesores certificados, garantizando la seguridad de tu inversión. ',
    },
    {
      q: '¿Puedo empezar con una pequeña cantidad?',
      a: 'Claro, puedes comenzar desde $1,000 MXN, lo que te permite explorar la inversión sin grandes compromisos.',
    },
    {
      q: '¿Cuánto tiempo toma abrir la cuenta?',
      a: 'El proceso de apertura es rápido. Tras la consulta inicial y la entrega de documentos, tendrás tu cuenta en 48 horas.',
    },
    {
      q: '¿Cómo sé que realmente obtendré los rendimientos prometidos? ',
      a: 'Contamos con rendimientos históricos sólidos y un equipo que revisa y ajusta estrategias para garantizar el mayor retorno posible bajo el marco de regulación.',
    },
  ];

  return (
    <>

      {/*___HERO__________________________________________________________*/}
      <section className="relative min-h-[80vh] w-full flex flex-col md:justify-end items-center bg-brand-2">

        <div className="relative min-h-[24rem] flex-grow w-full md:absolute top-0 inset-x-0 bottom-1/2 md:bottom-0">
          <div
            className="w-full h-[16rem] bottom-0 absolute bg-gradient-to-t from-brand-2 via-transparent to-transparent md:opacity-60 z-10"/>
          <Image src={i00} layout="fill" className="object-cover object-bottom"/>
        </div>
        {/*<div className=" flex inline">*/}
        {/*  /!*Logo de Conducef*!/*/}
        {/*  <div className="flex justify-center items-center mx-4 p-4">*/}
        {/*    <Link href="/" passhref>*/}
        {/*      <Image src={p13} alt="logo Conducef" width={72} height={72} objectFit="contain"/>*/}
        {/*    </Link>*/}
        {/*  </div>*/}
        {/*  /!*Logo de Buro*!/*/}
        {/*  <div className="flex justify-center items-center mx-4 p-4">*/}
        {/*    <Link href="/" passhref>*/}
        {/*      <Image src={p09} alt="logo buroio de credito" width={72} height={72} objectFit="contain"/>*/}
        {/*    </Link>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="container w-full text-center text-white z-10 p-8">
          <h1
            className="md:w-2/3 mx-auto relative font-medium ft-9 text-white [text-shadow:_2px_2px_0_rgb(0_0_0_/_20%)]">
            {/*¿Sigues creyendo que ahorrar en tu cuenta de débito es lo mejor? <br/>*/}
            {/*Déjame te cuento que Santa Claus son los papás.*/}
            Comienza a invertir en una empresa con más de 50 años en el mercado, no en otra pirámide
          </h1>
          <p className="mt-8">Abre tu cuenta desde $1,000<br/>Cero Comisiones<br/>Liquidez Diaria</p>
          <div className="flex flex-col justify-start items-center mt-12">
            <Link href="#contact">
              <a onClick={() => setLastClick('hero')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 md:text-left">{cta.description}</p>
          </div>
        </div>
      </section>

      {/*___READ_01__________________________________________________________*/}

      <section className="reading-container my-16">
        <p>
          {/*Somos un equipo de obsesivos por los detalles, nos apasiona crear espacios donde la calidad y la innovación*/}
          {/*hagan que tu inversión se multiplique.<br/><br/>*/}
          Olvídate de ahorrar para tu futuro en
          bancos aburridos que solo cobran
          intereses y no comparten.<br/><br/>
          Aquí, estamos para demostrar que tu
          dinero puede crecer y traerte alegría
          hoy, mañana o a tus 60.<br/><br/>
          Nuestros asesores certificados saben
          cómo hacer que cada peso esté
          seguro y te genere más dinero, todo
          mientras tú te encargas de disfrutar
          la vida.<br/><br/>
          Y no, no somos una pirámide.<br/><br/>
          Y sí, si estamos regulados por la
          CNBV.<br/><br/>
          Así, sin complicaciones, este fondo
          con más de 50 años se adapta a tu
          estilo y objetivos.<br/>
        </p>
        <div className="flex flex-col justify-center items-center">
          <Link href="#contact">
            <a onClick={() => setLastClick('story')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-1 text-center">{cta.description}</p>
        </div>
      </section>

      {/*___BENEFICIOS__________________________________________________________*/}

      <Blockbuster
        overhead="Beneficios"
        title="No limites a tu dinero en una cuenta de débito, déjalo crecer"
        image={i02}
      />
      <section className="reading-container my-4">
        <h5>
          No dejes que tu dinero pierda valor con la inflación y aprovecha rendimientos según tu perfil de inversor.
        </h5>
      </section>


      <section className="min-h-[40vh] w-screen flex items-center justify-center  py-16 mt-0 mb-0 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-full max-w-screen-xl">
          {/* Tarjeta 1 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <Image
              src={img_logo1}// Reemplaza con tu URL de logo
              alt="Logo 1"
              className="w-24 h-24 object-cover mb-7"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 py-10">Rendimientos sólidos:</h3>
            <p className="text-gray-600 text-center">
              Haz que tu dinero crezca con tasas anuales de entre <b>9% y 12%</b>, superando lo que ofrecen cuentas de
              ahorro o pagarés.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <Image
              src={img_logo2} // Reemplaza con tu URL de logo
              alt="Logo 2"
              className="w-24 h-24 object-cover mb-7"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 py-10">Liquidez y flexibilidad:</h3>
            <p className="text-gray-600 text-center">
              Podrás retirar tu <b>dinero cuando lo necesites</b>, sin sacrificar rentabilidad.
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <Image
              src={img_logo3} // Reemplaza con tu URL de logo
              alt="Logo 3"
              className="w-24 h-24 object-cover mb-7"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 py-10">Asesoría experta:</h3>
            <p className="text-gray-600 text-center">
              Nuestro <b>equipo certificado y regulado</b> está disponible para guiar cada paso de tu inversión.
            </p>
          </div>
        </div>
      </section>


      <section>
        <div className="flex flex-col justify-center items-center py-12">
          <Link href="#contact">
            <a onClick={() => setLastClick('benefits')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-1 text-center">{cta.description}</p>
        </div>

      </section>

      {/*___ENTREGABLES__________________________________________________________*/}

      <Blockbuster
        overhead="Qué esperar"
        title="No somos una pirámide, somos una empresa con 50 años que sabe cuidar tu dinero."
        image={i03}
      />
      <section className="reading-container my-16 space-y-32">
        <p>Te cuento como es invertir con nosotros:</p>

        <ol>
          <li className="ft-2 mb-4">Desde la primera consulta, recibirás <b>información clara y personalizada.</b></li>
          <li className="ft-2 mb-4"> Te guiaremos en la elección del fondo ideal para tu perfil, y gracias a
            nuestro<b> proceso regulado, tu capital estará seguro en todo momento.</b>
          </li>
          <li className="ft-2 mb-4">Desde el depósito inicial hasta la compra del fondo, cada etapa se realiza con la
            máxima transparencia y
            <b> el respaldo de instituciones reguladoras</b>.
          </li>
          <li className="ft-2 mb-4">Queremos transformar tus expectativas de inversión en una <b>realidad tangible y
            accesible</b>.
          </li>
          <li className="ft-2 mb-4">Tenemos un equipo con más de <b>50 asesores certificados por la AMIB</b> (Asociación
            Mexicana de Instituciones Bursátiles) para que tu inversión crezca
            como lo planeas.
          </li>
        </ol>

        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact">
            <a onClick={() => setLastClick('process')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-1 text-center">{cta.description}</p>
        </div>
      </section>

      {/*___TARGET__________________________________________________________*/}

      <Blockbuster
        overhead="Target"
        title="¿Eres más conservador o vas por todas las fichas?"
        image={i04}
      />

      <section className="my-16 w-screen">
        <div className="container grid md:grid-cols-3 gap-8">
          <div className="w-full relative border rounded-2xl border-brand-3 shadow-md bg-black">
            <div className="flex overflow-hidden h-[32rem] rounded-2xl">
              <Image src={img_inversor_01} className="object-cover object-center"/>
            </div>
            <div className="p-8 ">
              <h3 className="!mb-0">Conservador</h3>
              <p className="!mt-0 text-white">
                Si prefieres dormir tranquilo y
                ver un crecimiento constante
                sin sorpresas, este fondo ofrece
                seguridad regulada, liquidez diaria,
                y rendimientos competitivos, ideal
                para quienes buscan estabilidad sin
                arriesgar su capital.
              </p>
            </div>
          </div>
          <div className="w-full relative border rounded-2xl border-brand-3 shadow-md bg-black">
            <div className="flex overflow-hidden h-[32rem] rounded-2xl">
              <Image src={img_inversor_02} className="object-cover object-center"/>
            </div>
            <div className="p-8 ">
              <h3 className="mb-0">Moderado</h3>
              <p className="!mt-0 text-white">
                Si estás listo para un balance entre
                seguridad y rendimiento, puedes
                diversificar en activos sólidos y
                aprovechar un retorno de hasta el
                12% anual. Con nuestra asesoría,
                puedes ajustar tu inversión a tus
                necesidades sin perder flexibilidad
                ni control.
              </p>
            </div>
          </div>
          <div className="w-full relative border rounded-2xl border-brand-3 shadow-md bg-black">
            <div className="flex overflow-hidden h-[32rem] rounded-2xl">
              <Image src={img_inversor_03} className="object-cover object-center"/>
            </div>
            <div className="p-8 ">
              <h3 className="!mb-0">Agresivo</h3>
              <p className="!mt-0 text-white">
                ¿Buscas maximizar el crecimiento?
                Nuestro fondo te permite invertir sin
                límites superiores y diversificar en
                múltiples activos. Con el respaldo
                de expertos, puedes acceder a una
                estrategia de alto rendimiento para
                alcanzar metas ambiciosas sin
                sacrificar la seguridad.
              </p>
            </div>
          </div>
        </div>

      </section>


      <section className="reading-container my-10">
        <div className="flex flex-col justify-center items-center mt-2">
          <Link href="#contact">
            <a onClick={() => setLastClick('target')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-1 text-center">{cta.description}</p>
        </div>

      </section>

      {/*___CASOS__________________________________________________________*/}

      <Blockbuster
        overhead="Atención"
        title="Nuestra atención nos ha mantenido abiertos por más de 50 años"
        image={i05}
      />
      <section className="reading-container my-16 space-y-32">
        <p>Te cuento como es invertir con nosotros:</p>

        <ol>
          <li className="ft-2 mb-4"><b>Consulta y asesoría gratuita</b> en cualquier momento del año.</li>
          <li className="ft-2 mb-4"><b>Guía de inversión personalizada</b>, adaptada a tus objetivos financieros.
          </li>
          <li className="ft-2 mb-4">Revisión trimestral de portafolio para <b>maximizar rendimientos</b> y ajustar la
            estrategia.
          </li>
        </ol>

        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact">
            <a onClick={() => setLastClick('atencion')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-1 text-center">{cta.description}</p>
        </div>
      </section>

      {/*___TESTIMONIOS__________________________________________________________*/}

      {/* Sin Render
      <Blockbuster
        overhead="Testimonios"
        title="Y no solo lo digo yo, esto es lo que han dicho nuestros clientes"
        image={i04}
      />
      <section className="my-16">
        <div className="container grid md:grid-cols-3 gap-8">
          <div className="w-full relative">
            <Image src={t01} className="object-cover"/>
          </div>
          <div className="w-full relative">
            <Image src={t02} className="object-cover"/>
          </div>
          <div className="w-full relative">
            <Image src={t03} className="object-cover"/>
          </div>
        </div>

        <div className="reading-container">
          <div className="flex flex-col justify-center items-center mt-16">
            <Link href="#contact">
              <a onClick={() => setLastClick('testimonials')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-1 text-center">{cta.description}</p>
          </div>
        </div>

      </section>
*/}

      {/*___ALIANZAS__________________________________________________________*/}

      <Blockbuster
        overhead="Alianzas"
        title="Dicen que para ser exitoso te juntes con los mejores de la industria"
        image={i06}
      />
      <section className="my-16">
        <div className="container grid grid-cols-3 md:grid-cols-6 gap-1">
          <div className="relative p-8 flex justify-center items-center"><Image src={p01}/></div>
          {/*Scotia*/}
          <div className="relative p-8 flex justify-center items-center"><Image src={p06}/></div>
          {/*Santander*/}
          <div className="relative p-8 flex justify-center items-center"><Image src={p07}/></div>
          {/*banorte*/}
          <div className="relative p-8 flex justify-center items-center"><Image src={p02}/></div>
          {/*CompassGrup*/}
          <div className="relative p-8 flex justify-center items-center"><Image src={p03}/></div>
          {/*Afirme*/}
          <div className="relative p-8 flex justify-center items-center"><Image src={p04}/></div>
          {/*Valmex*/}
          <div className="relative p-8 flex justify-center items-center"><Image src={p05}/></div>
          {/*Azimut*/}
          <div className="relative p-8 flex justify-center items-center"><Image src={p08}/></div>
          {/*btg*/}
          {/*<div className="relative p-8 flex justify-center items-center"><Image src={p09}/></div>*/} {/*Buro*/}
          <div className="relative p-8 flex justify-center items-center"><Image src={p10}/></div>
          {/*Franklin*/}
          <div className="relative p-8 flex justify-center items-center"><Image src={p11}/></div>
          {/*GBM*/}
          <div className="relative p-8 flex justify-center items-center"><Image src={p12}/></div>
          {/*SURA*/}
          {/*<div className="relative p-8 flex justify-center items-center"><Image src={p13}/></div>*/} {/*Condusef*/}
          <div className="relative p-8 flex justify-center items-center"><Image src={p14}/></div>
          {/*Intercam*/}
          <div className="relative p-8 flex justify-center items-center"><Image src={p15}/></div>
          {/*Invex*/}
          <div className="relative p-8 flex justify-center items-center"><Image src={p16}/></div>
          {/*NacionalFin*/}
          <div className="relative p-8 flex justify-center items-center"><Image src={p17}/></div>
          {/*Finamex*/}
          <div className="relative p-8 flex justify-center items-center"><Image src={p18}/></div>
          {/*Vector*/}
          <div className="relative p-8 flex justify-center items-center"><Image src={p19}/></div>
          {/*Monex*/}
        </div>
        <div className="reading-container">
          <div className="flex flex-col justify-center items-center mt-16">
            <Link href="#contact">
              <a onClick={() => setLastClick('testimonials')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-1 text-center">{cta.description}</p>
          </div>
        </div>
      </section>

      {/*___FAQS__________________________________________________________*/}

      <Blockbuster
        overhead="Preguntas frecuentes"
        title="Si tienes dudas, probablemente estén aquí:"
        image={i07}
      />
      <section className="container py-8">
        <Faqs
          questions={faqs}
        />
      </section>

      {/*___CONTACTO__________________________________________________________*/}

      {/* Contacto  */}
      <section id="contact" className="border-t border-brand-1 bg-black py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="font-semibold text-white tracking-wide">
              Agenda hoy mismo una sesión gratuita de asesoría patrimonial
            </h2>
            <div className="mt-20 mb-12">
              <p className="ft-1 text-white">Ya llegaste hasta aquí.</p>
              <p className="ft-1 text-white">
                Compártenos unos datos y llena unas preguntas para que uno de nuestros asesores
                certificados por la AMIB se ponga en contacto contigo.
              </p>
            </div>
            <OptInForm
              lastClick={lastClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}
