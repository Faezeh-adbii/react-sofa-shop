import React from 'react'
import { IoMdStar, IoMdStarOutline } from 'react-icons/io'
import { useForm } from 'react-hook-form'

import { formFields } from "../constants/formFields"
import { ratingText } from '../constants/ratingText'

function ReviewForm({ reviewAddhandler, onClose }) {
    const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            comment: "",
            rating: 5,
        }
    })
    const currentRating = watch("rating", 5)

    //گرفتن دیتا فرم
    const onSubmit = (data) => {
        const newReview = {
            id: Date.now(),
            name: data.name,
            email: data.email,
            date: new Date().toLocaleDateString("fa-IR"),
            rating: data.rating,
            comment: data.comment
        }
        //ارسال نظر جدید به والد
        reviewAddhandler(newReview)
        reset()
        //بستن مودال
        onClose()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {formFields.map(field =>
                    <div key={field.name}>
                        <label className="block text-sm text-gray-600 mb-1" >{field.label}</label>
                        <input type={field.type} {...register(field.name, field.validation)} className={`w-full bg-gray-50 border transition-all duration-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 ${errors[field.name] ? "border-red-500" : "border-gray-200"
                            }`} placeholder={field.placeholder} dir={field.dir} />
                        {errors[field.name] && (
                            <p className="text-red-500 text-xs mt-1">{errors[field.name].message}</p>
                        )}
                    </div>)
                }
            </div>
            <div className='w-full bg-gray-50 border border-gray-50 rounded-lg px-3 py-2 text-sm '>
                <label className="block text-sm text-gray-600 mb-1">امتیاز شما</label>
                <p className="block text-xs text-gray-500 mb-5" >با انتخاب ستاره‌ها امتیاز را از ۱ (کمترین) تا ۵ (بیشترین) مشخص کنید.
                </p>
                <div className='flex justify-center items-center mb-2 ' dir='ltr'>
                    {[1, 2, 3, 4, 5].map(star =>
                        <button
                            key={star}
                            type='button'
                            onClick={() => setValue("rating", star)}
                            className="text-3xl focus:outline-none transition-transform hover:scale-110"
                        >
                            {star <= currentRating ? (
                                <IoMdStar className="text-yellow-400" />
                            ) : (
                                <IoMdStarOutline className="text-gray-300" />
                            )}
                        </button>
                    )}
                </div>
                {/*  نمایش متن توصیفی امتیاز */}
                <div className="text-center mt-2">
                    <span className='inline-block bg-amber-50 text-amber-700 px-3 py-1 rounded-lg text-xs font-bold'>
                        {ratingText[currentRating]}
                    </span>

                </div>
                {/* اینپوت مخفی*/}
                <input type="hidden" {...register("rating")} />
            </div>
            <div>
                <label className="block text-sm text-gray-600 mb-1">متن نظر</label>
                <textarea {...register("comment", { required: "متن الزامی است" })} rows="4" className={`w-full bg-gray-50 border rounded-lg px-3 py-2 text-sm focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-pink-500 resize-none ${errors.comment ? "border-red-500" : "border-gray-200"
                    }`} placeholder="نظر خود را با دیگران به اشتراک بگذارید...">
                </textarea>
                {errors.comment && (
                    <p className="text-red-500 text-xs mt-1">{errors.comment.message}</p>
                )}
            </div>
            <div>
                <button type="submit"
                    className="w-full bg-box hover:bg-pink-800 text-white font-bold py-3 rounded-xl transition shadow-md">
                    ارسال نظر
                </button>
            </div>
        </form>
    )
}

export default ReviewForm