import { fireEvent, getByTestId, render, queryByTestId } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import SearchCard from "../pages/search/search_info/search_card/search_card";
import Card from "../pages/maker/preview/card/card";
import Search from "../pages/search/search";


describe("Card Component", () => {
  it("rendered maker preview card", () => {
    const card = {
      id: 1,
      name: "Kyu",
      company: "Google",
      theme: "light",
      title: "Software developer",
      email: "kyu@email.com",
      message: "go for it",
      fileName: "kyu",
      fileURL: "https://i.imgur.com/LIRHSsi.jpg",
    };
    const { getByTestId } = render(<Card card={card} />);
    const previewCard = getByTestId("previewCard");
    expect(previewCard).toBeTruthy();
  });

  it("rendered search card", () => {
    const card = {
      id: 1,
      name: "Kyu",
      company: "Google",
      theme: "light",
      title: "Software developer",
      email: "kyu@email.com",
      message: "go for it",
      fileName: "kyu",
      fileURL: "https://i.imgur.com/LIRHSsi.jpg",
    };
    const { getByTestId } = render(<SearchCard card={card} />);
    const searchCard = getByTestId("searchCard");
    expect(searchCard).toBeTruthy();
  });

  // it("render card if it exist", () => {
  //   const { getByTestId } = render(<Search />);
  //   const input = getByTestId("divWeWantToShow");
  //   expect(input).toBeTruthy();
  // });
});
