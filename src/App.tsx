import { Provider } from "react-redux";
import { persistedStore, store } from "./config/store";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { PersistGate } from "redux-persist/integration/react";
import { Root } from "./Root";

function App() {
    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistedStore}>
                    <RouterProvider router={routes} />
                    {/* <Root /> */}
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;