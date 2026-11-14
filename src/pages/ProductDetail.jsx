import { useParams, Link } from "react-router-dom";
import { useState } from "react";

import { useProductDetail } from "../hooks/useProductDetail";
import { getFinalPrice } from "../utils/priceUtils";
import Loader from "../components/loader/Loader";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import Breadcrumb from "../components/Breadcrumb"
import ProductSidebar from "../components/ProductSidebar";
import ProductReviews from "../components/ProductReviews";

function ProductDetail() {
  const { slug } = useParams();
  const { data: product, isLoading, error } = useProductDetail(slug);

  //استیت نظرات
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "علی رضایی",
      date: "۱۴۰۳/۰۸/۱۵",
      rating: 5,
      comment: "کیفیت مبل فوق‌العاده بود. دقیقاً همون چیزی که در عکس دیدم. ارسال هم سریع انجام شد.",
    }
    ,
    {
      id: 2,
      name: "سارا محمدی",
      date: "۱۴۰۳/۰۸/۱۰",
      rating: 4,
      comment: "رنگ و جنس پارچه خیلی خوبه. فقط کمی زودتر از موعد تحویل داده شد که خوب بود.",
    }
  ])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader size={80} color="#BE185D" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center py-20 text-red-500 font-bold bg-red-50 rounded-xl">
        خطا: {error.message}
      </div>
    );
  }
  if (!product) {
    return (
      <div className="text-center py-20 text-gray-500 bg-gray-50 rounded-xl">
        محصولی یافت نشد.
      </div>
    );
  }

  // محاسبه قیمت نهایی
  const finalPrice = getFinalPrice(product.price, product.discountPercent);

  // آماده‌سازی آرایه تصاویر (تصویر اصلی + گالری)
  const allImages = [
    ...(product.mainImage ? [product.mainImage.url] : []),
    ...(product.gallery ? product.gallery.map((img) => img.url) : []),
  ];


  const featuresList = [
    { label: "محل تولید", value: product.manufacturerCity || "تهران" },
    { label: "کلاف چوب", value: product.woodFrame || "ثبت نشده" },
    { label: "اسفنج", value: "۳۰ کیلویی" },
    { label: "نوع فوم", value: "فوم سرد شرکتی" },
    { label: "رنگ چوب", value: "دلخواه مشتری" },
    { label: "نحوه پرداخت", value: "نقد و اقساط (با چک)" },
    { label: "گارانتی", value: "۲۴ ماه ضمانت کیفیت" },
  ];

  return (
    <div className="container py-6 mt-4 lg:mt-7">
      {/*  مسیر راهنما */}
      <div className="text-sm text-gray-500  flex flex-wrap items-center gap-1">
        <Breadcrumb productName={product.name} categoryName={product.categoryName?.name} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/*  گالری تصاویر  */}
        <div className="lg:col-span-5 ">
          <ProductGallery product={product} allImages={allImages} />
        </div>
        {/* اطلاعات محصول */}
        <div className="lg:col-span-4 ">
          <ProductInfo product={product} featuresList={featuresList} reviews={reviews} />
        </div>

        {/* سایدبار خرید */}
        <ProductSidebar product={product} finalPrice={finalPrice} />
      </div>
      <ProductReviews reviews={reviews} setReviews={setReviews} />
    </div>
  );
}

export default ProductDetail;