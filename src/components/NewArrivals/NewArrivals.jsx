import { useState, useEffect } from 'react'
import { Title } from '../index'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { products } from '../../assets/images/data'
import { Item } from '../index'

const NewArrivals = () => {

  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const data = products.slice(0, 7);
    setPopularProducts(data);
    console.log(data);
  }, [products]);

  return (
    <section>
      <Title title1={"New"} title2={"Arrivals"} titleStyles={"pb-10"} paraStyles={"!block"} />

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          300:{
            slidesPerView: 2,
          },
          666:{
            slidesPerView: 3,
          },
          900:{
            slidesPerView: 4,
          },
          1300:{
            slidesPerView: 5,
          },
        }}
        className='h-[399px] mt-5'
      >
        {
          popularProducts.map((product) => (
            <SwiperSlide key={product._id}>
              <Item product={product} />
            </SwiperSlide>
          ))
        }
      </Swiper>


    </section>
  )
}

export default NewArrivals