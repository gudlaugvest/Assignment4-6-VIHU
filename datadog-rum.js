import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '80852c78-6366-4ae8-b655-2d636e95e803',
    clientToken: 'pub98ebafdc8c58b006ca2201d502ceea4c',
    // `site` refers to the Datadog site parameter of your organization
    // see https://docs.datadoghq.com/getting_started/site/
    site: 'us5.datadoghq.com',
    service: 'todo-app',
    env: 'staging',
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    defaultPrivacyLevel: 'mask-user-input',
});