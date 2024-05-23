import auth0 from 'auth0';

const config = {
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_SECRET,
    audience: process.env.AUTH0_AUDIENCE,
};

export const getManagementApi = () => new auth0.ManagementClient(config);

export const getAuthenticationApi = () => new auth0.AuthenticationClient(config);