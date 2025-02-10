

const services = [
  {
    name: "MARÍTIMO",
    description: "FCL/LCL desde todos los principales puertos de Asia.",
    overlayColor: "bg-amber-900",
    image: "https://www.wociberica.com/pics_fotosnoticias/125/transporte-maritimo-internacional-1024x665.jpg",
    icon: <svg className="w-6 h-6" /* Add ship icon SVG */ />
  },
  {
    name: "MULTIMODAL TERRESTRE",
    description: "Servicio que atiende una extensa red nacional y internacional.",
    overlayColor: "bg-yellow-600",
    image: "https://mecaluxes.cdnwm.com/img/blog/logistica-internacional.1.14.jpg",
    icon: <svg className="w-6 h-6" /* Add truck icon SVG */ />
  },
  {
    name: "AEREO",
    description: "Servicio enfocado a los productos o proyectos en los que el tiempo es primordial",
    overlayColor: "bg-amber-900",
    image: "https://isaticarlogistica.es/wp-content/uploads/servicio-de-logistica.jpg",
    icon: <svg className="w-6 h-6" /* Add ship icon SVG */ />
  },
  // Add other services...
]

export const ServicesView = () =>
{
  return(
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Nuestros Servicios</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div 
            key={service.name}
            className="relative overflow-hidden rounded-lg h-64 group"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
              style={{
                backgroundImage: `url(${service.image})`,
              }}
            />
            <div className={`absolute inset-0 ${service.overlayColor} opacity-70`}></div>
            <div className="relative h-full p-6 flex flex-col justify-between text-white">
              <div className="flex items-center gap-3">
                {service.icon}
                <h3 className="text-2xl font-bold">{service.name}</h3>
              </div>
              <p className="text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}