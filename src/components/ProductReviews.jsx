import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { FaRegComments } from 'react-icons/fa';

import ReviewCard from './ReviewCard'
import ReviewForm from './ReviewForm'

function ProductReviews({ reviews, setReviews }) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    //تابع برای اضافه کردن نظرات جدید
    const reviewAddhandler = (newReview) => {
        setReviews([newReview, ...reviews])
    }

    return (
        <div className=' mt-12  md:mt-15 lg:mt-20'>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b border-gray-200 pb-4">
                <FaRegComments className="text-pink-700 text-2xl" />
                نظرات کاربران
            </h2>
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-md">
                {reviews.length === 0 ?
                    <div className="text-center py-10">
                        <p className="text-gray-500 mb-4">هنوز نظری برای این محصول ثبت نشده است.</p>
                        <button onClick={() => setIsModalOpen(true)} className="bg-pink-700 hover:bg-pink-800 text-white font-bold py-2 px-6 rounded-xl transition"
                        >ثبت اولین نظر
                        </button>
                    </div>
                    :
                    <div className='space-y-6'>
                        {/* استفاده از ReviewCard برای نمایش هر نظر */}
                        {reviews.map(review =>
                            <ReviewCard key={review.id} review={review} />
                        )}
                        {/* دکمه ثبت نظر جدید */}
                        <div className="text-center pt-2">
                            <button onClick={() => setIsModalOpen(true)} className="bg-box hover:bg-pink-800 text-white font-bold py-2 px-10  md:py-3 md:px-14 rounded-xl transition-all duration-300" >
                                ثبت نظر جدید
                            </button>
                        </div>
                    </div>
                }
            </div>
            {/* مودال ثبت نظر */}
            {isModalOpen &&
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
                        <div className="flex justify-between items-center p-4 border-b border-gray-100">
                            <h3 className="font-bold text-lg text-gray-800">ثبت نظر جدید</h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 hover:text-gray-700 bg-gray-100 p-1.5 rounded-full transition-colors"
                            >
                                <IoMdClose size={20} />
                            </button>
                        </div>
                        {/* Form */}
                        <ReviewForm reviewAddhandler={reviewAddhandler} onClose={() => setIsModalOpen(false)} />
                    </div>
                </div>
            }

        </div>
    )
}

export default ProductReviews