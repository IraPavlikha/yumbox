import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import styles from "./PromoSlider.module.scss";

const slides = [
    {
        id: 1,
        title: "СЕТ 21",
        price: "934 ₴",
        image: "/src/assets/dessert.png",
        bgTitle: "YUM\nBOX",
    },
    {
        id: 2,
        title: "СЕТ 22",
        price: "1200 ₴",
        image: "/src/assets/dessert.png",
        bgTitle: "YUM\nBOX",
    },
];

const PromoSlider = () => {
    return (
        <section className={styles.slider}>
            <div className="container">

                <Swiper
                    modules={[Autoplay, Navigation, Pagination, EffectFade]}
                    effect="fade"
                    speed={800}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    navigation={{
                        prevEl: `.${styles.customPrev}`,
                        nextEl: `.${styles.customNext}`,
                    }}
                    pagination={{
                        clickable: true,
                        bulletActiveClass: styles.bulletActive,
                    }}
                    loop
                    className={styles.mySwiper}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            {({ isActive }) => (
                                <div className={styles.card}>

                                    <div className={styles.bgTextContainer}>
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            // Анімуємо до 1, а реальний ліміт задаємо в SCSS через змінну
                                            animate={isActive ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ duration: 0.8 }}
                                            className={styles.largeTitle}
                                        >
                                            {slide.bgTitle.split("\n").map((line, i) => (
                                                <span key={i}>{line}</span>
                                            ))}
                                        </motion.span>
                                    </div>

                                    <div className={styles.content}>
                                        <motion.img
                                            src={slide.image}
                                            alt={slide.title}
                                            className={styles.mainImg}
                                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                            animate={
                                                isActive
                                                    ? { opacity: 1, y: 0, scale: 1 }
                                                    : { opacity: 0, y: 50, scale: 0.8 }
                                            }
                                            transition={{ type: "spring", stiffness: 70, damping: 15 }}
                                        />

                                        <div className={styles.info}>
                                            <motion.h2
                                                className={styles.title}
                                                animate={
                                                    isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                                                }
                                            >
                                                {slide.title}
                                            </motion.h2>

                                            <motion.div
                                                className={styles.priceTag}
                                                animate={
                                                    isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                                                }
                                            >
                                                {slide.price}
                                            </motion.div>
                                        </div>
                                    </div>

                                    <div className={styles.badge}>
                                        <motion.img
                                            src="/src/assets/logo-circle.png"
                                            alt="logo"
                                            animate={isActive ? { scale: 1 } : { scale: 0 }}
                                        />
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}

                    <button className={`${styles.navBtn} ${styles.customPrev}`}>
                        <HiOutlineArrowLeft />
                    </button>

                    <button className={`${styles.navBtn} ${styles.customNext}`}>
                        <HiOutlineArrowRight />
                    </button>
                </Swiper>

            </div>
        </section>
    );
};

export default PromoSlider;