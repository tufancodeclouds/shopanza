import { useContext } from 'react'
import { useState, useEffect } from 'react'
import { Title } from '../index'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Item } from '../index'
import { ShopContext } from '../../context/ShopContext'

const NewArrivals = () => {

  const { products } = useContext(ShopContext);

  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const data = products.slice(0, 12);
    setPopularProducts(data);
    // console.log(data);
  }, [products]);

  return (
    <section className='max-padd-container pt-16'>
      <Title title1={"New"} title2={"Arrivals"} titleStyles={"pb-10"} paraStyles={"!block"} />

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={popularProducts.length > 10}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSwiper={(swiper) => {
          if (swiper.autoplay) {
            swiper.autoplay.stop();
          }

          setTimeout(() => {
            swiper.slideNext();

            if (swiper.autoplay) {
              swiper.autoplay.start();
            }
          }, 1000);
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