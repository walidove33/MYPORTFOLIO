import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_tviwihm',  
        'template_43ikq75',  
        form.current,
        'uEBXvGPM8yjXL3-jr' 
      )
      .then(
        () => {
          setStatus('Message envoyé avec succès !');
          form.current?.reset();
        },
        () => {
          setStatus('Une erreur est survenue, veuillez réessayer.');
        }
      );
  };

  return (
    <section
      id="contact"
      className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-6 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}
        >
          Contact
        </h2>
        <div className="h-1 w-20 bg-blue-600 mb-10 mx-auto"></div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div
              className={`rounded-lg shadow-md p-8 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              <h3
                className={`text-2xl font-semibold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}
              >
                Restons en contact
              </h3>
              <p
                className={`mb-8 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Je suis toujours ouvert aux nouvelles opportunités, collaborations
                ou simplement pour échanger sur des sujets tech. N'hésitez pas à
                me contacter !
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-blue-600" />
                  </div>
                  <div>
                    <h4
                      className={`text-sm font-medium mb-1 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      Email
                    </h4>
                    <a
                      href="mailto:WalidBenabbes5@gmail.com"
                      className={`text-lg font-medium hover:text-blue-600 transition ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                      }`}
                    >
                      WalidBenabbes5@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-blue-600" />
                  </div>
                  <div>
                    <h4
                      className={`text-sm font-medium mb-1 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      Téléphone
                    </h4>
                    <a
                      href="tel:+212612473774"
                      className={`text-lg font-medium hover:text-blue-600 transition ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                      }`}
                    >
                      +212 612 473 774
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-blue-600" />
                  </div>
                  <div>
                    <h4
                      className={`text-sm font-medium mb-1 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      Localisation
                    </h4>
                    <p
                      className={`text-lg font-medium ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                      }`}
                    >
                      Bouskoura, Maroc
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`rounded-lg shadow-md p-8 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              <h3
                className={`text-2xl font-semibold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}
              >
                Envoyez-moi un message
              </h3>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                {['name', 'email', 'message'].map((field) => (
                  <div key={field}>
                    <label
                      htmlFor={field}
                      className={`block text-sm font-medium mb-1 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {field === 'name'
                        ? 'Nom complet'
                        : field === 'email'
                        ? 'Email'
                        : 'Message'}
                    </label>
                    {field !== 'message' ? (
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        id={field}
                        name={field} // IMPORTANT for EmailJS
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                          theme === 'dark'
                            ? 'border-gray-600 bg-gray-700 text-gray-200 focus:ring-blue-400'
                            : 'border-gray-300 bg-white text-gray-900 focus:ring-blue-600'
                        }`}
                        placeholder={
                          field === 'name'
                            ? 'Votre nom'
                            : field === 'email'
                            ? 'Votre email'
                            : ''
                        }
                        required
                      />
                    ) : (
                      <textarea
                        id={field}
                        name={field} // IMPORTANT for EmailJS
                        rows={4}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                          theme === 'dark'
                            ? 'border-gray-600 bg-gray-700 text-gray-200 focus:ring-blue-400'
                            : 'border-gray-300 bg-white text-gray-900 focus:ring-blue-600'
                        }`}
                        placeholder="Votre message"
                        required
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Envoyer le message
                </button>
              </form>

              {status && (
                <p
                  className={`mt-4 text-center ${
                    status.includes('succès')
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {status}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
