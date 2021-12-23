import React from "react";
import { Lecture } from "interface/lecture";
import TagList from "../tags/tagList";

interface Props {
    lecture: Lecture;
}

const LectureItem = ({ lecture }: Props) => {
    return (
        <div>
            <img src={lecture.thumb} alt="베스트 강의" />
            <TagList tagListData={lecture.tags} />
            <h3>{lecture.title}</h3>
            <p>{lecture.description}</p>
        </div>
    );
};

export default LectureItem;
