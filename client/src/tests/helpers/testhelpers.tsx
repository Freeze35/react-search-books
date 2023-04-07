import {render} from "@testing-library/react";
import ContextProvider from "../../ContextProvider";
import {MemoryRouter} from "react-router-dom";

export const testHelpers = (component:any,initialEntries = "/") => {
    return render(
        <ContextProvider>
            <MemoryRouter initialEntries={[initialEntries]}>
                {component}
            </MemoryRouter>
        </ContextProvider>
    );
}