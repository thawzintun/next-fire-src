import React from "react";
import { SplideSlide } from "@splidejs/react-splide";

const ImgSlide = () => {
    return (
        <>
            <SplideSlide className="w-full h-full">
                <img
                    src="https://www.binaryfolks.com/media/23rd%20dec%20header.png"
                    alt="Image 1"
                    className="w-full h-full"
                />
            </SplideSlide>
            <SplideSlide>
                <img
                    src="https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg"
                    alt="Image 1"
                    className="w-full h-full"
                />
            </SplideSlide>
            <SplideSlide>
                <img
                    src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/12/23174648/B-Tech-Degree.jpg"
                    alt="Image 1"
                    className="w-full h-full"
                />
            </SplideSlide>
        </>
    );
};

export default ImgSlide;
