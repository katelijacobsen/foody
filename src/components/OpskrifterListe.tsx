const OpskrifterListe = () => {
  return (
    <section>
      <body className="bg-purple-300 font-sans grid place-items-center min-h-screen">
        <div className="bg-white rounded-lg shadow-lg grid grid-cols-[300px_auto] overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1549589237-9e70b6be4da8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80"
            alt="Pancake"
            className="w-[300px] h-[300px] object-cover"
          />
          <div className="p-10">
            <h1 className="text-2xl font-light text-purple-900">
              Caramel Cake Pancakes
            </h1>
            <div className="flex space-x-10 mt-6">
              <div>
                <h2 className="text-sm text-gray-500">Hands-on Time</h2>
                <p className="text-purple-900 font-bold text-lg">30 min</p>
              </div>
              <div>
                <h2 className="text-sm text-gray-500">Total Time</h2>
                <p className="text-purple-900 font-bold text-lg">40 min</p>
              </div>
              <div>
                <h2 className="text-sm text-gray-500">Yield</h2>
                <p className="text-purple-900 font-bold text-lg">40 min</p>
              </div>
            </div>
            <button className="absolute -bottom-5 -right-5 bg-orange-500 text-white flex items-center space-x-4 px-10 py-5 rounded-lg shadow-lg text-sm uppercase">
              <span>View Recipe</span>
              <i className="fa fa-arrow-right text-lg"></i>
            </button>
          </div>
        </div>
      </body>
    </section>
  );
};

export default OpskrifterListe;
