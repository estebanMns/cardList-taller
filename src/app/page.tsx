

import img from 'next/image';

const LoginPage = () => {
  return (
          <div className=" flex justify-center items-center h-screen bg-neutral-100 p-4">
          {/* Contenedor principal de la tarjeta blanca */}
          <div className="bg-white rounded-3xl shadow-xl p-3 max-w-4xl w-full flex flex-col md:flex-row ">
            
            {/* Contenedor de la imagen con fondo gris oscuro */}
            <div className="bg-neutral-100 rounded-3xl justify-center items-center w-85 overflow-visible relative">
            <img
            src="https://www.playnaka.com/_next/image?url=/_next/static/media/data_analyst.920d8485.webp&w=1080&q=75" // Reemplaza con la ruta a tu imagen
            alt=""
            width={500}
            height={400}
            className="max-w-none w-[430px] h-175 object-contain absolute left-[52%] h-23 -translate-x-1/2  drop-shadow-xl "
            style={{ zIndex: 10}}
          />
        </div>

        {/* Contenedor del formulario */}
        <div className="flex-grow p-25  min-w-50">
          {/* Encabezado */}
          <div className="text-right mb-20 hidden md:block">
            <p className="text-sm text-gray-500">
              Don't have an account? <a href="#" className="text-blue-600 font-medium">Sign up</a>
            </p>
          </div>

          <h2 className="text-4xl font-semibold mb-2">Sign in</h2>
          <p className="text-gray-500 mb-6">Sign in with Open account</p>

          {/* Botones sociales */}
          <div className="flex gap-4 mb-6">
            <button className="flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors flex-1">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyAzgLs4C8wzj7OXS5I4e2r_ZGarlAlq5_xA&s" alt="Google" width={20} height={20} />
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors flex-1">
              <img src="https://icones.pro/wp-content/uploads/2021/04/icone-apple-symbole-logo-noir.png" alt="Apple ID" width={20} height={20} />
              <span>Apple ID</span>
            </button>
          </div>

          <p className="text-sm text-gray-500 my-6">Or continue with email address</p>

          {/* Campos de input */}
          <div className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="tam@ui8.net"
                className="w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.svgrepo.com/svg/479773/email-8/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1a4 4 0 01-4 4H8a4 4 0 01-4-4v-1zm1 0a4 4 11-8 0 4 4 0 018 0z"></path></svg>
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="****************"
                className="w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path></svg>
            </div>
            <button className="w-full p-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Start trading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;