import WebGLConsts from '@tsgl/webgl-consts';

/**
 * Determines the function used to compare stencil values for the stencil test.
 *
 * @exports StencilFunc
 */
export enum StencilFunc {
    /**
     * The stencil test never passes.
     *
     * @type {Number}
     * @constant
     */
    NEVER = WebGLConsts.NEVER,

    /**
     * The stencil test passes when the masked reference value is less than the masked stencil value.
     *
     * @type {Number}
     * @constant
     */
    LESS = WebGLConsts.LESS,

    /**
     * The stencil test passes when the masked reference value is equal to the masked stencil value.
     *
     * @type {Number}
     * @constant
     */
    EQUAL = WebGLConsts.EQUAL,

    /**
     * The stencil test passes when the masked reference value is less than or equal to the masked stencil value.
     *
     * @type {Number}
     * @constant
     */
    LEQUAL = WebGLConsts.LEQUAL,

    /**
     * The stencil test passes when the masked reference value is greater than the masked stencil value.
     *
     * @type {Number}
     * @constant
     */
    GREATER = WebGLConsts.GREATER,

    /**
     * The stencil test passes when the masked reference value is not equal to the masked stencil value.
     *
     * @type {Number}
     * @constant
     */
    NOTEQUAL = WebGLConsts.NOTEQUAL,

    /**
     * The stencil test passes when the masked reference value is greater than or equal to the masked stencil value.
     *
     * @type {Number}
     * @constant
     */
    GEQUAL = WebGLConsts.GEQUAL,

    /**
     * The stencil test always passes.
     *
     * @type {Number}
     * @constant
     */
    ALWAYS = WebGLConsts.ALWAYS
};

/**
 * Determines the action taken based on the result of the stencil test.
 *
 * @exports StencilOp
 */
export enum StencilOp {
    /**
     * Sets the stencil buffer value to zero.
     *
     * @type {Number}
     * @constant
     */
    ZERO = WebGLConsts.ZERO,

    /**
     * Does not change the stencil buffer.
     *
     * @type {Number}
     * @constant
     */
    KEEP = WebGLConsts.KEEP,

    /**
     * Replaces the stencil buffer value with the reference value.
     *
     * @type {Number}
     * @constant
     */
    REPLACE = WebGLConsts.REPLACE,

    /**
     * Increments the stencil buffer value, clamping to unsigned byte.
     *
     * @type {Number}
     * @constant
     */
    INCREMENT = WebGLConsts.INCR,

    /**
     * Decrements the stencil buffer value, clamping to zero.
     *
     * @type {Number}
     * @constant
     */
    DECREMENT = WebGLConsts.DECR,

    /**
     * Bitwise inverts the existing stencil buffer value.
     *
     * @type {Number}
     * @constant
     */
    INVERT = WebGLConsts.INVERT,

    /**
     * Increments the stencil buffer value, wrapping to zero when exceeding the unsigned byte range.
     *
     * @type {Number}
     * @constant
     */
    INCREMENT_WRAP = WebGLConsts.INCR_WRAP,

    /**
     * Decrements the stencil buffer value, wrapping to the maximum unsigned byte instead of going below zero.
     *
     * @type {Number}
     * @constant
     */
    DECREMENT_WRAP = WebGLConsts.DECR_WRAP
};

/**
 * StencilFace
 *
 * @exports StencilFace
 */
export enum StencilFace {
    /**
     * Front-facing
     *
     * @type {Number}
     * @constant
     */
    FRONT = WebGLConsts.FRONT,

    /**
     * Back-facing
     *
     * @type {Number}
     * @constant
     */
    BACK = WebGLConsts.BACK,
};

export interface Stencil {
    stencilTest?: boolean,
    stencilMask?: boolean | [boolean, boolean],
    stencilMaskSeparate?: [StencilFace, boolean], // face 
    stencilFunc?: [StencilFunc, number, number], // func, ref, mask
    stencilFuncSeparate?: [StencilFace, StencilFunc, number, number], // face, func, ref, mask
    stencilOp?: [StencilOp, StencilOp, StencilOp], // fail, zfail, zpass
    stencilOpSeparate?: [StencilFace, StencilOp, StencilOp, StencilOp], // face, fail, zfail, zpass
};
