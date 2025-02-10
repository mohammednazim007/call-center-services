/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineData } from "./user-review";

// Define the type for timeline data items
interface TimelineItem {
  className: string;
  contentStyle: React.CSSProperties;
  contentArrowStyle: React.CSSProperties;
  date: string;
  iconStyle: React.CSSProperties;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  animate?: boolean;
}

const HeroVerticalReviews: React.FC = () => {
  return (
    <div className="bg-[#131b21] py-10 md:py-20">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-center text-[#009dff] py-3 pb-12">
          What client say{" "}
        </h1>
      </div>
      <VerticalTimeline>
        {timelineData.length > 0 &&
          timelineData.map((item: TimelineItem, index: number) => (
            <VerticalTimelineElement
              key={index}
              className={item.className}
              contentStyle={item.contentStyle}
              contentArrowStyle={item.contentArrowStyle}
              date={item.date}
              iconStyle={item.iconStyle}
              icon={item.icon}
              animate={item.animate}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.subtitle}
              </h4>
              <p className="">{item.description}</p>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </div>
  );
};

export default HeroVerticalReviews;
