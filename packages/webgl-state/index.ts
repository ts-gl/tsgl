import { GLParameters, RenderState } from './RenderState';

// @ts-ignore
import { setParameters, withParameters, resetParameters } from '@luma.gl/gltools';
type GLContext = WebGL2RenderingContext | WebGLRenderingContext;
declare function setParameters(gl: GLContext, values: GLParameters ) : void;
declare function withParameters<T>(gl: GLContext, parameters: GLParameters, func: (gl: GLContext) => T) : T;
declare function resetParameters(gl: GLContext) : void;

export function renderState2GLParameters(renderState: RenderState) : GLParameters {
    const params : GLParameters = {};
    let x : keyof(RenderState);
    for (let e of Object.keys(renderState)) {
        let k = e as keyof(RenderState)
        Object.assign(params, renderState[k]);
    }

    return params;
}

export const rs2gp = renderState2GLParameters;

export function setRenderState(gl: GLContext, renderState: RenderState) {
    return setParameters(gl, rs2gp(renderState));
}

export function withRenderState<T>(gl: GLContext, renderState: RenderState, func: (gl: GLContext) => T) : T {
    return withParameters(gl, rs2gp(renderState), func);
}

export function resetRenderState(gl: GLContext) : void {
    return resetParameters(gl);
}

// test
// let gl : WebGLRenderingContext = {} as WebGLRenderingContext;
// withRenderState(gl, {
//     blending: {
//         blend: true,
//         blendColor: [0, 0, 0, 1],
//     }
// }, () => {

// });