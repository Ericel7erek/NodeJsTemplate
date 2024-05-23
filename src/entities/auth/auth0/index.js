import jwt from 'jsonwebtoken';
import { getKey } from './secret';
import { getManagementApi, getAuthenticationApi } from './api';

export const verifyAuthToken = token => new Promise(((resolve, reject) => {
    jwt.verify(token, getKey, (err, decoded) => err || !decoded
        ? reject(err)
        : resolve({ ...decoded, id: decoded.sub || decoded.id }));
}));

export const ManagementClient = getManagementApi();
export const AuthenticationClient = getAuthenticationApi();