export declare enum WindingOrder {
    CW,
    CCW
}
export declare enum CullFace {
    FRONT,
    BACK,
    FRONT_AND_BACK
}
export declare enum DepthFunction {
    NEVER,
    LESS,
    EQUAL,
    LEQUAL,
    GREATER,
    NOTEQUAL,
    GEQUAL,
    ALWAYS
}
export declare enum BlendEquation {
    FUNC_ADD,
    FUNC_SUBTRACT,
    FUNC_REVERSE_SUBTRACT
}
export declare enum BlendFunction {
    ZERO,
    ONE,
    SRC_COLOR,
    ONE_MINUS_SRC_COLOR,
    DST_COLOR,
    ONE_MINUS_DST_COLOR,
    SRC_ALPHA,
    ONE_MINUS_SRC_ALPHA,
    DST_ALPHA,
    ONE_MINUS_DST_ALPHA,
    CONSTANT_COLOR,
    ONE_MINUS_CONSTANT_COLOR,
    CONSTANT_ALPHA,
    ONE_MINUS_CONSTANT_ALPHA,
    SRC_ALPHA_SATURATE
}
export declare enum StencilFunction {
    NEVER,
    LESS,
    EQUAL,
    LEQUAL,
    GREATER,
    NOTEQUAL,
    GEQUAL,
    ALWAYS
}
export declare enum StencilOperation {
    ZERO,
    KEEP,
    REPLACE,
    INCR,
    DECR,
    INVERT,
    INCR_WRAP,
    DECR_WRAP
}
export declare const defaultState: {
    frontFace: WindingOrder;
    cull: {
        enabled: boolean;
        face: CullFace;
    };
    lineWidth: number;
    polygonOffset: {
        enabled: boolean;
        factor: number;
        units: number;
    };
    scissorTest: {
        enabled: boolean;
        rectangle: {
            x: number;
            y: number;
            width: number;
            height: number;
        };
    };
    depthRange: {
        near: number;
        far: number;
    };
    depthTest: {
        enabled: boolean;
        func: DepthFunction;
    };
    colorMask: {
        red: boolean;
        green: boolean;
        blue: boolean;
        alpha: boolean;
    };
    depthMask: boolean;
    stencilMask: number;
    blending: {
        enabled: boolean;
        color: {
            red: number;
            green: number;
            blue: number;
            alpha: number;
        };
        equationRgb: BlendEquation;
        equationAlpha: BlendEquation;
        functionSourceRgb: BlendFunction;
        functionSourceAlpha: BlendFunction;
        functionDestinationRgb: BlendFunction;
        functionDestinationAlpha: BlendFunction;
    };
    stencilTest: {
        enabled: boolean;
        frontFunction: StencilFunction;
        backFunction: StencilFunction;
        reference: number;
        mask: number;
        frontOperation: {
            fail: StencilOperation;
            zFail: StencilOperation;
            zPass: StencilOperation;
        };
        backOperation: {
            fail: StencilOperation;
            zFail: StencilOperation;
            zPass: StencilOperation;
        };
    };
    sampleCoverage: {
        enabled: boolean;
        value: number;
        invert: boolean;
    };
};
