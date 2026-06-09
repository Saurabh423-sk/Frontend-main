import Rule from "../components/rules/rule.jsx"
import lib from "../assets/images/lib2.jpeg"

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      
    
      <header  className="herobg border-b">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl sm:text-6xl text-white font-bold">
            BRABU Library
          </h1>
          <p className="mt-7 text-white inline-block p-2   bg-white/20 backdrop-blur-sm rounded-4xl">
            Supporting academic excellence through knowledge and resources
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-20">

        {/* Overview */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-5xl tracking-wide heading-smile  font-semibold  text-gray-900 mb-4">
              About the Library
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              The BRABU Central Library serves as the academic backbone
              of the institution. It provides access to textbooks, reference
              materials, journals, and digital resources required for teaching
              and learning.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The library supports undergraduate and postgraduate programs
              including BCA, BBA, BBM, BSC.IT and other courses offered by the college.
            </p>
          </div>

          {/* REAL IMAGE */}
          <img
            src={lib}
            alt="College Library"
            className="w-full h-72 object-cover rounded-md shadow"
          />
        </section>

       {/* Objectives & Facilities Wrapper */}
<section className="space-y-20">

  {/* Library Objectives */}
  <section>
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Library Objectives</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">Guiding principles that shape our services and collections</p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-linear-to-br from-white to-blue-50 rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 p-3 rounded-lg mr-4">
            <span className="text-blue-700 text-2xl">🎓</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            Academic Support
          </h3>
        </div>
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <span className="text-gray-700">Provide academic resources aligned with the curriculum</span>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <span className="text-gray-700">Encourage reading and independent learning</span>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <span className="text-gray-700">Support research, assignments, and project work</span>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <span className="text-gray-700">Promote disciplined and silent study practices</span>
          </li>
        </ul>
      </div>

      <div className="bg-linear-to-br from-white to-green-50 rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
        <div className="flex items-center mb-6">
          <div className="bg-green-100 p-3 rounded-lg mr-4">
            <span className="text-green-800 text-2xl">📊</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            Library Management
          </h3>
        </div>
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="bg-green-700 rounded-full p-1 mr-3 mt-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <span className="text-gray-700">Maintain systematic book classification and cataloging</span>
          </li>
          <li className="flex items-start">
            <div className="bg-green-700 rounded-full p-1 mr-3 mt-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <span className="text-gray-700">Ensure fair and transparent borrowing policies</span>
          </li>
          <li className="flex items-start">
            <div className="bg-green-700 rounded-full p-1 mr-3 mt-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <span className="text-gray-700">Assist students in locating learning materials</span>
          </li>
          <li className="flex items-start">
            <div className="bg-green-700 rounded-full p-1 mr-3 mt-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <span className="text-gray-700">Gradually expand digital and online resources</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  {/* Library Facilities */}
  <section>
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Library Facilities</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">Modern amenities designed for optimal learning experience</p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { 
          title: "Textbooks & Reference Books", 
          icon: "📚",
          desc: "Comprehensive collection of academic and reference materials",
          color: "blue"
        },
        { 
          title: "Competitive Examination Materials", 
          icon: "🏆",
          desc: "Resources for various competitive and entrance exams",
          color: "green"
        },
        { 
          title: "Silent Reading & Study Area", 
          icon: "🤫",
          desc: "Dedicated quiet zones for focused studying",
          color: "blue"
        },
        { 
          title: "Newspaper & Magazine Section", 
          icon: "📰",
          desc: "Current periodicals and journals for leisure reading",
          color: "green"
        }
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className={`inline-flex p-4 rounded-full mb-4 ${item.color === 'blue' ? 'bg-blue-50' : 'bg-green-50'}`}>
            <span className="text-3xl">{item.icon}</span>
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-3">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
<Rule />

</section>

        {/* Closing */}
        <section className="text-center">
          <p className="italic text-gray-700">
            “The library aims to nurture knowledge, discipline, and academic growth
            among students.”
          </p>
        </section>  </main>
    </div>
  )
};

export default About;
