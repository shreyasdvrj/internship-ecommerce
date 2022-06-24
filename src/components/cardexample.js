import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer
} from "react-stacked-center-carousel";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import "./Slide.css";
import { Slide } from "./Slide";

const data = [
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg",
    
  },
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/71l9pCV99FL.jpg",
    
  },
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/81TKuaRtrmL.jpg",
    
  },
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/71cgoQH0zrL.jpg",
   
  }
];

function Pagination(props) {
  const { centerSlideDataIndex, updatePosition } = props;
  console.log("🚀 ~ centerSlideDataIndex--000", centerSlideDataIndex);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: 20
      }}
    >
      {data.map((_, index) => {
        const isCenterSlide = props.centerSlideDataIndex === index;
        return (
          <div
            onClick={() => {
              updatePosition(index);
            }}
            style={{
              height: 15,
              width: 15,
              borderRadius: "100%",
              background: isCenterSlide ? "black" : "none",
              border: "1px solid black",
              cursor: "pointer"
            }}
          />
        );
      })}
    </div>
  );
}

const CardExample = () => {
  const ref = React.useRef(StackedCarousel);
  const [centerSlideDataIndex, setCenterSlideDataIndex] = React.useState(0);
  const onCenterSlideDataIndexChange = (newIndex) => {
    setCenterSlideDataIndex(newIndex);
  };

  const updatePosition = (index) => {
    console.log("🚀 ~ ition ~ index", index);
    console.log("🚀 ~centerSlideDataIndex--111", centerSlideDataIndex);
    console.log("🚀 subtract", index - centerSlideDataIndex);
    ref?.current?.swipeTo(index - centerSlideDataIndex);
  };

  return (
    <div className="bs-carasoul">
      <div style={{ width: "100%", position: "relative" }}>
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => {
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Slide}
                slideWidth={200}
                carouselWidth={width}
                data={data}
                maxVisibleSlide={5}
                disableSwipe
                customScales={[1, 0.85, 0.7, 0.55]}
                transitionTime={450}
                onActiveSlideChange={onCenterSlideDataIndexChange}
              />
            );
          }}
        />
       
      </div>
      <Pagination
        updatePosition={updatePosition}
        centerSlideDataIndex={centerSlideDataIndex}
      />
    </div>
  );
};

export default CardExample;
