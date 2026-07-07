"use client";
import { useState } from "react";

export default function CustomiFrame() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full px-4 md:px-10 py-6">
      <div className="max-w-[1200px] mx-auto">
        {/* <p className="text-sm text-gray-500 mb-2 font-[TTChocolatesMedium]">
          CIRE : Funded Projects and Grants
        </p> */}

        <div className="relative rounded-xl overflow-hidden border border-[#7B1F4B] shadow-lg">
          {/* Loading placeholder */}
          {!loaded && (
            <div className="absolute inset-0 bg-[#7B1F4B] flex items-center justify-center z-10">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
                <p className="text-white font-[TTChocolatesMedium] text-sm">
                  Loading table...
                </p>
              </div>
            </div>
          )}

          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSBKPOOfj3CNTfcv7o3fObHitzKNciKJ0ST7pjfLFtqSMhDU5TxQu99iTdZMGOlvUPEUFH6x4TQixAa/pubhtml?gid=358240727&amp;single=true&amp;widget=true&amp;headers=false"
            className="w-full border-0"
            style={{ height: "600px" }}
            title="Funded Projects and Grants"
            onLoad={() => setLoaded(true)}
          />
        </div>

        <p className="text-xs text-gray-400 mt-2 text-right">
          Source: Google Sheets — data updates automatically
        </p>
      </div>
    </div>
  );
}