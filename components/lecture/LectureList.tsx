import React from "react";
import LectureItem from "@/components/lecture/LectureItem";
import { useQuery } from "react-query";

interface Props {}

const LectureList = (): JSX.Element => {
    const { isLoading, data } = useQuery("lecture_list", () => {
        return fetch("/api/lectures")
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                return res;
            });
    });
    if (isLoading) {
        return `<div>...Looading</div>`;
    }

    const lectureItems = data.lectureList.map((lecture) => {
        return <LectureItem key={lecture.id} lecture={lecture} />;
    });

    return <div>{lectureItems}</div>;
};

export default LectureList;
