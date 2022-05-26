"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userWithPasswordToUserDb = exports.userDbToUserWithPassword = void 0;
const userDbToUserWithPassword = (userDb) => ({
    email: userDb.email,
    id: userDb.id,
    isActive: userDb.is_active,
    password: userDb.password,
});
exports.userDbToUserWithPassword = userDbToUserWithPassword;
const userWithPasswordToUserDb = (user) => ({
    email: user.email,
    id: user.id,
    is_active: user.isActive,
    password: user.password,
});
exports.userWithPasswordToUserDb = userWithPasswordToUserDb;
//# sourceMappingURL=user_adapters.js.map