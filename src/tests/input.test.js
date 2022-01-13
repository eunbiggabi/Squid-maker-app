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
});
