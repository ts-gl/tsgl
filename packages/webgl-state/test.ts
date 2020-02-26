import WebGLConsts from '@tsgl/webgl-consts';
// @ts-ignore
import { setParameters, withParameters, resetParameters } from '@luma.gl/gltools';

type GLContext = WebGL2RenderingContext | WebGLRenderingContext;
declare function setParameters(gl: GLContext, values: GLParameters ) : void;
declare function withParameters<T>(gl: GLContext, parameters: GLParameters, func: (gl: GLContext) => T) : T;
declare function resetParameters(gl: GLContext) : void;

export enum BlendEquation {
    FUNC_ADD = WebGLConsts.FUNC_ADD,
    FUNC_SUBTRACT = WebGLConsts.FUNC_SUBTRACT,
    FUNC_REVERSE_SUBTRACT = WebGLConsts.FUNC_REVERSE_SUBTRACT,
};

export enum BlendFunction {
    ZERO = WebGLConsts.ZERO,
    ONE = WebGLConsts.ONE,
    SRC_COLOR = WebGLConsts.SRC_COLOR,
    ONE_MINUS_SRC_COLOR = WebGLConsts.ONE_MINUS_SRC_COLOR,
    DST_COLOR = WebGLConsts.DST_COLOR,
    ONE_MINUS_DST_COLOR = WebGLConsts.ONE_MINUS_DST_COLOR,
    SRC_ALPHA = WebGLConsts.SRC_ALPHA,
    ONE_MINUS_SRC_ALPHA = WebGLConsts.ONE_MINUS_SRC_ALPHA,
    DST_ALPHA = WebGLConsts.DST_ALPHA,
    ONE_MINUS_DST_ALPHA = WebGLConsts.ONE_MINUS_DST_ALPHA,
    CONSTANT_COLOR = WebGLConsts.CONSTANT_COLOR,
    ONE_MINUS_CONSTANT_COLOR = WebGLConsts.ONE_MINUS_CONSTANT_COLOR,
    CONSTANT_ALPHA = WebGLConsts.CONSTANT_ALPHA,
    ONE_MINUS_CONSTANT_ALPHA = WebGLConsts.ONE_MINUS_CONSTANT_ALPHA,
    SRC_ALPHA_SATURATE = WebGLConsts.SRC_ALPHA_SATURATE,
};

export enum WindingOrder {
    CW = WebGLConsts.CW,
    CCW = WebGLConsts.CCW,
};

export enum CullFace {
    FRONT = WebGLConsts.FRONT,
    BACK = WebGLConsts.BACK,
    FRONT_AND_BACK = WebGLConsts.FRONT_AND_BACK,
};

declare interface Blending {
    blend?: boolean,
    blendColor?: [number, number, number, number],
    blendFunc?: [BlendFunction, BlendFunction],
    blendEquation?: [BlendEquation, BlendEquation],
    blendFuncSeparate?: [BlendEquation, BlendEquation, BlendEquation, BlendEquation],
};

declare interface FaceCulling {
    cullFace?: boolean,
    frontFace?: CullFace,
};

declare interface RenderState {
    blending?: Blending,
    faceCulling?: FaceCulling,
}

type GLParameters = Blending & FaceCulling;

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

// let gl : WebGLRenderingContext = {} as WebGLRenderingContext;

// const params = renderState2GLParameters({
//     blending: {
//         blend: true,
//         blendColor: [0, 0, 0, 0],
//     },
//     faceCulling: {
//         cullFace: true,
//         frontFace: CullFace.BACK,
//     },
// });

// setParameters(gl, rs2gp({
//     blending: {
//     }
// }));