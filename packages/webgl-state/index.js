import WebGLConsts from '../webgl-consts';
export var WindingOrder;
(function (WindingOrder) {
    WindingOrder[WindingOrder["CW"] = WebGLConsts.CW] = "CW";
    WindingOrder[WindingOrder["CCW"] = WebGLConsts.CCW] = "CCW";
})(WindingOrder || (WindingOrder = {}));
;
export var CullFace;
(function (CullFace) {
    CullFace[CullFace["FRONT"] = WebGLConsts.FRONT] = "FRONT";
    CullFace[CullFace["BACK"] = WebGLConsts.BACK] = "BACK";
    CullFace[CullFace["FRONT_AND_BACK"] = WebGLConsts.FRONT_AND_BACK] = "FRONT_AND_BACK";
})(CullFace || (CullFace = {}));
;
export var DepthFunction;
(function (DepthFunction) {
    DepthFunction[DepthFunction["NEVER"] = WebGLConsts.NEVER] = "NEVER";
    DepthFunction[DepthFunction["LESS"] = WebGLConsts.LESS] = "LESS";
    DepthFunction[DepthFunction["EQUAL"] = WebGLConsts.EQUAL] = "EQUAL";
    DepthFunction[DepthFunction["LEQUAL"] = WebGLConsts.LEQUAL] = "LEQUAL";
    DepthFunction[DepthFunction["GREATER"] = WebGLConsts.GREATER] = "GREATER";
    DepthFunction[DepthFunction["NOTEQUAL"] = WebGLConsts.NOTEQUAL] = "NOTEQUAL";
    DepthFunction[DepthFunction["GEQUAL"] = WebGLConsts.GEQUAL] = "GEQUAL";
    DepthFunction[DepthFunction["ALWAYS"] = WebGLConsts.ALWAYS] = "ALWAYS";
})(DepthFunction || (DepthFunction = {}));
;
export var BlendEquation;
(function (BlendEquation) {
    BlendEquation[BlendEquation["FUNC_ADD"] = WebGLConsts.FUNC_ADD] = "FUNC_ADD";
    BlendEquation[BlendEquation["FUNC_SUBTRACT"] = WebGLConsts.FUNC_SUBTRACT] = "FUNC_SUBTRACT";
    BlendEquation[BlendEquation["FUNC_REVERSE_SUBTRACT"] = WebGLConsts.FUNC_REVERSE_SUBTRACT] = "FUNC_REVERSE_SUBTRACT";
    // MIN = WebGLConsts.MIN,
    // MAX = WebGLConsts.MAX
})(BlendEquation || (BlendEquation = {}));
;
export var BlendFunction;
(function (BlendFunction) {
    BlendFunction[BlendFunction["ZERO"] = WebGLConsts.ZERO] = "ZERO";
    BlendFunction[BlendFunction["ONE"] = WebGLConsts.ONE] = "ONE";
    BlendFunction[BlendFunction["SRC_COLOR"] = WebGLConsts.SRC_COLOR] = "SRC_COLOR";
    BlendFunction[BlendFunction["ONE_MINUS_SRC_COLOR"] = WebGLConsts.ONE_MINUS_SRC_COLOR] = "ONE_MINUS_SRC_COLOR";
    BlendFunction[BlendFunction["DST_COLOR"] = WebGLConsts.DST_COLOR] = "DST_COLOR";
    BlendFunction[BlendFunction["ONE_MINUS_DST_COLOR"] = WebGLConsts.ONE_MINUS_DST_COLOR] = "ONE_MINUS_DST_COLOR";
    BlendFunction[BlendFunction["SRC_ALPHA"] = WebGLConsts.SRC_ALPHA] = "SRC_ALPHA";
    BlendFunction[BlendFunction["ONE_MINUS_SRC_ALPHA"] = WebGLConsts.ONE_MINUS_SRC_ALPHA] = "ONE_MINUS_SRC_ALPHA";
    BlendFunction[BlendFunction["DST_ALPHA"] = WebGLConsts.DST_ALPHA] = "DST_ALPHA";
    BlendFunction[BlendFunction["ONE_MINUS_DST_ALPHA"] = WebGLConsts.ONE_MINUS_DST_ALPHA] = "ONE_MINUS_DST_ALPHA";
    BlendFunction[BlendFunction["CONSTANT_COLOR"] = WebGLConsts.CONSTANT_COLOR] = "CONSTANT_COLOR";
    BlendFunction[BlendFunction["ONE_MINUS_CONSTANT_COLOR"] = WebGLConsts.ONE_MINUS_CONSTANT_COLOR] = "ONE_MINUS_CONSTANT_COLOR";
    BlendFunction[BlendFunction["CONSTANT_ALPHA"] = WebGLConsts.CONSTANT_ALPHA] = "CONSTANT_ALPHA";
    BlendFunction[BlendFunction["ONE_MINUS_CONSTANT_ALPHA"] = WebGLConsts.ONE_MINUS_CONSTANT_ALPHA] = "ONE_MINUS_CONSTANT_ALPHA";
    BlendFunction[BlendFunction["SRC_ALPHA_SATURATE"] = WebGLConsts.SRC_ALPHA_SATURATE] = "SRC_ALPHA_SATURATE";
})(BlendFunction || (BlendFunction = {}));
;
export var StencilFunction;
(function (StencilFunction) {
    StencilFunction[StencilFunction["NEVER"] = WebGLConsts.NEVER] = "NEVER";
    StencilFunction[StencilFunction["LESS"] = WebGLConsts.LESS] = "LESS";
    StencilFunction[StencilFunction["EQUAL"] = WebGLConsts.EQUAL] = "EQUAL";
    StencilFunction[StencilFunction["LEQUAL"] = WebGLConsts.LEQUAL] = "LEQUAL";
    StencilFunction[StencilFunction["GREATER"] = WebGLConsts.GREATER] = "GREATER";
    StencilFunction[StencilFunction["NOTEQUAL"] = WebGLConsts.NOTEQUAL] = "NOTEQUAL";
    StencilFunction[StencilFunction["GEQUAL"] = WebGLConsts.GEQUAL] = "GEQUAL";
    StencilFunction[StencilFunction["ALWAYS"] = WebGLConsts.ALWAYS] = "ALWAYS";
})(StencilFunction || (StencilFunction = {}));
;
export var StencilOperation;
(function (StencilOperation) {
    StencilOperation[StencilOperation["ZERO"] = WebGLConsts.ZERO] = "ZERO";
    StencilOperation[StencilOperation["KEEP"] = WebGLConsts.KEEP] = "KEEP";
    StencilOperation[StencilOperation["REPLACE"] = WebGLConsts.REPLACE] = "REPLACE";
    StencilOperation[StencilOperation["INCR"] = WebGLConsts.INCR] = "INCR";
    StencilOperation[StencilOperation["DECR"] = WebGLConsts.DECR] = "DECR";
    StencilOperation[StencilOperation["INVERT"] = WebGLConsts.INVERT] = "INVERT";
    StencilOperation[StencilOperation["INCR_WRAP"] = WebGLConsts.INCR_WRAP] = "INCR_WRAP";
    StencilOperation[StencilOperation["DECR_WRAP"] = WebGLConsts.DECR_WRAP] = "DECR_WRAP";
})(StencilOperation || (StencilOperation = {}));
;
export const defaultState = {
    frontFace: WindingOrder.CCW,
    cull: {
        enabled: false,
        face: CullFace.BACK
    },
    lineWidth: 1,
    polygonOffset: {
        enabled: false,
        factor: 0,
        units: 0
    },
    scissorTest: {
        enabled: false,
        rectangle: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    },
    depthRange: {
        near: 0,
        far: 1
    },
    depthTest: {
        enabled: false,
        func: DepthFunction.LESS
    },
    colorMask: {
        red: true,
        green: true,
        blue: true,
        alpha: true
    },
    depthMask: true,
    stencilMask: ~0,
    blending: {
        enabled: false,
        color: {
            red: 0.0,
            green: 0.0,
            blue: 0.0,
            alpha: 0.0
        },
        equationRgb: BlendEquation.FUNC_ADD,
        equationAlpha: BlendEquation.FUNC_ADD,
        functionSourceRgb: BlendFunction.ONE,
        functionSourceAlpha: BlendFunction.ONE,
        functionDestinationRgb: BlendFunction.ZERO,
        functionDestinationAlpha: BlendFunction.ZERO
    },
    stencilTest: {
        enabled: false,
        frontFunction: StencilFunction.ALWAYS,
        backFunction: StencilFunction.ALWAYS,
        reference: 0,
        mask: ~0,
        frontOperation: {
            fail: StencilOperation.KEEP,
            zFail: StencilOperation.KEEP,
            zPass: StencilOperation.KEEP
        },
        backOperation: {
            fail: StencilOperation.KEEP,
            zFail: StencilOperation.KEEP,
            zPass: StencilOperation.KEEP
        }
    },
    sampleCoverage: {
        enabled: false,
        value: 1.0,
        invert: false
    }
};
