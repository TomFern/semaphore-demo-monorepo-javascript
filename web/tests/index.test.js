const { render, screen } = require( "@testing-library/react");
const App = require("pages/index");

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Welcome to Next.js!" })
    ).toBeInTheDocument();
  });
});