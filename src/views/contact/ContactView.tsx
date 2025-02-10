import { useState } from "react"

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
    e.preventDefault()
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-600 to-orange-600">
      <div className="container mx-auto px-4 py-12">
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
      </div>
    </div>
  )
}