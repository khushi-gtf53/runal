"use client";

import React from "react";

export const Heading = ({ children, extraClass }) => {
  const baseFontSize =
    extraClass?.includes("text-[16px]") && !extraClass.includes("text-[18px]")
      ? "text-[14px] sm:text-[16px]"
      : "text-[14px] sm:text-[18px]";
  return (
    <h2 className={`heading uppercase tracking-[2px]  tenor_font ${baseFontSize} text-gradient-gold ${extraClass || ""}`}>
      {children}
    </h2>
  );
};

export const SubHeading = ({ children, extraClass }) => {
  const baseFont =
    extraClass?.includes("minion_font") && !extraClass.includes("minion_font_italic")
      ? "minion_font"
      : "minion_font_italic";
  return (
    <p className={`sub_heading capitalize ${baseFont} text-[20px] sm:text-[28px] leading-[38px] tracking-[3px] py-5 ${extraClass || "" }`}>
      {children}
    </p>
  );
};

const CommonHeading = ({ title, subtitle }) => {
  return (
    <>
      <Heading>{title}</Heading>
      <SubHeading>{subtitle}</SubHeading>
    </>
  );
};

export default CommonHeading;