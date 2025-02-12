import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const paymentMethods = [
  {
    name: "Nagad",
    img: "https://melbet.org/paysystems/xpay/images/money/nagad_wallet.png",
  },
  {
    name: "Bkash",
    img: "https://melbet.org/paysystems/xpay/images/money/bkash.png",
  },
  {
    name: "Rocket",
    img: "https://melbet.org/paysystems/xpay/images/money/rocket.png",
  },
  {
    name: "Upay",
    img: "https://melbet.org/paysystems/xpay/images/money/upay_b2b.png",
  },
  {
    name: "Bkash Merchant",
    img: "https://melbet.org/paysystems/xpay/images/money/bkash_merchant_melbet.png",
  },
  {
    name: "Free Bangla",
    img: "https://melbet.org/paysystems/xpay/images/money/free_bangla.png",
  },
  {
    name: "Tap",
    img: "https://melbet.org/paysystems/xpay/images/money/tap.png",
  },
  {
    name: "SureCash",
    img: "https://melbet.org/paysystems/xpay/images/money/surecash_megapari.png",
  },
  {
    name: "Nexus",
    img: "https://melbet.org/paysystems/xpay/images/money/nexus_megapari.png",
  },
  {
    name: "Rocket Free",
    img: "https://melbet.org/paysystems/xpay/images/money/rocket_free_melbet.png",
  },
  {
    name: "MKash",
    img: "https://melbet.org/paysystems/xpay/images/money/mkash_melbet.png",
  },
  {
    name: "OK Wallet",
    img: "https://melbet.org/paysystems/xpay/images/money/ok_wallet_melbet.png",
  },
  {
    name: "MoneyGo",
    img: "https://melbet.org/paysystems/xpay/images/money/moneygo.png",
  },
];

const FooterSlider = () => {
  return (
    <div className="p-4 text-sm text-white bg-[#212121] rounded-md">
      <Swiper
        breakpoints={{
          540: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
          1156: { slidesPerView: 5 },
        }}
        spaceBetween={10}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {paymentMethods.map((method, index) => (
          <SwiperSlide key={index}>
            <Link to="#">
              <img
                className="m-auto w-auto h-8"
                src={method.img}
                alt={method.name}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FooterSlider;
