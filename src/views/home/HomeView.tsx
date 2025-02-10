export const HomeView = () =>
{
  return (
    <>
      {/* Hero Section */}
      <main className="flex-grow">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-500 opacity-90"></div>
          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-white text-6xl font-bold leading-tight mb-8">
                Permítenos Impulsar tu negocio
              </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}