"use client";

import React, { useState } from "react";
import { Spinner } from "./Spinner";

interface TextInputProps {
  label: string;
  optional?: string;
  placeholder?: string;
  description?: string;
  validate?: (value: string) => boolean; // Optional validation function
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  optional,
  placeholder = "",
  description,
  validate,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasText, setHasText] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setHasText(value.length > 0);

    if (validate) {
      setIsValid(validate(value)); // Validate input
    }
  };

  return (
    <div className="flex flex-col w-[400px] h-[78px] top-[115px] left-[25px] gap-dimension/xs pt-2 pr-1 pb-4 pl-4">
      <label className="flex items-center w-[400px] h-[22px] gap-dimension/xs">
        <span className="font-label-m text-on-neutral-xx-high">{label}</span>
        {optional && (
          <div className="flex items-start gap-[10px] pt-dimension/3xs">
            <span className="font-label-s text-on-neutral-low">{optional}</span>
          </div>
        )}
      </label>
      {description && (
        <p
          className="font-body-s text-on-neutral-x-high h-[19px]"
          style={{
            letterSpacing: "0.01px",
          }}
        >
          {description}
        </p>
      )}
      <div
        className={`flex items-center w-[400px] h-dimension/5xl min-h-dimension/5xl rounded-dimension/radius/input
          border-dimension/stroke/l gap-dimension/xs pt-dimension/s pr-dimension/xs pb-dimension/s pl-dimension/m
          ${
            isFocused
              ? isValid === false
                ? "border-on-danger text-on-danger"
                : "border-on-neutral-low text-on-neutral-xx-high"
              : "border-on-neutral-low"
          }
        `}
        style={{
          boxSizing: "border-box",
          border: "1px solid var(--color-state-default, #CCCCCC)",
          outline: isFocused
            ? isValid === false
              ? "3px solid var(--color-state-danger, #FF0000)"
              : "3px solid var(--color-state-default-focus, #1A1A1ACC)"
            : "none",
        }}
      >
        {/* Value Section */}
        <div className="flex items-center w-[336px] h-[22px] gap-dimension/3xs">
          <input
            type="text"
            placeholder={placeholder}
            className={`w-[336px] h-[22px] font-body-m outline-none caret-surface-brand ${
              hasText ? "text-on-neutral-xx-high" : "text-on-neutral-low"
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={handleInputChange}
            style={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          />
        </div>

        {/* Action Section */}
        <div
          className="flex items-center justify-center w-[32px] h-[32px] 
            min-w-dimension/3xl min-h-dimension/3xl gap-[8px]"
        >
          {/* Validation Feedback */}
          {hasText && validate && isValid !== null && (
            <div className="w-dimension/xl h-dimension/xl">
              {isValid ? (
                <div className="w-[24px] h-[24px] text-success">
                  {/* Success Icon */}✓
                </div>
              ) : (
                <div className="w-[24px] h-[24px] text-danger">
                  {/* Error Icon */}✗
                </div>
              )}
            </div>
          )}
          {!validate && hasText && (
            <Spinner
              Start="Brand"
              Step="1"
              width={24}
              height={24}
              className="w-[24px] h-[24px] text-state-loading-spinner-brand-0 animate-spin"
            />
          )}
        </div>
      </div>
    </div>
  );
};
