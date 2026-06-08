
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import Layout from "./components/Layout";

function App() {

  const basename = import.meta.env.DEV ? '' : '/gitseekerbr';

  return (
    <BrowserRouter basename={basename}>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  )
}

export default App
