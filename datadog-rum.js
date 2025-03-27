import { datadogRum } from '@datadog/browser-rum';
import { reactPlugin } from '@datadog/browser-rum-react';

datadogRum.init({
    applicationId: '68d7b85a-a43b-4c44-bca4-77a560765a80',
    clientToken: 'pub3c3956ca0be325449c755ef0a7e6e85c',
    site: 'us5.datadoghq.com',
    service:'todo-app',
    env: 'staging',
    
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sessionSampleRate:  100,
    sessionReplaySampleRate: 20,
    defaultPrivacyLevel: 'mask-user-input',
    plugins: [reactPlugin({ router: true })],
});