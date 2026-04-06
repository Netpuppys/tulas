"use client";
import { useState } from "react";

const tabs = ["Fests", "Hostel", "Infrastructure", "Sports", "Wellness"];

const galleryItems = [
  { id: 1, emoji: "🎤" },
  { id: 2, emoji: "💃" },
  { id: 3, emoji: "👑" },
  { id: 4, emoji: "🏆" },
  { id: 5, emoji: "🎙" },
  { id: 6, emoji: "👗" },
  { id: 7, emoji: "🎓" },
  { id: 8, emoji: "📚" },
];

export default function LifeAtTulas() {
  const [activeTab, setActiveTab] = useState("Fests");

  return (
    <section className="w-full py-16 px-6" style={{ backgroundColor: "#fdf6ee" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="text-orange-500">Life</span>{" "}
          <span className="text-gray-900">at Tulas</span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-2.5 rounded-full font-bold text-sm transition-all border-2 ${
                activeTab === tab
                  ? "border-orange-500 text-orange-500 bg-white shadow-sm"
                  : "border-gray-300 text-gray-600 bg-white hover:border-orange-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[500px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-300 rounded-xl overflow-hidden relative flex items-center justify-center hover:scale-[1.02] transition-transform cursor-pointer"
              style={{
                background: `linear-gradient(135deg, #1a1a2e ${item.id * 10}%, #16213e, #0f3460)`,
              }}
            >
              <span className="text-5xl opacity-50">{item.emoji}</span>
              <div className="absolute inset-0 bg-orange-500/0 hover:bg-orange-500/20 transition-colors rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
