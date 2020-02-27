import WebGLConsts from '@tsgl/webgl-consts';

enum DepthFunc {
    /**
     * The depth test never passes.
     *
     * @type {Number}
     * @constant
     */
    NEVER = WebGLConsts.NEVER,

    /**
     * The depth test passes if the incoming depth is less than the stored depth.
     *
     * @type {Number}
     * @constant
     */
    LESS = WebGLConsts.LESS,

    /**
     * The depth test passes if the incoming depth is equal to the stored depth.
     *
     * @type {Number}
     * @constant
     */
    EQUAL = WebGLConsts.EQUAL,

    /**
     * The depth test passes if the incoming depth is less than or equal to the stored depth.
     *
     * @type {Number}
     * @constant
     */
    LEQUAL = WebGLConsts.LEQUAL,

    /**
     * The depth test passes if the incoming depth is greater than the stored depth.
     *
     * @type {Number}
     * @constant
     */
    GREATER = WebGLConsts.GREATER,

    /**
     * The depth test passes if the incoming depth is not equal to the stored depth.
     *
     * @type {Number}
     * @constant
     */
    NOTEQUAL = WebGLConsts.NOTEQUAL,

    /**
     * The depth test passes if the incoming depth is greater than or equal to the stored depth.
     *
     * @type {Number}
     * @constant
     */
    GEQUAL = WebGLConsts.GEQUAL,

    /**
     * The depth test always passes.
     *
     * @type {Number}
     * @constant
     */
    ALWAYS = WebGLConsts.ALWAYS
};

export interface Depth {
    clearDepth?: number,
    depthTest?: boolean,
    depthFunc?: DepthFunc,
    depthMask?: boolean,
    depthRange?: [number, number],
};
