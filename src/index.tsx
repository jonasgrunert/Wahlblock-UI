import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { AdministrationPanel } from "./components/administrationPanel";

ReactDOM.render(
    <BrowserRouter>
        <AdministrationPanel name="Wahlblock" />
    </BrowserRouter>,
    document.getElementById("example"),
);
