"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
exports.users = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    fullName: (0, pg_core_1.text)('full_name'),
    email: (0, pg_core_1.text)('email'),
});
//# sourceMappingURL=scheme.js.map