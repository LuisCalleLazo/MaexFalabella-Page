import { Link } from "react-router-dom";

export const HeadHome = () =>
{
  return(
    <header className="bg-gradient-to-r from-orange-600 to-yellow-600">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-white text-3xl font-bold">
            <img src="logo.png" width={"250px"} />
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to={"/"} className="text-white hover:text-gray-200">
              Inicio
            </Link>
            <Link to={"/about"} className="text-white hover:text-gray-200">
              Sobre Nosotros
            </Link>
            <Link to={"/services"} className="text-white hover:text-gray-200">
              Serivicio
            </Link>
            <Link to={"/contact"} className="text-white hover:text-gray-200">
              Contacto
            </Link>
            {/* {['Oficinas', 'Aproxímate', 'Noticias'].map((item) => (
              <a key={item} href="#" className="text-white hover:text-gray-200">
                {item}
              </a>
            ))} */}
          </nav>
          <div className="flex items-center space-x-4">
            <select className="bg-black text-white rounded px-2 py-1">
              <option>ES</option>
              <option>EN</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}