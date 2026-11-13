import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function ProductGallery({ product, allImages }) {
    const [mainImage, setMainImage] = useState(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    //تصویر اصلی
    const currentImage = mainImage || allImages[0];
    const slides = allImages.map((url) => ({ src: url }));

    //تابع باز کردن لایت‌باکس
    const openLightbox = (index) => {
        setLightboxIndex(index);
        setIsLightboxOpen(true);
    };

    return (
        <div className="lg:col-span-5">
            <div className="bg-white place-items-center rounded-2xl border border-gray-100 p-4 shadow-md sticky top-24">
                {/* تصویر اصلی */}
                <img
                    src={currentImage}
                    alt={product.name}
                    onClick={() => openLightbox(allImages.indexOf(currentImage))}
                    className="w-full h-[350px] md:h-[450px] object-contain rounded-xl cursor-zoom-in"
                />
                {/* تصاویر کوچک (Thumbnails) */}
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
                    {allImages.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => setMainImage(img)}
                            className={`w-16 h-16 rounded-lg border-2 overflow-hidden transition shrink-0 ${currentImage === img ? "border-pink-700" : "border-gray-200"
                                }`}
                        >
                            <img src={img} alt={`thumb-${index}`} className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            </div>
      {/* لایت‌باکس (گالری تمام‌صفحه) */}
            <Lightbox
                open={isLightboxOpen}
                close={() => setIsLightboxOpen(false)}
                slides={slides}
                index={lightboxIndex}
            />
        </div>)
}

export default ProductGallery