import { User } from "@unpollito/types";
export declare const userApi: {
    createUser: (user: User) => Promise<void>;
    getUserByEmail: (email: string) => Promise<User | undefined>;
    getUserById: (id: string) => Promise<User | undefined>;
    updateUser: (user: User) => Promise<void>;
};
//# sourceMappingURL=user_api.d.ts.map