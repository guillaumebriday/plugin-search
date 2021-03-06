import './types/vuex-orm'

import Components from './contracts/Components'
import Options from './contracts/Options'
import VuexORMSearch from './VuexORMSearch'

export { Options }

export default {
  install(components: Components, installOptions: Options): void {
    new VuexORMSearch(components, installOptions).plugin()
  }
}
