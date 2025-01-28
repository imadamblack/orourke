'use client';
import { useForm, FormProvider } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Radio, Checkbox } from '../components/form/formAtoms';
import { useRouter } from 'next/router';
import { setCookie, getCookie } from 'cookies-next';
import { info } from '../../info';
import fbEvent from '../services/fbEvents';
import { restrictNumber } from '../utils/formValidators';

const formSteps = [
  {
    name: 'age',
    title: `Ok, prometo hacer esto lo más rápido y sencillo posible, <br/>son solo 6 preguntas.`,
    description: '¿En qué rango de edad te encuentras?',
    type: 'radio',
    options: [
      {value: '0-24', label: '24 años o menos'},
      {value: '25-40', label: 'De 25 a 40 años'},
      {value: '41-50', label: 'De 41 a 50 años'},
      {value: '51-60', label: 'De 51 a 60 años'},
      {value: '60+', label: 'Más de 60 años'},
    ],
    cols: 1,
    inputOptions: {required: true}
  },
  {
    name: 'horizon',
    title: '¿Por cuánto tiempo planeas dejar tu dinero invertido?',
    description: 'Ojo, tu dinero nunca se congela, es solo para darnos una idea de tu perfil',
    type: 'radio',
    options: [
      {value: '3-meses', label: 'Menos de 3 meses'},
      {value: '1-año', label: 'Hasta 1 año'},
      {value: '3-años', label: 'Hasta 3 años'},
      {value: '5-años', label: '5 años o más'},
    ],
    cols: 1,
    inputOptions: {required: true}
  },
  {
    name: 'goal',
    title: '¿Cuál es tu principal meta de inversión?',
    description: 'Selecciona una opción por favor',
    type: 'radio',
    options: [
      {value: 'retiro', label: 'Mi retiro'},
      {value: 'ingresos', label: 'Tener ingresos pasivos'},
      {value: 'emergencias', label: 'Ahorro para emergencias'},
      {value: 'educacion', label: 'La educación de mis hijos'},
    ],
    cols: 1,
    inputOptions: {required: true}
  },
  {
    name: 'savings',
    title: '¿Cómo describirías tu "colchón" de ahorros?',
    description: 'Selecciona una opción por favor',
    type: 'radio',
    options: [
      {value: 'insuficiente', label: 'Mis reservas son insuficientes'},
      {value: 'limitado', label: 'Tengo ahorro pero en una emergencia tomaría de mis inversiones'},
      {value: 'adecuado', label: 'Cuento con un par de meses de sueldo ahorrados'},
      {value: 'super', label: 'Tengo más que suficiente y otras inversiones que cubren mis necesidades'},
    ],
    cols: 1,
    inputOptions: {required: true}
  },
  {
    name: 'knowledge',
    title: '¿Cuánto sabes sobre inversiones?',
    description: 'Selecciona una opción por favor',
    type: 'radio',
    options: [
      {value: 'bajo', label: 'Sé muy poco pero me parece interesante'},
      {value: 'medio', label: 'Más o menos, no es la primera vez que invierto'},
      {value: 'alto', label: 'Conozco bien el mercado financiero'},
    ],
    cols: 1,
    inputOptions: {required: true}
  },
  {
    name: 'budget',
    title: '¿En cuál de estos rangos te sientes cómodo para realizar tu inversión mensual?',
    description: 'Selecciona una opción por favor',
    type: 'radio',
    options: [
      {value: '3-5k', label: 'Entre $3,000 y $5,000 mxn mensuales'},
      {value: '5-10k', label: 'Entre $5,000 y $10,000 mxn mensuales'},
      {value: '10k+', label: 'Más de $10,000 mxn mensuales'},
    ],
    cols: 1,
    inputOptions: {required: true}
  },
];

export default function Survey() {
  const [formStep, setFormStep] = useState(0);
  const [inputError, setInputError] = useState(null);
  const [sending, setSending] = useState(false);
  const methods = useForm({mode: 'all'});
  const {
    register,
    handleSubmit,
    setError,
    formState: {errors},
    watch
  } = methods;

  const router = useRouter();

  useEffect(() => {
    formSteps.map((fs) => setError(fs.name, {}));
  }, [setError]);

  const handleNext = () => {
    const formStepName = formSteps[formStep].name;
    if (errors[formStepName]) {
      setInputError(formStep);
      return;
    }
    setInputError(null);
    window.scrollTo(0, 0);
    return formStep < formSteps.length - 1 && setFormStep(formStep + 1);
  };

  const onSubmit = (data) => {
    setSending(true);
    const lead = getCookie('lead');
    const {id, email, phone, fullName} = JSON.parse(lead);
    const _fbc = getCookie('_fbc');
    const _fbp = getCookie('_fbp');

    const payload = {...data, id, fullName, email, phone, _fbc, _fbp};
    console.log('payload',payload);

    fetch(info.surveyWebhook, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response)
      .then(() => fbEvent(
        'Lead',
        {email, phone, externalID: id},
      ))
      // Redirect to Thank you page and Scheduler
      .then(() => {
        if (info.surveyRedirect !== '') {
          const forwardLink = document.createElement('a');
          forwardLink.href = info.surveyRedirect + `?name=${fullName}&email=${email}&phone${phone}`;
          forwardLink.target = '_blank';
          forwardLink.click();
        }

        router.push(`/thankyou`);
      });
  };

  return (
    <div className="relative flex flex-grow bg-black pointer-events-none">
      <div className="container !p-0 flex flex-col flex-grow items-center pointer-events-auto touch-auto">
        <div className="survey-card">
          <div className="w-full absolute left-0 top-0 bg-gray-100">
            <div className={`h-4 bg-brand-1`} style={{width: `${((formStep + 1) / formSteps.length) * 100}%`}}/>
          </div>
          <p className="-ft-1">{formStep + 1}/{formSteps.length}</p>
          <FormProvider {...methods}>
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              {formSteps.map((fs, idx) => {
                if (fs.type === 'text') {
                  const {name, title, description, placeholder, inputOptions} = fs;
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div className={`my-20 flex-grow ${formStep === idx ? 'block' : 'hidden'}`}>
                      <p className="ft-4 sans font-bold" dangerouslySetInnerHTML={{__html: title}}/>
                      <p className="ft-2 mt-4 mb-12" dangerouslySetInnerHTML={{__html: description}}/>
                      <input
                        {...register(name, inputOptions)}
                        placeholder={placeholder}
                        className={inputError === idx ? '!border-brand-2 mt-12' : 'mt-12'}
                      />
                    </div>
                  );
                }
                if (fs.type === 'number') {
                  const {name, title, description, placeholder, inputOptions} = fs;
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div className={`my-20 flex-grow ${formStep === idx ? 'block' : 'hidden'}`}>
                      <p className="ft-4 sans font-bold" dangerouslySetInnerHTML={{__html: title}}/>
                      <p className="ft-2 mt-4 mb-12" dangerouslySetInnerHTML={{__html: description}}/>
                      <input
                        {...register(name, inputOptions)}
                        placeholder={placeholder}
                        onKeyDown={restrictNumber}
                        className={inputError === idx ? '!border-brand-2 mt-12' : 'mt-12'}
                      />
                    </div>
                  );
                }

                if (fs.type === 'radio') {
                  const {name, title, description, placeholder, inputOptions, options, cols} = fs;
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div className={`my-20 ${formStep === idx ? 'flex flex-col' : 'hidden'}`}>
                      <p className="ft-4 sans font-bold" dangerouslySetInnerHTML={{__html: title}}/>
                      <p className="ft-2 mt-4 mb-12" dangerouslySetInnerHTML={{__html: description}}/>
                      <Radio
                        name={name}
                        inputOptions={inputOptions}
                        placeholder={placeholder}
                        options={options}
                        optCols={cols}
                        className={inputError === idx ? '!border-brand-2' : undefined}
                      />
                    </div>
                  );
                }
                if (fs.type === 'checkbox') {
                  const {name, title, description, placeholder, inputOptions, options, cols} = fs;
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div className={`my-20 ${formStep === idx ? 'flex flex-col' : 'hidden'}`}>
                      <p className="ft-4 sans font-bold" dangerouslySetInnerHTML={{__html: title}}/>
                      <p className="ft-2 mt-4 mb-12" dangerouslySetInnerHTML={{__html: description}}/>
                      <Checkbox
                        name={name}
                        inputOptions={inputOptions}
                        placeholder={placeholder}
                        options={options}
                        optCols={cols}
                        className={inputError === idx ? '!border-brand-2' : undefined}
                      />
                    </div>
                  );
                }
                if (fs.type === 'textarea') {
                  const {name, title, description, placeholder, inputOptions, cols} = fs;
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div className={`my-20 ${formStep === idx ? 'block' : 'hidden'}`}>
                      <p className="ft-4 sans font-bold" dangerouslySetInnerHTML={{__html: title}}/>
                      <p className="ft-2 mt-4 mb-12" dangerouslySetInnerHTML={{__html: description}}/>
                      <textarea
                        {...register(name, inputOptions)}
                        placeholder={placeholder}
                        rows={cols}
                        className={inputError === idx ? '!border-brand-2 mt-12' : 'mt-12'}
                      />
                    </div>
                  );
                }
              })}

              <div className="flex justify-between w-full mt-auto">
                <button
                  type="button"
                  onClick={() => setFormStep(formStep - 1)}
                  className="!bg-transparent !text-brand-3 border-none hover:text-brand-1 disabled:!text-gray-100"
                  disabled={formStep <= 0}
                >Atrás
                </button>
                <button
                  type={formStep < formStep.length - 1 ? 'button' : 'submit'}
                  disabled={sending}
                  onClick={() => handleNext()}
                  className="mt-auto"
                >
                  {sending && <span className="animate-spin mr-4">+</span>}
                  {formStep === formSteps.length - 1 ? 'Agendar cita' : sending ? 'Abriendo Calendario' : 'Siguiente'}
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const {req, res, query: {id}} = ctx;
  const lead = getCookie('lead', {req, res});

  if (!lead || lead === 'null' || Object.keys(lead).length === 0) {
    if (!id) {
      return {
        redirect: {
          permanent: false,
          destination: '/#contact',
        },
      };
    } else {
      setCookie('lead', {...lead, id}, {req, res});
      return {props: {}};
    }
  }

  return {props: {}}
}
