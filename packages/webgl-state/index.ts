import WebGLConsts from '../webgl-consts';

export enum WindingOrder {
    CW = WebGLConsts.CW,
    CCW = WebGLConsts.CCW,
};

export enum CullFace {
    FRONT = WebGLConsts.FRONT,
    BACK = WebGLConsts.BACK,
    FRONT_AND_BACK = WebGLConsts.FRONT_AND_BACK,
};

export enum DepthFunction {
    NEVER = WebGLConsts.NEVER,
    LESS = WebGLConsts.LESS,
    EQUAL = WebGLConsts.EQUAL,
    LEQUAL = WebGLConsts.LEQUAL,
    GREATER = WebGLConsts.GREATER,
    NOTEQUAL = WebGLConsts.NOTEQUAL,
    GEQUAL = WebGLConsts.GEQUAL,
    ALWAYS = WebGLConsts.ALWAYS,
};

export enum BlendEquation {
    FUNC_ADD = WebGLConsts.FUNC_ADD,
    FUNC_SUBTRACT = WebGLConsts.FUNC_SUBTRACT,
    FUNC_REVERSE_SUBTRACT = WebGLConsts.FUNC_REVERSE_SUBTRACT,
    // MIN = WebGLConsts.MIN,
    // MAX = WebGLConsts.MAX
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

export enum StencilFunction {
    NEVER = WebGLConsts.NEVER,
    LESS = WebGLConsts.LESS,
    EQUAL = WebGLConsts.EQUAL,
    LEQUAL = WebGLConsts.LEQUAL,
    GREATER = WebGLConsts.GREATER,
    NOTEQUAL = WebGLConsts.NOTEQUAL,
    GEQUAL = WebGLConsts.GEQUAL,
    ALWAYS = WebGLConsts.ALWAYS
};

export enum StencilOperation {
    ZERO = WebGLConsts.ZERO,
    KEEP = WebGLConsts.KEEP,
    REPLACE = WebGLConsts.REPLACE,
    INCR = WebGLConsts.INCR,
    DECR = WebGLConsts.DECR,
    INVERT = WebGLConsts.INVERT,
    INCR_WRAP = WebGLConsts.INCR_WRAP,
    DECR_WRAP = WebGLConsts.DECR_WRAP,
};

export const defaultState = {
    frontFace : WindingOrder.CCW,
    cull : {
        enabled : false,
        face : CullFace.BACK
    },
    lineWidth : 1,
    polygonOffset : {
        enabled : false,
        factor : 0,
        units : 0
    },
    scissorTest : {
        enabled : false,
        rectangle : {
            x : 0,
            y : 0,
            width : 0,
            height : 0
        }
    },
    depthRange : {
        near : 0,
        far : 1
    },
    depthTest : {
        enabled : false,
        func : DepthFunction.LESS
        },
    colorMask : {
        red : true,
        green : true,
        blue : true,
        alpha : true
    },
    depthMask : true,
    stencilMask : ~0,
    blending : {
        enabled : false,
        color : {
            red : 0.0,
            green : 0.0,
            blue : 0.0,
            alpha : 0.0
        },
        equationRgb : BlendEquation.FUNC_ADD,
        equationAlpha : BlendEquation.FUNC_ADD,
        functionSourceRgb : BlendFunction.ONE,
        functionSourceAlpha : BlendFunction.ONE,
        functionDestinationRgb : BlendFunction.ZERO,
        functionDestinationAlpha : BlendFunction.ZERO
    },
    stencilTest : {
        enabled : false,
        frontFunction : StencilFunction.ALWAYS,
        backFunction : StencilFunction.ALWAYS,
        reference : 0,
        mask : ~0,
        frontOperation : {
            fail : StencilOperation.KEEP,
            zFail : StencilOperation.KEEP,
            zPass : StencilOperation.KEEP
        },
        backOperation : {
            fail : StencilOperation.KEEP,
            zFail : StencilOperation.KEEP,
            zPass : StencilOperation.KEEP
        }
    },
    sampleCoverage : {
        enabled : false,
        value : 1.0,
        invert : false
    }
};
