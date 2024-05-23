import { ManagementClient, verifyAuthToken } from '../auth0';
import UserModel from '../../user/model';


const AuthService = () => ({
    async signIn(providerToken) {
        const { id, email_verified } = await verifyAuthToken(providerToken);

        const [user] = await UserModel.findOrCreate({ auth0Id: id });

        return { user, verified: email_verified };
    },
    deleteUser(userProviderId) {
        return ManagementClient.deleteUser({ id: userProviderId });
    },
});

export default AuthService;