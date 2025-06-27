import {PublicClientApplication} from "@azure/msal-browser";
import MSSO_CONFIG from "./microsoftServiceConfig";

class MicrosoftAuthService {
    constructor() {
        this.msalApp = null;
    }

    async init(success) {
        if (!MSSO_CONFIG || Object.keys(MSSO_CONFIG).length === 0) {
            if (import.meta.env.MODE === 'development') {
                console.warn('Missing Microsoft configuration at ./microsoftServiceConfig.js');
            }
            success(false);
            return;
        }

        if (!this.msalApp) {
            this.msalApp = this.onInitializeMAS();
        }
        success(true);
    }

    onInitializeMAS() {
        const msalConfig = {
            auth: MSSO_CONFIG,
        };
        return new PublicClientApplication(msalConfig);
    }

    getMsalApp() {
        if (!this.msalApp) {
            throw new Error("MSAL App is not initialized. Please call `init()` first.");
        }
        return this.msalApp;
    }
}

export const microsoftAuthService = new MicrosoftAuthService();
