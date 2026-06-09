const Rule = ()=>{
return (
  <section>
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4 ">Five Laws of BRABU Library </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">Foundational principles that guide our library operations</p>
    </div>

    <div className="bg-linear-to-r from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg border border-gray-100 max-w-5xl mx-auto">
      <div className="relative">
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-linear-to-b from-blue-300 to-green-300"></div>
        
        <ol className="space-y-8">
          {[
            { law: "Books are for use", desc: "We ensure all materials are accessible and available for maximum utilization" },
            { law: "Every reader his or her book", desc: "Personalized service to match resources with individual needs" },
            { law: "Every book its reader", desc: "Strategic promotion to connect each resource with potential users" },
            { law: "Save the time of the reader", desc: "Efficient systems for quick access and retrieval" },
            { law: "The library is a growing organism", desc: "Continuous expansion and adaptation to evolving academic needs" }
          ].map((item, index) => (
            <li key={index} className="relative">
              <div className={`flex flex-col lg:flex-row items-start lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md mb-4 lg:mb-0">
                    <span className="text-xl font-bold text-blue-700">{index + 1}</span>
                  </div>
                </div>
                
                <div className={`lg:w-1/2 mt-4 lg:mt-0 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.law}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
)


}


export default Rule