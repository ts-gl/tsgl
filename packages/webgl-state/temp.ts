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

export interface State {
    frontFace?: WindingOrder,
    cull?: {
        enabled?: boolean,
        face?: CullFace,
    },
    lineWidth?: number,
    polygonOffset?: {
        enabled?: boolean,
        factor?: number,
        units?: number,
    },
    scissorTest?: {
        enabled?: boolean,
        rectangle?: {
            x?: number,
            y?: number,
            width?: number,
            height?: number,
        }
    },
    viewport? : {
        x?: number,
        y?: number,
        width?: number,
        height?: number,
    },
    depthRange?: {
        near?: number,
        far?: number,
    },
    depthTest?: {
        enabled?: boolean,
        func?: DepthFunction,
    },
    colorMask?: [boolean, boolean, boolean, boolean],
    depthMask?: true,
    stencilMask?: number,
    blending?: {
        enabled?: boolean,
        color?: [number, number, number, number],
        equationRgb?: BlendEquation,
        equationAlpha?: BlendEquation,
        functionSourceRgb?: BlendFunction,
        functionSourceAlpha?: BlendFunction,
        functionDestinationRgb?: BlendFunction,
        functionDestinationAlpha?: BlendFunction
    },
    stencilTest?: {
        enabled?: boolean,
        frontFunction?: StencilFunction,
        backFunction?: StencilFunction,
        reference?: number,
        mask?: number,
        frontOperation?: {
            fail?: StencilOperation,
            zFail?: StencilOperation,
            zPass?: StencilOperation
        },
        backOperation?: {
            fail?: StencilOperation,
            zFail?: StencilOperation,
            zPass?: StencilOperation
        }
    },
    sampleCoverage?: {
        enabled?: boolean,
        value?: number,
        invert?: boolean
    }
};

export const defaultState = {
    frontFace: WindingOrder.CCW,
    cull: {
        enabled: false,
        face: CullFace.BACK,
    },
    lineWidth: 1,
    polygonOffset: {
        enabled: false,
        factor: 0,
        units: 0,
    },
    scissorTest: {
        enabled: false,
        rectangle: {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
        },
    },
    viewport: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    },
    depthRange: {
        near: 0,
        far: 1,
    },
    depthTest: {
        enabled: false,
        func: DepthFunction.LESS,
    },
    colorMask: [true, true, true, true],
    depthMask: true,
    stencilMask: ~0,
    blending: {
        enabled: false,
        color: [0, 0, 0, 0],
        equationRgb: BlendEquation.FUNC_ADD,
        equationAlpha: BlendEquation.FUNC_ADD,
        functionSourceRgb: BlendFunction.ONE,
        functionSourceAlpha: BlendFunction.ONE,
        functionDestinationRgb: BlendFunction.ZERO,
        functionDestinationAlpha: BlendFunction.ZERO,
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
            zPass: StencilOperation.KEEP,
        },
    },
    sampleCoverage: {
        enabled: false,
        value: 1.0,
        invert: false,
    },
};

export function applyDefaultState(gl: WebGL2RenderingContext | WebGLRenderingContext) {

}

function _isUndefined(val: any) : val is undefined {
    return typeof val === 'undefined';
}

function _isNull(val: any) : val is null {
    return val === null;
}

function getValue(state: State, props: string[]) {
    let val = state;
    for (let p of props) {
        // @ts-ignore
        val = val[p];
        if (_isUndefined(val) || _isNull(val)) {
            break;
        }
    }

    if (_isUndefined(val)) {
        // @ts-ignore
        val = defaultState;
        for (let p of props) {
        // @ts-ignore
            val = val[p];
        }
    }

    if (_isUndefined(val) || _isNull(val)) {
        throw new Error('val should not be undefined!');
    }

    return val;
}

export function applyState(gl : WebGL2RenderingContext | WebGLRenderingContext, state : State) {
    if (!_isUndefined(state.frontFace)) {
        gl.frontFace(getValue(state, ['frontFace']) as number);
    }

    if (!_isUndefined(state.cull)) {
        const enabled = getValue(state, ['cull', 'enabled'])
        if (enabled) {
            gl.enable(gl.CULL_FACE);
            gl.cullFace(getValue(state, ['cull', 'face']) as number);
        } else {
            gl.disable(gl.CULL_FACE);
        }
    }
    
    if (!_isUndefined(state.lineWidth)) {
        gl.lineWidth(getValue(state, ['lineWidth']) as number);
    }

    if (!_isUndefined(state.polygonOffset)) {
        const enabled = getValue(state, ['polygonOffset', 'enabled'])
        if (enabled) {
            gl.enable(gl.POLYGON_OFFSET_FILL);
            const factor = getValue(state, ['polygonOffset', 'factor']) as number;
            const units = getValue(state, ['polygonOffset', 'units']) as number;
            gl.polygonOffset(factor, units);
        } else {
            gl.disable(gl.POLYGON_OFFSET_FILL);
        }
    }
    
    if (!_isUndefined(state.scissorTest)) {
        const enabled = getValue(state, ['scissorTest', 'enabled'])
        if (enabled) {
            gl.enable(gl.SCISSOR_TEST);
            const x = getValue(state, ['scissorTest', 'rectangle', 'x']) as number;
            const y = getValue(state, ['scissorTest', 'rectangle', 'y']) as number;
            const width = getValue(state, ['scissorTest', 'rectangle', 'width']) as number;
            const height = getValue(state, ['scissorTest', 'rectangle', 'height']) as number;
            gl.scissor(x, y, width, height);
        } else {
            gl.disable(gl.SCISSOR_TEST);
        }
    }

    if (!_isUndefined(state.viewport)) {
        const x = getValue(state, ['viewport', 'x']) as number;
        const y = getValue(state, ['viewport', 'y']) as number;
        const width = getValue(state, ['viewport', 'width']) as number;
        const height = getValue(state, ['viewport', 'height']) as number;
        gl.viewport(x, y, width, height);
    }

    if (!_isUndefined(state.depthRange)) {
        const near = getValue(state, ['depthRange', 'near']) as number;
        const far = getValue(state, ['depthRange', 'far']) as number;
        gl.depthRange(near, far);
    }
}
