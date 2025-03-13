import { useState } from "react"
import emailjs from "@emailjs/browser";

export const ContactView = () =>
{
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    empresa: '',
    posicion: '',
    pais: '',
    mensaje: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_MAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_MAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_MAIL_PUBLIC_KEY;

    const templateParams = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      email: formData.email,
      empresa: formData.empresa,
      posicion: formData.posicion,
      pais: formData.pais,
      mensaje: formData.mensaje,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email enviado con éxito:", response);
        alert("Mensaje enviado correctamente.");
      })
      .catch((error) => {
        console.error("Error al enviar el email:", error);
        alert("Error al enviar el mensaje.");
      });
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-600 to-orange-600">
      <div className="container mx-auto px-4 py-12 flex justify-around">
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Estaremos felices de escuchar de ti
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre"
                className="bg-white/20 text-white placeholder:text-white/70 rounded p-3"
                value={formData.nombre}
                onChange={(e) => setFormData({...formData, nombre: e.target.value})}
              />
              <input
                type="text"
                placeholder="Apellido"
                className="bg-white/20 text-white placeholder:text-white/70 rounded p-3"
                value={formData.apellido}
                onChange={(e) => setFormData({...formData, apellido: e.target.value})}
              />
            </div>
            
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white/20 text-white placeholder:text-white/70 rounded p-3"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            
            <input
              type="text"
              placeholder="Empresa"
              className="w-full bg-white/20 text-white placeholder:text-white/70 rounded p-3"
              value={formData.empresa}
              onChange={(e) => setFormData({...formData, empresa: e.target.value})}
            />
            
            <input
              type="text"
              placeholder="Posición"
              className="w-full bg-white/20 text-white placeholder:text-white/70 rounded p-3"
              value={formData.posicion}
              onChange={(e) => setFormData({...formData, posicion: e.target.value})}
            />
            
            <select
              className="w-full bg-white/20 text-white/70 rounded p-3"
              value={formData.pais}
              onChange={(e) => setFormData({...formData, pais: e.target.value})}
            >
              <option value="">Elige un país de contacto</option>
              <option value="chile">Chile</option>
              <option value="peru">Perú</option>
              {/* Add other countries */}
            </select>
            
            <textarea
              placeholder="Escribe tu mensaje aquí..."
              rows={6}
              className="w-full bg-white/20 text-white placeholder:text-white/70 rounded p-3"
              value={formData.mensaje}
              onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
            />
            
            <div className="flex items-center gap-4">
              <div className="bg-white rounded p-2">
                {/* Add reCAPTCHA component here */}
              </div>
              
              <button
                type="submit"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded"
              >
                Enviar
              </button>
            </div>
            
            <div className="flex items-center gap-2 text-white text-sm">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                Mi información es confidencial
                <a href="#" className="underline ml-1">Ver Términos de Uso</a>
              </label>
            </div>
          </form>
        </div>
        
        <div className="w-[50%] px-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Encuéntranos</h2>
            
            <div className="space-y-4 text-white mb-6">
              <p className="flex items-center">
                <span className="w-20 font-medium">Dirección:</span>
                <span>Av. 16 de Julio, La Paz, Bolivia</span>
              </p>
              <p className="flex items-center">
                <span className="w-20 font-medium">Teléfono:</span>
                <span>+591 2 123 4567</span>
              </p>
              <p className="flex items-center">
                <span className="w-20 font-medium">Email:</span>
                <span>contacto@empresa.com</span>
              </p>
            </div>

            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              <div className="relative pb-[75%] h-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.3663116523!2d-68.13398868513684!3d-16.49839168861276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f20f04f9a2e5d%3A0x8f0f6e4d1a2c9a0!2sAv.%2016%20de%20Julio%2C%20La%20Paz%2C%20Bolivia!5e0!3m2!1sen!2sus!4v1625180000000!5m2!1sen!2sus"
                  className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}