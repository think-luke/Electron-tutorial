import { ipcRenderer } from "electron";

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

  const closeMainWindow = () => {
    ipcRenderer.send("close-one-window")
  }

  return (
    <>
      <h1>Hello World</h1>
      <p>Welcome to my Nextron desktop app</p>
      <div>
       <button onClick={openWindow}>Open sample page</button>      
       <button onClick={showNotification}>Display a notification</button>
       <button onClick={closeMainWindow}>Close main window</button>
      <a target="_blank" href="https://www.electronjs.org/">Open Electron docs</a>
      </div>
     
    </>
  );
};

export default Home;