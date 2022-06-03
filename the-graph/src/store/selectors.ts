import { AppState } from "."
import { graphToPd } from "../core/converters"
import { Point, Popup } from "./ui"

export const getUiTheme = (state: AppState) => state.ui.theme

export const getModelGraph = (state: AppState) => state.model.graph

export const getModelGraphVersion = (state: AppState) => state.model.graphVersion

export const getModelLibrary = (state: AppState) => state.model.library

export const getCurrentPdPatch = (state: AppState) => {
    const graph = getModelGraph(state)
    const pd = graphToPd(graph)
    return Object.values(pd.patches)[0]
}

export const getUiPopup = (state: AppState): Popup => state.ui.popup

export const getUiPanScale = (state: AppState) => state.ui.panScale

export const getUiAppDimensions = (state: AppState) => state.ui.appDimensions

export const getUiCanvasCenterPoint = (state: AppState): Point => {
    const {width: appWidth, height: appHeight} = getUiAppDimensions(state)
    const {x: panX, y: panY, scale} = getUiPanScale(state)
    const center = {
        x: (panX + appWidth / 2) / scale,
        y: (panY + appHeight / 2) / scale,
    }
    return center
}

export const getWebpdIsCreated = (state: AppState) => state.webpd.isCreated

export const getWebpdIsDspOn = (state: AppState) => state.webpd.isDspOn

export const getWebpdContext = (state: AppState) => state.webpd.context

export const getWebpdEngine = (state: AppState) => state.webpd.engine

export const getWebpdIsInitialized = (state: AppState) => state.webpd.isInitialized