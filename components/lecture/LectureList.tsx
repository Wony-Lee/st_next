import React from "react";
import LectureItem from "@/components/lecture/LectureItem";

interface Props {}

const LectureList = (props: Props): JSX.Element => {
    return (
        <div>
            <LectureItem />
        </div>
    );
};

export default LectureList;
