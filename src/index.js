// @ts-check
import Tonic from '@socketsupply/tonic'
import Route from 'route-event'
import { routes, createRouter } from './routes.js'

class MyCount extends Tonic {
    render () {
        return this.html`
            <button>${this.props.count.toString()}</button>
        `
    }
}

class TheApp extends Tonic {
    constructor () {
        super()
        const { location } = window
        this.state = {
            route: (location.pathname + location.search),
            count: 0
        }

        this.router = createRouter()
        const onRoute = Route()
        onRoute((path) => {
            if (path !== this.state.route) {
                this.state.route = path
                this.reRender()
            }
        })
    }

    click (ev) {
        if (!Tonic.match(ev.target, 'button')) return
        ev.preventDefault()
        this.state.count++
        this.reRender()
    }

    render () {
        const match = this.router.match(this.state.route)
        if (!match) return this.html`<h1 class="404">404</h1>`

        const view = match.action(match)
        const tag = Tonic.getTagName(view.name)

        return this.html`
            <div>Hello, World.</div>
            <ul>
                <li>
                    <a href="/aaa">aaaaa</a>
                </li>
                <li>
                    <a href="/bbb">bbb</a>
                </li>
                <li>
                    <a href="/ccc">ccc</a>
                </li>
            </ul>

            <my-count id="count" count=${this.state.count}></my-count>

            <p>the current route is: ${this.state.route}</p>

            <${tag}></${tag}>
        `
    }
}

routes.forEach(route => Tonic.add(route))
Tonic.add(MyCount)
Tonic.add(TheApp)
