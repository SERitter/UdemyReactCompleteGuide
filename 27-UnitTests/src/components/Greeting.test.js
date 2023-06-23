import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("Renders Hello World! as a text", () => {
    //Arrange
    render(<Greeting />);
    //Act
    // ...nothing
    //Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Render's welcome message", () => {
    //Arrange
    render(<Greeting />);
    //Act
    // ...nothing
    //Assert
    const paragraphElement = screen.getByText("It's good to see you!", {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
  });

  test("Renders 'Changed!' Welcome message", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    //Assert
    const paragraphElement = screen.getByText("Changed!", {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
  });

  test("Should not display Welcome message after change", () => {
    //Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    //Assert
    const paragraphElement = screen.queryByText("It's good to see you!", {
      exact: false,
    });
    expect(paragraphElement).toBeNull();
  });
});
