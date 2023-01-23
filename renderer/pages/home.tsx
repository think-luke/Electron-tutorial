import { ipcRenderer } from "electron";

const Home = () => {
  const openWindow = () => {
    ipcRenderer.send("show-sample");
  };

  return (
    <>
      <h1>Hello World</h1>
      <p>Welcome to my Nextron desktop app</p>
      <button onClick={openWindow}>Open sample page</button>
    </>
  );
};

export default Home;