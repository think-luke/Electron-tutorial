const mainWindow = () => {
  // Could leverage Recoil to maintain state
  // This window would have channels that other apps can listen to
  // Deal with more complicated aspects of the state
  // Fake things like window position (bonus, not MVP, out of scope)
  // In scope: keep this app lightweight and people can switch back and forth between sub-apps
  // Keep subapps loaded in the background, without a reload and without crashing
  return (
    <></>
  );
};

export default mainWindow;