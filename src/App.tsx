import { RouterProvider } from "react-router-dom";
import { createAppRouter } from "./routes/routes";

function App() {
  return <RouterProvider router={createAppRouter} />;
}

export default App;
