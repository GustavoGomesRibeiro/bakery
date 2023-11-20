import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { Waves } from "@/app/Components/index";
import * as S from "./styled";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={50}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      speed={600}
      parallax={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Parallax, Pagination, Navigation]}
      style={{
        background: "#f5cc7c",
        minHeight: "500px",
        width: "60%",
        borderRadius: "10px",
      }}
    >
      <Waves />

      {[1, 2, 3, 4].map((i) => {
        return (
          <SwiperSlide key={Math.random()}>
            <S.Container>
              <S.Content>
                <S.Title data-swiper-parallax="-300">Torta de banana</S.Title>
                <S.SubTitle data-swiper-parallax="-200">R$80</S.SubTitle>
                <S.Text data-swiper-parallax="-100">
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </S.Text>
              </S.Content>

              <S.ContentImage data-swiper-parallax="-23%">
                <S.Img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </S.ContentImage>
            </S.Container>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
