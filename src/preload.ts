// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';

if (!process.contextIsolated) {
    throw new Error('This renderer process is not context isolated');
}

try {
    contextBridge.exposeInMainWorld('electronAPI', {
        setOnTop: (isOnTop: boolean) => {
            ipcRenderer.send('setOnTop', isOnTop);
        },
    });
} catch (error) {
    console.error('Failed to expose electronAPI:', error);
}