import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import MainAppHeader from "../../components/MainAppHeader";
describe("COMPONENT:MainAppHeader Tests", () => {
    it("should render name", () => {
        render(<MainAppHeader setDrawerOpen={() => { }} handleAddDialogOpen={() => { }} username="Yash" />)
        const test_element = screen.getByText(/Yash/i);
        expect(test_element).toBeDefined();
    });

    it("should open drawer", () => {
        const setDrawerOpen = vi.fn();
        render(<MainAppHeader setDrawerOpen={setDrawerOpen} handleAddDialogOpen={() => { }} username="Yash" />)
        const drawerButton = screen.getByRole('button', { name: /open drawer/i });
        user.click(drawerButton);
        expect(setDrawerOpen).toHaveBeenCalled();
    });

    it("should open add dialog", () => {
        const handleAddDialogOpen = vi.fn();
        render(<MainAppHeader setDrawerOpen={() => { }} handleAddDialogOpen={handleAddDialogOpen} username="Yash" />)
        const addButton = screen.getByRole('button', { name: /add item/i });
        user.click(addButton);
        expect(handleAddDialogOpen).toHaveBeenCalled();
    });
});