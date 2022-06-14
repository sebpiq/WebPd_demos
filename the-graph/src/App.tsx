import React from 'react'
import GraphCanvas from './GraphCanvas'
import { connect, Provider } from 'react-redux'
import DEFAULT_PATCH from './defaults/patch.pd'
import DEFAULT_SOUND from './defaults/sound.mp3'
import parsePd from '@webpd/pd-parser'
import { AppState, store } from './store'
import { create as createWebpd } from './store/webpd'
import MiniMap from './MiniMap'
import Menu from './Menu'
import Popup from './Popup'
import { getWebpdIsCreated } from './store/selectors'
import { loadRemoteArray, requestLoadPd } from './store/model'
import { setAppDimensions } from './store/ui'

export interface InnerAppProps {
    webpdIsCreated: boolean
    setAppDimensions: typeof setAppDimensions
}

const loadPatch = async () => {
    const pdJson = parsePd(DEFAULT_PATCH)
    store.dispatch(requestLoadPd(pdJson))
}

const loadSound = async () => {
    store.dispatch(loadRemoteArray('SOUND', DEFAULT_SOUND))
}

const createWebPdEngine = async () => {
    store.dispatch(createWebpd())
}

class _InnerApp extends React.Component<InnerAppProps> {
    constructor(props: InnerAppProps) {
        super(props)
        this.windowResized = this.windowResized.bind(this)
    }

    componentDidMount() {
        window.addEventListener('resize', this.windowResized)
        createWebPdEngine()
    }

    componentWillReceiveProps(nextProps: InnerAppProps) {
        if (this.props.webpdIsCreated !== nextProps.webpdIsCreated) {
            loadPatch()
        }
        loadSound()
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.windowResized)
    }

    windowResized() {
        this.props.setAppDimensions(window.innerWidth, window.innerHeight)
    }

    render() {
        return (
            <div>
                <Menu />
                <GraphCanvas />
                <MiniMap />
                <Popup />
            </div>
        )
    }
}

const InnerApp = connect(
    (state: AppState) => ({ webpdIsCreated: getWebpdIsCreated(state) }),
    { setAppDimensions }
)(_InnerApp)

const App = ({}) => {
    return (
        <Provider store={store}>
            <InnerApp />
        </Provider>
    )
}

export default App
