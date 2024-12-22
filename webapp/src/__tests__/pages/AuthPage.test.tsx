import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import AuthPage from "../../pages/AuthPage"
describe("AuthPage Tests", () => {
    const page = render(<AuthPage />)
    const user = userEvent.setup()
    it("should render login form", () => {
        const test_element = screen.getByRole("button", { name: "Login" });
        expect(test_element).toBeInTheDocument()
    })
    it("should switch to signup form", async () => {
        const test_element = screen.getByRole("button", { name: "Create An Account" });
        await user.click(test_element)
        const head = screen.getByRole("heading", { name: "Create An Account" })
        expect(head).toBeInTheDocument()
    })
})