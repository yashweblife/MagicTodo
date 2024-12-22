import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MainAppHeader from "../../components/MainAppHeader";
describe("COMPONENT:MainAppHeader Tests", () => {
    it("should render name", () => {
        render(<MainAppHeader setDrawerOpen={() => { }} handleAddDialogOpen={() => { }} username="Yash" />)
        const test_element = screen.getByText(/Yash/i);
        expect(test_element).toBeDefined();        
    })
    it("should open drawer", () => {
        const test = ()=>{
            render(<MainAppHeader setDrawerOpen={() => { }} handleAddDialogOpen={() => { }} username="Yash" />)
        }
    })
})