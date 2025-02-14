"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import navbarLogo from "@/app/assets/bg-private.2df28805.png";
import slider1 from "@/app/assets/bg-secure.6c5e7e8b.png";
import slider2 from "@/app/assets/bg-translate.9257ccaa.png";
import slider3 from "@/app/assets/bg-video-call.6259fb3f.png";
import slider4 from "@/app/assets/marketplace_bg.a408aa11.png";

const NavSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Image
            src={navbarLogo}
            alt="logo"
            width={1000}
            height={1000}
            loading="lazy"
          />
        </div>
        <div>
          <Image
            src={slider1}
            alt="logo"
            width={1000}
            height={1000}
            loading="lazy"
          />
        </div>
        <div>
          <Image
            src={slider2}
            alt="logo"
            width={1000}
            height={1000}
            loading="lazy"
          />
        </div>
        <div>
          <Image
            src={slider3}
            alt="logo"
            width={1000}
            height={1000}
            loading="lazy"
          />
        </div>
        <div>
          <Image
            src={slider4}
            alt="logo"
            width={1000}
            height={1000}
            loading="lazy"
          />
        </div>
      </Slider>
    </div>
  );
};

export default NavSlider;
