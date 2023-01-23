// Import the necessary Electron modules
import { ipcRenderer, contextBridge, IpcRendererEvent } from 'electron';

// Exposed protected methods in the render process
contextBridge.exposeInMainWorld(
    // Allowed 'ipcRenderer' methods
    'electronApi', {
        // From main to render
        sendSettings: (message) => {
            ipcRenderer.on('sendSettings', message);
        }
    }
);