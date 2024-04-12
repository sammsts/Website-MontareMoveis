import './style.css';
import { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import ScrollReveal from 'scrollreveal';
import emailjs from '@emailjs/browser';
import Dialogs from '../dialogs/Dialogs.jsx';
import LoaderEmail from '../loaderemail/LoaderEmail.jsx';

export default function ContactForm() {
    const [showLoaderEmail, setShowLoaderEmail] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [showDialogObj, setShowDialogObj] = useState({
        success: false
    });
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const validFields = fieldsIsValid();

            if (validFields) {
                const options = {
                    publicKey: process.env.REACT_APP_EMAILJS_PUBLICKEY,
                    blockHeadless: true,
                    limitRate: {
                        id: 'app',
                        throttle: 10000,
                    },
                }

                const templateParams = {
                    from_name: formData.firstName,
                    last_name: formData.lastName,
                    company: formData.company,
                    email: formData.email,
                    phoneNumber: formData.phoneNumber,
                    message: formData.message
                }

                setShowLoaderEmail(true);

                emailjs.send(process.env.REACT_APP_EMAILJS_SERVICEID, process.env.REACT_APP_EMAILJS_TEMPLATEID, templateParams, options).then(
                    (response) => {
                        setFormData({
                            firstName: '',
                            lastName: '',
                            company: '',
                            email: '',
                            phoneNumber: '',
                            message: ''
                        });

                        document.querySelectorAll('input').forEach((inputElement) => {
                            inputElement.value = '';
                        });

                        document.querySelector('#message').value = ''
                        
                        setShowDialog(true);
                        setShowLoaderEmail(false);
                        setShowDialogObj({
                            ...showDialogObj,
                            success: true
                        });
                    },
                    (error) => {
                        setShowDialog(true);
                        setShowDialogObj({
                            ...showDialogObj,
                            success: false
                        });
                        console.error('FAILED...', error);
                    },
                );
            } else {
                setShowDialog(false);
            }
        } catch (error) {
            console.error('Erro ao enviar o e-mail:', error);

            setShowDialog(true);
            setShowDialogObj({
                ...showDialogObj,
                success: false
            });
        }
    };

    const fieldsIsValid = () => {
        let valid = true;

        for (let errorText of document.querySelector('.form').querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of document.querySelector('.form').querySelectorAll('.validation')) {
            const label = campo.name;
            let labelText;

            switch (label) {
                case 'firstName':
                    labelText = 'Primeiro Nome';
                    break;
                case 'email':
                    labelText = 'Email';
                    break;
                case 'phoneNumber':
                    labelText = 'Número para contato';
                    break;
                case 'message':
                    labelText = 'Mensagem';
                    break;
                default:
                    labelText = label;
            }

            if (!campo.value) {
                createError(campo, `campo "${labelText}" não pode estar vazio.`)
                valid = false;
            }
        }

        return valid;
    };

    const createError = (campo, msg) => {
        const div = document.createElement('div');

        div.innerHTML = msg;
        div.classList.add('error-text');

        campo.insertAdjacentElement('afterend', div);
    }

    useEffect(() => {
        ScrollReveal().reveal('.scroll-effect-contactform-txt', {
            origin: 'top',
            distance: '20px',
            duration: 1000,
            delay: 220,
            easing: 'ease-in-out',
            reset: false,
        });

        ScrollReveal().reveal('.scroll-effect-contactform-btn', {
            origin: 'bottom',
            distance: '20px',
            duration: 1000,
            delay: 220,
            easing: 'ease-in-out',
            reset: false,
        });
    }, []);

    return (
        <div className="px-6 py-24 sm:py-32 lg:px-8">
            <div className="scroll-effect-contactform-txt mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contate-nos</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Entre em contato conosco nos enviando uma mensagem.
                </p>
            </div>
            <form action="#" method="POST" className="form mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit} onChange={handleChange}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
                            Primeiro nome
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                autoComplete="given-name"
                                className="validation block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
                            Sobrenome
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                            Empresa
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="company"
                                id="company"
                                autoComplete="organization"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="validation block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-gray-900">
                            Número de telefone
                        </label>
                        <div className="relative mt-2.5">
                            <div className="absolute inset-y-0 left-0 flex items-center">
                                <label htmlFor="country" className="sr-only">
                                    Country
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                >
                                    <option>BR</option>
                                    <option>US</option>
                                    <option>CA</option>
                                    <option>EU</option>
                                </select>
                                <ChevronDownIcon
                                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </div>
                            <input
                                type="tel"
                                name="phoneNumber"
                                id="phoneNumber"
                                autoComplete="tel"
                                className="validation block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                            Mensagem
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                className="validation block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                </div>
                <div className="scroll-effect-contactform-btn mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Enviar
                    </button>
                </div>
                {showDialog && <Dialogs data={showDialogObj} />}
            </form>
            {showLoaderEmail && <LoaderEmail />}
        </div>
    )
}
