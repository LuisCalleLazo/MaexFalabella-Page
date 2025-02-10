

const companies = [
  {
    name: "Frontline",
    logo: "/frontline-logo.png",
    description: "Especialista en el trafico de carga desde Asia hasta las Américas",
    background: "https://mecaluxes.cdnwm.com/img/blog/logistica-internacional.1.14.jpg"
  },
  {
    name: "Air",
    logo: "/air-logo.png",
    description: "Nuestra división  aérea se destaca con un servicio enfocado a los productos o proyectos en los que el tiempo es primordial",
    background: "https://isaticarlogistica.es/wp-content/uploads/servicio-de-logistica.jpg"
  },
  {
    name: "ml logistics",
    logo: "/air-logo.png",
    description: "Trafico marítimos. aéreos o Terrestres....carga regular o Sobre dimensionada",
    background: "https://www.wociberica.com/pics_fotosnoticias/125/transporte-maritimo-internacional-1024x665.jpg"
  },
  {
    name: "Masterline Warehouse",
    logo: "/air-logo.png",
    description: "Nuestros modernos centros de almacenamiento tienen ubicaciones privilegiadas en el continente. Masterline Warehouse tiene más de 7000m² en Colón-Panamá y más de 1300m² en Asunción-Paraguay. Contamos con equipos altamente capacitados que garantizan una gestión de inventario eficiente y puntual.",
    background: "https://isaticarlogistica.es/wp-content/uploads/almacenamiento-logistica.jpg"
  },
  // Add other companies...
]

export const AboutView = () =>
{
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">Nuestro Grupo</h1>
        
        <div className="grid gap-8">
          {companies.map((company) => (
            <div key={company.name} className="group relative overflow-hidden rounded-lg">
              <div className="relative h-48 bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow to-transparent opacity-90 z-10"></div>
                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${company.background})`}}></div>
                <div className="relative z-20 h-full flex items-center p-6">
                  <img src={company.logo || "/placeholder.svg"} alt={company.name} className="h-12" />
                </div>
              </div>
              <div className="absolute inset-0 bg-orange-600 translate-x-full group-hover:translate-x-1/2 transition-transform duration-300">
                <div className="h-full flex items-center p-6">
                  <p className="text-white">{company.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}