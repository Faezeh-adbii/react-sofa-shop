import React from "react";

function InfoBox({ title = "حالت نمایشی:", children, color = "yellow" }) {
  const styles = {
    yellow: {
      wrapper: "bg-yellow-50 border-yellow-300",
      title: "text-yellow-900",
      text: "text-yellow-800",
      hint: "text-yellow-700",
    },
    blue: {
      wrapper: "bg-blue-50 border-blue-300",
      title: "text-blue-900",
      text: "text-blue-800",
      hint: "text-blue-700",
    },
  };

  const style = styles[color] || styles.yellow;

  return (
    <div className={`mt-6 p-4 border-2 rounded-2xl ${style.wrapper}`}>
      <div className="flex items-start gap-3">
        <span className="text-2xl">💡</span>
        <div className="flex-1">
          <p className={`font-bold text-xs mb-1 ${style.title}`}>{title}</p>
          {children}
        </div>
      </div>
    </div>
  );
}

export default InfoBox;