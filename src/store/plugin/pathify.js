import Pathify, {make} from "vuex-pathify"

Pathify.options.mapping = 'simple'
Pathify.options.deep = 1
Pathify.debug()

export default Pathify

export {
    make
}
