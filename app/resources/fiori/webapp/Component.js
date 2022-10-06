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
    username: '<your-technical-client-username>', // Replace with your username
    password: '<your-technical-client-password>' // Replace with your password
  }),
  region: RegionUtils.EU10-004 // Choose your region
});