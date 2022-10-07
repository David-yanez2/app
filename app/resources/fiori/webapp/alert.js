
    import {
        AlertNotificationClient,
        EntityType,
        BasicAuthentication,
        RegionUtils,
        State,
        Predicate
    } from '@sap_oss/alert-notification-client';
    
    const client = new AlertNotificationClient({
        authentication: new BasicAuthentication({
            username: '406e6c0c-ccc6-4f25-8a06-dd74e73ab457',
            password: 'yKZpg8yn1VFTuArbKTGQHRsL1gxIoKkW'
        }),
        region: RegionUtils.EU10
    });
