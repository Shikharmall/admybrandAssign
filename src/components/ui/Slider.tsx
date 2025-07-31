"use client";

import { useState } from "react";

type SliderProps = {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  label?: string;
  unit?: string;
};

export const Slider = ({
  min,
  max,
  step = 1,
  value,
  onChange,
  label,
  unit = "",
}: SliderProps) => {
  const [internalValue, setInternalValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setInternalValue(val);
    onChange(val);
  };

  return (
    <div className="w-full">
      {label && (
        <div className="mb-1 text-sm text-white font-medium">
          {label}: {internalValue}
          {unit}
        </div>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={internalValue}
        onChange={handleChange}
        className="w-full cursor-pointer accent-indigo-500"
      />
    </div>
  );
};
