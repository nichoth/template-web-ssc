import Tonic from '@socketsupply/tonic'
import Router from '@nichoth/routes'

class RouteHome extends Tonic {
    render () {
        return this.html`<h1>route home</h1>`
    }
}

class RouteAaa extends Tonic {
    render () {
        return this.html`<h1>aaa</h1>`
    }
}

class RouteBbb extends Tonic {
    render () {
        return this.html`<h1>bbb</h1>`
    }
}

class RouteCcc extends Tonic {
    render () {
        return this.html`<h1>ccc</h1>`
    }
}

export const routes = [
    RouteHome,
    RouteAaa,
    RouteBbb,
    RouteCcc
]

export function createRouter () {
    const router = Router()

    router.addRoute('/', () => RouteHome)
    router.addRoute('/aaa', () => RouteAaa)
    router.addRoute('/bbb', () => RouteBbb)
    router.addRoute('/ccc', () => RouteCcc)

    return router
}
