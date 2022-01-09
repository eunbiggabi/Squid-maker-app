import { fireEvent, getByTestId, render, queryByTestId } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Search from "../pages/search/search";
import SearchCard from "../pages/search/search_info/search_card/search_card";
import CardAddForm from "../pages/maker/editor/card_add_form/card_add_form";
import CardEditForm from "../pages/maker/editor/card_edit_form/card_edit_form";

describe("Input Component", () => {
  it("rendered add form", () => {
    const { getByTestId } = render(<CardAddForm />);
    const form = getByTestId("addForm");
    expect(form).toBeTruthy();
  });

  it("rendered edit form", () => {
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
    const { getByTestId } = render(<CardEditForm card={card} />);
    const form = getByTestId("editForm");
    expect(form).toBeTruthy();
  });

  // it("render div", () => {
  //   const { getByTestId } = render(<Input showDiv={true} />);
  //   const input = getByTestId("divWeWantToShow");
  //   expect(input).toBeTruthy();
  // });

  // it("don't render div", () => {
  //   const { queryByTestId } = render(<Input showDiv={false} />);
  //   const input = queryByTestId("divWeWantToShow");
  //   expect(input).toBeFalsy();
  // });

  // it("type on input causes on search card", async () => {
  //   await act(async () => {
  //     const cards = [
  //       {
  //         id: 1,
  //         name: "Kyu",
  //         company: "Google",
  //         theme: "light",
  //         title: "Software developer",
  //         email: "kyu@email.com",
  //         message: "go for it",
  //         fileName: "kyu",
  //         fileURL: "https://i.imgur.com/LIRHSsi.jpg",
  //       },
  //       {
  //         id: 2,
  //         name: "Chloe",
  //         company: "Samsung",
  //         theme: "dark",
  //         title: "Admin",
  //         email: "chloe@email.com",
  //         message: "let's go",
  //         fileName: "chloe",
  //         fileURL:
  //           "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  //       },
  //       {
  //         id: 3,
  //         name: "Mike",
  //         company: "Coles",
  //         theme: "colorful",
  //         title: "Sales",
  //         email: "mike@email.com",
  //         message: "oh no~!",
  //         fileName: "mike",
  //         fileURL:
  //           "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //       },
  //     ];

  //     const card = {
  //       id: 1,
  //       name: "kyu",
  //       company: "Google",
  //       theme: "light",
  //       title: "Software developer",
  //       email: "kyu@email.com",
  //       message: "go for it",
  //       fileName: "kyu",
  //       fileURL: "https://i.imgur.com/LIRHSsi.jpg",
  //     };
  //     const { getByTestId } = render(<Search />);
  //     const { queryByTestId } = render(<SearchCard card={card} />);
  //     const input = getByTestId("searchButton");
  //     const searchCard = getByTestId("searchCard");
  //     const inputWord = "kyu";
  //     const update = cards.filter((item) => {
  //       item.name.includes(card).map((item) => item.name)
  //     })
  //     await fireEvent.click(input, { target: { value: update } });
  //     expect(searchCard.innerHTML).toBe(inputWord);
  //   });
  // });
});
