import { IoMdStar } from "react-icons/io";
import { BsCheckCircleFill } from "react-icons/bs";
import { LuSparkles } from "react-icons/lu";

function ProductInfo({ featuresList, product, reviews= [] }) {
    return (
        <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-md">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">{product.name}</h1>
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1 text-yellow-500">
                        <IoMdStar size={18} /> ۴.۵
                    </span>
                    <span>({reviews.length.toLocaleString("fa-IR")} نظر)</span>
                </div>

                <hr className="my-4 border-gray-100" />

                <h3 className="font-bold text-gray-800 mb-3">ویژگی‌ها</h3>
                <ul className="space-y-4 text-sm text-gray-600">
                    {featuresList.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <BsCheckCircleFill className="text-pink-700 mt-1 shrink-0" />
                            <span>
                                <span className="text-gray-500">{item.label}:</span>{" "}
                                <span className="font-bold text-gray-600/90">{item.value}</span>
                            </span>
                        </li>
                    ))}
                </ul>

                <hr className="my-4 border-gray-100" />

                <div className="mt-7">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <LuSparkles className="text-pink-700 animate-bounce " />
                        توضیحات محصول
                    </h2>
                    <div
                        className="bg-white  rounded-2xl border border-gray-100 p-3 shadow-sm text-gray-700 font-medium leading-8"
                        dangerouslySetInnerHTML={{
                            __html: product.description?.html || "توضیحات بیشتری برای این محصول ثبت نشده است."
                        }}
                    />
                </div>
            </div>
        </div>)
}

export default ProductInfo