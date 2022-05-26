export declare const db: {
    user: {
        createUser: (user: import("libs/types/dist").User) => Promise<void>;
        getUserByEmail: (email: string) => Promise<import("libs/types/dist").User | undefined>;
        getUserById: (id: string) => Promise<import("libs/types/dist").User | undefined>;
        updateUser: (user: import("libs/types/dist").User) => Promise<void>;
    };
};
//# sourceMappingURL=index.d.ts.map