import React from "react";

type TabButtonProps = {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
};

const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
  const buttonClasses = active
    ? "text-white border-b-2 border-purple-500"
    : "text-[#ADB7BE]";

  return (
    <button
      type="button"
      onClick={selectTab}
      className={`pb-2 font-semibold hover:text-white transition-colors ${buttonClasses}`}
      aria-pressed={active}
    >
      {children}
    </button>
  );
};

export default TabButton;
