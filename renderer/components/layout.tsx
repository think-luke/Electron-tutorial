import Navbar
 from "./navbar/navbar";
const Layout = ({ children }) => {
    return (
        <div style={{display: "flex", gap: "25px"}}>
            <Navbar>
                {children}
            </Navbar>
            <main>{children}</main>
        </div>
    );
};
  
export default Layout;