import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

function ReviewCard({ review }) {
  return (
    <div className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
      <div className="flex justify-between items-start gap-2">
        <div className="flex items-center gap-2 sm:gap-3">
          <FaUserCircle className="text-gray-300 text-3xl sm:text-4xl shrink-0" />
          <span className="font-bold text-sm sm:text-base text-gray-800">
            {review.name}
          </span>
        </div>
        <span className="text-[0.75rem] sm:text-[0.85rem] text-gray-400 mt-1 sm:mt-1.5 shrink-0">
          {review.date}
        </span>
      </div>
      <div className="w-full mt-2 sm:mt-1">
        {/* ستاره‌ها */}
        <div className="flex items-center gap-x-0.5 sm:gap-x-1 " dir="ltr">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star}>
              {star <= review.rating ? (
                <IoMdStar className="text-yellow-400 text-lg sm:text-xl" />
              ) : (
                <IoMdStarOutline className="text-gray-300 text-lg sm:text-xl" />
              )}
            </span>
          ))}
        </div>
        <p className="text-[0.85rem] sm:text-[0.9rem] text-gray-600 leading-6 sm:leading-7 ps-10 sm:ps-12 mt-1">
          {review.comment}
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;