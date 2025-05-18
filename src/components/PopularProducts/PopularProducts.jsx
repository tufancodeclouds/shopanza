import { useContext } from 'react'
import { useState, useEffect } from 'react'
import { Title } from '../index'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Item } from '../index'
import { ShopContext } from '../../context/ShopContext'

const PopularProducts = () => {

  const { products } = useContext(ShopContext);

  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const data = products.filter(product => product.popular);
    setPopularProducts(data.slice(0, 12));
    // console.log(data);
  }, [products]);

  return (
    <section className="max-padd-container py-16">
      <Title title1={"Popular"} title2={"Products"} titleStyles={"pb-10"} paraStyles={"!block"} />

      {/* <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {
          popularProducts.map(product => (
            <Item key={product._id} product={product} />
          ))
        }
      </div> */}

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

export default PopularProducts