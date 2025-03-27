import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '98b79019-6d1b-4c29-b5e4-2059d2533e8d',
    clientToken: 'pubd3ca3408176d0e76efe3f6c85ecab5e9',
    // `site` refers to the Datadog site parameter of your organization
    // see https://docs.datadoghq.com/getting_started/site/
    site: 'us5.datadoghq.com',
    service: 'todo',
    env: 'staging',
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    defaultPrivacyLevel: 'mask-user-input',
});