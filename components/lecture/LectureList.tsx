import React from "react";
import LectureItem from "@/components/lecture/LectureItem";
import useLectures from "../../hooks/useLectures";

interface Props {}

const LectureList = (): JSX.Element => {
    const { isLoading, data } = useLectures("DataScience");
    if (isLoading) {
        return `<div>...Looading</div>`;
    }

    const lectureItems = data.lectureList.map((lecture) => {
        return <LectureItem key={lecture.id} lecture={lecture} />;
    });

    return <div>{lectureItems}</div>;
};

export default LectureList;
