import Navbar
 from "./navbar/navbar";

import { useRouter } from "next/router";

const Layout = ({ children }) => {
    const router = useRouter();
    console.log(router.route)
    // Omit navbar or hide it if child is main window
    // Watch out for hoisting and bubbling events in underlying main window
    return (
        <div style={{display: "flex", gap: "25px"}}>
           { router.route !== "/main-window" && 
            <Navbar>
                {}
            </Navbar>
            }
            <main>{children}</main>
        </div>
    );
};
  
export default Layout;