import styles from "./navbar.module.css";
// Recoil 
const Navbar = ({ children }) => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <div className={styles.app}>
                        <a target="_blank" className={styles.app} href="https://nextjs.org/">
                            Next.js    
                        </a>  
                    </div>
                </li>
                <li className={styles.item}>
                    <div className={styles.app}>
                        <a target="_blank" className={styles.app} href="https://www.electronjs.org/">
                            Electron            
                        </a>
                    </div>
                </li>
                <li className={styles.item}>
                    <div className={styles.app}>
                        <a target="_blank" className={styles.app} href="https://tailwindcss.com/">
                            Tailwind CSS        
                        </a>   
                    </div>
                </li>
                <li className={styles.item}>
                    <div className={styles.app}>
                        <a target="_blank" className={styles.app} href="https://storybook.js.org/">
                            Storybook    
                        </a>
                    </div>
                </li>
                <li className={styles.item}>
                    <div className={styles.app}>
                        <a target="_blank" className={styles.app} href="https://nx.dev/">
                            Nx    
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
    );
};
  
export default Navbar;