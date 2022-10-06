sap.ui.define(['sap/fe/core/AppComponent'], function (AppComponent) {
    'use strict';

    return AppComponent.extend("app-fiori.Component", {
        metadata: {
            manifest: "json"
        }
    });
});

import { AlertNotificationClient, RegionUtils, BasicAuthentication } from '@sap_oss/alert-notification-client';

const client = new AlertNotificationClient({
  authentication: new BasicAuthentication({
    username: '406e6c0c-ccc6-4f25-8a06-dd74e73ab457', // Replace with your username
    password: 'yKZpg8yn1VFTuArbKTGQHRsL1gxIoKkW' // Replace with your password
  }),
  region: RegionUtils.EU10 // Choose your region
});

basicAuthentication.getAuthorizationHeaderValue()
.then(authHeaderValue => console.log(authHeaderValue))
.catch(error => console.log(error));  // The current call will print the basic authorization header value with encoded username and password in base64 format 'Basic dGVzdC11c2VybmFtZTp0ZXN0LXBhc3N3b3Jk'