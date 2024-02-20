//to simplify data fetching and state management in your application
import { 
    useQuery, //for fetching the data
    useMutation, //for modifying the data
    useQueryClient, 
    useInfiniteQuery, 
} from '@tanstack/react-query';
import { createUserAccount, signInAccount } from '../appwrite/api';
import { INewUser } from '@/types';

//for creating a new user account
export const useCreateUserAccount = () => { //useCreateUserAccountMutation is a custom hook
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user),
    });
};

//for signing in a user account
export const useSignInAccount = () => { // Mutation word is removed from the function name
    return useMutation({
        mutationFn: (user: {
            email: string;
            password: string;
        }) => signInAccount(user),
    }); 
};