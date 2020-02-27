import WebGLConsts from '@tsgl/webgl-consts';

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

export interface Blending {
    blend?: boolean,
    blendColor?: [number, number, number, number],
    blendFunc?: [BlendFunction, BlendFunction],
    blendEquation?: [BlendEquation, BlendEquation],
    blendFuncSeparate?: [BlendEquation, BlendEquation, BlendEquation, BlendEquation],
};

