export default function PlacementProcess({ steps = [] }) {
  return (
    <div className="w-full py-12 px-4 md:px-16">
      <h3 className="text-[#760135] text-center pb-8 text-[30px] md:text-[50px] font-bold font-[CarotSlab]">
        Placement Process
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center group"
          >
            {/* Number Outside (hover effect) */}
            <div className="absolute-top-10 text-7xl font-bold text-[#74043D] opacity-0 translate-y-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              {`0${index + 1}`}
            </div>

            {/* Gradient Border Box */}
            <div className="rounded-[30px] p-[8px] bg-gradient-to-br from-[#74043D] to-[#007A83] w-full">
              <div className="bg-white rounded-[24px] p-6 text-center flex flex-col items-center justify-center min-h-[180px]">
                {/* Icon */}
                <div className="mb-4">{step.icon}</div>
                {/* Title */}
                <h3 className="font-bold text-gray-800 text-lg mb-1">
                  {step.placementtitle}
                </h3>
                {/* Description */}
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
