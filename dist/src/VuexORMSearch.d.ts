import { Query } from '@vuex-orm/core';
import Components from './contracts/Components';
import Options from './contracts/Options';
export default class VuexORMSearch {
    /**
     * The query object.
     */
    query: typeof Query;
    /**
     * The options.
     */
    options: Options;
    /**
     * Create a new Vuex ORM Search instance.
     */
    constructor(components: Components, options: Options);
    /**
     * Plug in features.
     */
    plugin(): void;
    /**
     * Apply query mixin.
     */
    mixQuery(): void;
    /**
     * Register global `afterWhere` hook to execute search filtering during the
     * select process.
     */
    registerQueryHook(): void;
}
