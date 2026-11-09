import { useParams } from 'react-router-dom'

import { useProductDetail } from '../hooks/useProductDetail'


function ProductDetail() {
  const { slug } = useParams()
const {data:product , error , isLoading}=useProductDetail(slug)

  console.log({ product });

  return (
    <div>

    </div>

  );
}

export default ProductDetail