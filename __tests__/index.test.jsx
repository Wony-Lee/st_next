/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
    it("메뉴가 렌더링 되어야 한다.", () => {
        const { getByRole } = render(<Home />);
        const menu = getByRole("navigation", {
            name: "fastcampus",
        });
        expect(menu).toBeInTheDocument();
    });
    it("배너가 렌더링 되어야 한다.", () => {
        const { getByRole } = render(<Home />);
        const banner = getByRole("banner", {
            name: "",
        });
        expect(banner).toBeInTheDocument();
    });
    it("배너가 렌더링 되어야 한다.", () => {
        const { getByTitle } = render(<Home />);
        const lectureList = getByTitle("lectureList", {
            name: "",
        });
        expect(lectureList).toBeInTheDocument();
    });
});
