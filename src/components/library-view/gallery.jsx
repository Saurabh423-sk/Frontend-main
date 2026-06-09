import lib1 from "../../assets/images/lib1.jpeg"
import lib2 from "../../assets/images/lib2.jpeg"

 const LibraryGallery = () => {
  const images = [
    lib2,lib1,
  
    "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  ];

  return (
    <div className="  p-6 ">
      <h1 className="text-5xl font-bold text-center text-blue-950  mb-8">
        📚  Library View
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-lg"
          >
            {/* Image */}
            <img
              src={img}
              alt="Library"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
              <p className="text-white text-sm p-4 font-semibold">
                College Library Environment
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryGallery;
