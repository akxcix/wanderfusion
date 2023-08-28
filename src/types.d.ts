declare global {
  interface Window {
    gapi: {
      load(lib: string, callback: () => void): void;
      auth2: {
        init(params: {
          client_id: string;
          plugin_name: string;
          scope?: string;
        }): void;
        getAuthInstance(): {
          grantOfflineAccess(): Promise<{
            code: string;
          }>;
        };
      };
    };
  }
}

export {};
