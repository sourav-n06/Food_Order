import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";
describe("Test Group of Elements", () => {
    test("Heading finding test", ()=>{
        render(<Contact/>);

        //Finding that thing via this 
        const contactTxt = screen.getAllByRole("heading");

        //Assertion
        expect(contactTxt.length).not.toBe(2);
    });

    it("Find Images ", ()=>{
        render(<Contact/>);

        //Finding that thing via this 
        const img = screen.getAllByRole("img");

        //Assertion
        expect(img.length).toBe(2);    
    })


})

// test or it (Both we can use)