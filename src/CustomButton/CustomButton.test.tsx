import { render, screen, fireEvent } from "@testing-library/react";
import CustomButton from "./CustomButton";

test("Renders button title", () => {
  const click = jest.fn();
  render(<CustomButton title={"Does this work"} handleClick={click} />);
  const button = screen.getByRole("button");

  fireEvent.click(button);
  expect(button).toBeInTheDocument();
  expect(click).toHaveBeenCalledTimes(1);
});
