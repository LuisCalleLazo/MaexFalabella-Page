export const FooterHome = () =>
{
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="logo.png" alt="Comex Falabella" className="h-12 mb-4" />
            <div className="text-sm">
              BOLIVIA • CHILE • COLOMBIA • COSTA RICA • EL SALVADOR • GUATEMALA • HONDURAS • 
              NICARAGUA • PANAMÁ • PARAGUAY • PERÚ • REP.DOMINICANA • URUGUAY
            </div>
          </div>
          
          <div>
            <h3 className="text-yellow-500 font-bold mb-4">Soluciones logísticas</h3>
            <ul className="space-y-2">
              {['Transporte marítimo', 'Transporte Aéreo', 'Transporte Terrestre', 
                'Proyectos industriales', 'Logística Contractual', 'Almacénaje y Distribución',
                'Seguro de carga'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-yellow-500">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-500 font-bold mb-4">Descubre Comex Falabella Group</h3>
            <ul className="space-y-2">
              {['Nuestra historia', 'Nuestras oficinas', 'Noticias'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-yellow-500">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-500 font-bold mb-4">Conéctate con nosotros</h3>
            <ul className="space-y-2">
              {['Contáctanos', 'Solicita una cotización', 'Empleo'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-yellow-500">{item}</a>
                </li>
              ))}
            </ul>
            <h3 className="text-yellow-500 font-bold mt-6 mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              {['bi bi-facebook', 'bi bi-instagram', 'bi bi-linkedin'].map((social) => (
                <a key={social} href="#" className="text-white hover:text-yellow-500">
                  <i className={social}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
          © 2025 • Comex Falabella
        </div>
      </div>
    </footer>
  );
}