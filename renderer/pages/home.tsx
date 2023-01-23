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
  };

  const getWindowCount = () => {
    ipcRenderer.send("count-windows");
  }

  const getWindowIds = () => {
    ipcRenderer.send("log-window-ids");
  }

  const getWindowURLs = () => {
    ipcRenderer.send("log-window-urls");
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
      <div className={styles.popoutBox}>
        Window information
       <button className={styles.popoutButton} onClick={getWindowCount}>Count all windows</button>
       <button className={styles.popoutButton} onClick={getWindowIds}>Get window IDs</button>      
       <button className={styles.popoutButton} onClick={getWindowURLs}>Get window URLs</button>      
      </div>
      <div className={styles.popoutBox}>
        Display a notification
       <button className={styles.popoutButton} onClick={showNotification}>Show a notification</button>      
      </div>
    </section>
  );
};

export default Home;