// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const mockCategory = {
    id: 0,
    name: "프로그래밍",
};
const tags = [
    {
        id: 0,
        name: "개발",
    },
    {
        id: 1,
        name: "AWS",
    },
    {
        id: 2,
        name: "DevOps",
    },
];
const lectureData = {
    lectureList: [
        {
            id: 0,
            category: mockCategory,
            title: "개발/운영/아키텍트를 아우르는 AWS/DevOps",
            tags: tags,
            description: "개발/운영/아키텍트를 아우르는 AWS/DevOps",
            thumb: "/thumb.jpg",
            isHot: true,
            isNew: true,
        },
        {
            id: 1,
            category: mockCategory,
            title: "개발/운영/아키텍트를 아우르는 AWS/DevOps",
            tags: tags,
            description: "개발/운영/아키텍트를 아우르는 AWS/DevOps",
            thumb: "/thumb.jpg",
            isHot: true,
            isNew: true,
        },
        {
            id: 2,
            category: mockCategory,
            title: "개발/운영/아키텍트를 아우르는 AWS/DevOps",
            tags: tags,
            description: "개발/운영/아키텍트를 아우르는 AWS/DevOps",
            thumb: "/thumb.jpg",
            isHot: true,
            isNew: true,
        },
    ],
};

const dataScience = {
    lectureList: [
        {
            id: 0,
            category: mockCategory,
            title: "DATA 개발/운영/아키텍트를 아우르는 AWS/DevOps",
            tags: tags,
            description: "개발/운영/아키텍트를 아우르는 AWS/DevOps",
            thumb: "/thumb.jpg",
            isHot: true,
            isNew: true,
        },
        {
            id: 1,
            category: mockCategory,
            title: "개발/운영/아키텍트를 아우르는 AWS/DevOps",
            tags: tags,
            description: "개발/운영/아키텍트를 아우르는 AWS/DevOps",
            thumb: "/thumb.jpg",
            isHot: true,
            isNew: true,
        },
        {
            id: 2,
            category: mockCategory,
            title: "개발/운영/아키텍트를 아우르는 AWS/DevOps",
            tags: tags,
            description: "개발/운영/아키텍트를 아우르는 AWS/DevOps",
            thumb: "/thumb.jpg",
            isHot: true,
            isNew: true,
        },
    ],
};

type Data = {
    name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.query.categories === "Programming") {
        res.status(200).json(lectureData);
    }
    if (req.query.categories === "DataScience") {
        res.status(200).json(dataScience);
    }
}
