export default function PlacementProcess({ steps = [] }) {
  return (
    <div className="w-full py-12 px-4 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#74043D] mb-12">
        Placement Process
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center border border-gray-300"
          >
            {/* Number on Top */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-0 text-5xl font-extrlight text-[#74043D] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {`0${index + 1}`}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[150px]">
              <div className="mb-4">{step.icon}</div>
              <h3 className="font-semibold text-gray-800 text-lg mb-1">{step.placementtitle}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
