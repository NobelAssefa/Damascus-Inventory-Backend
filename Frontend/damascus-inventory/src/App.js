import Sidebar from "./scenes/Global/Sidebar";
import Topbar from "./scenes/Global/Top bar";
import { colorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./scenes/Dashboard"
import Users from "./scenes/Users"
import Products from "./scenes/Products";
import AddUser from "./scenes/Users/AddUser";
import AddProduct from "./scenes/Products/AddProduct";
import Calendar from "./scenes/Calendar";
function App() {
  const [theme, coloMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <colorModeContext.Provider value={coloMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar = {setIsSidebar}/>
            <Routes>
              <Route path="/" element = {<Dashboard/>}/>
              <Route path="/users" element = {<Users/>}/>
              <Route path="/products" element = {<Products/>}/>
              <Route path="/createUser" element = {<AddUser/>}/>
              <Route path="/createProduct" element = {<AddProduct/>}/>
              <Route path="/calendar" element = {<Calendar/>}/>


            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
