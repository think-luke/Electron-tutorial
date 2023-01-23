import { ipcRenderer } from "electron";
import styles from "../css/home.module.css";

const Home = () => {

  const openWindow = () => {
    ipcRenderer.send("show-sample");
  };

  const showNotification = () => {
    const notificationTitle = "My Notification 🔔";
  
    new Notification(notificationTitle, {
      body: "This is a sample notification.",
    }).onclick = () => console.log("Notification Clicked");
  };

  const closeSampleWindow = () => {
    ipcRenderer.send("close-one-window")
  }

  return (
    <section className={styles.home}>
      <div className={styles.banner}>
        <h1 className={styles.appTitle}>Sub app content</h1>  
        <div className={styles.tabBox}>
          <p className={styles.tab}>--- We'll have tabs and pinned apps around here ---</p>
        </div>
      </div>
      <div className={styles.popoutBox}>
        Pop out window demo
       <button className={styles.popoutButton} onClick={openWindow}>Pop out sample window</button>      
       <button className={styles.popoutButton} onClick={closeSampleWindow}>Close sample pop out</button>
      </div>
    </section>
  );
};

export default Home;