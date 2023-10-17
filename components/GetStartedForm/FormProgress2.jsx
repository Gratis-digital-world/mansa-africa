import React from "react";

function FormProgress2() {
  return (
    <div className="grid grid-cols-2 gap-4 py-8">
      <div className="font-semibold pl-8">
        Profiles of Owner/Directors/Shareholders
      </div>
      <div className="flex items-center justify-end gap-1 pr-8">
        <div className="bg-[#010DFF] w-12 h-3 rounded-lg" />
        <div className="bg-[#010DFF] w-12 h-3 rounded-lg" />
        <div className="bg-[#010DFF] w-12 h-3 rounded-lg opacity-20" />
      </div>
    </div>
  );
}

export default FormProgress2;
