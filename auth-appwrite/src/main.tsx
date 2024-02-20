import ReactDOM from "react-dom/client"; //createRoot doesn't exist in react-dom -> react-dom/client is used
import { BrowserRouter } from "react-router-dom";  
import { QueryProvider } from "./lib/react-query/QueryProvider";
import AuthProvider from "./context/AuthContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render( // ! is used to tell typescript that the value is not null
    // BrowserRouter is going to control the routing of the application
    <BrowserRouter> 
        {/* // QueryProvider is used to provide the query context to the application */}
        <QueryProvider>
            {/* // AuthProvider is used to provide the context to the application */}
            <AuthProvider> 
                <App />
            </AuthProvider>
        </QueryProvider>
    </BrowserRouter>
);