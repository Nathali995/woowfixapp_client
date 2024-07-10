import React, {createContext, useContext, useState, useEffect} from "react";
import NetInfo from "@react-native-community/netinfo";

type AuthContextData = {
    authData?: {};
    signIn(authData: {}):Promise<void>;
    signOut(): void;
    isOffline: boolean;
    isLogged: boolean;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);


const AuthProvider: React.FC = ({ children } : any) => {

    const [authData, setAuthData] = useState<{}>();
    const [isLogged, setIsLogged] = useState(false);
    const [isOffline, setOfflineStatus] = useState(false);

    useEffect(() => {
        // Intial status
        NetInfo.fetch().then((state) => {
            const offline = state.isConnected && (state.isInternetReachable || state.isInternetReachable === null) ? false : true;
            setOfflineStatus(offline);
        });
        // Internet connection listener
        const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
            const offline = state.isConnected && (state.isInternetReachable || state.isInternetReachable === null) ? false : true;
            setOfflineStatus(offline);
        });
        return () => removeNetInfoSubscription();
    }, []);

    const signIn = async (authData: {}) => {
        setAuthData({userID: 1})
        setIsLogged(true)
    }
    
    const signOut = async () => {
        setAuthData(undefined)
        setIsLogged(false)
    }

    return (
        <AuthContext.Provider value={{authData, signIn,signOut, isOffline, isLogged}}>
            {children}
        </AuthContext.Provider>
    );
};

/**
 * Creating hooks
 * @returns AuthContextData
 */
function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export {AuthContext, AuthProvider, useAuth};
