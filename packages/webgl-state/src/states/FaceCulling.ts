import WebGLConsts from '@tsgl/webgl-consts';

export enum CullFace {
    FRONT = WebGLConsts.FRONT,
    BACK = WebGLConsts.BACK,
    FRONT_AND_BACK = WebGLConsts.FRONT_AND_BACK,
};

export enum WindingOrder {
    CW = WebGLConsts.CW,
    CCW = WebGLConsts.CCW,
};

export interface FaceCulling {
    cull?: boolean,
    cullFace?: CullFace,
    frontFace?: WindingOrder,
};
