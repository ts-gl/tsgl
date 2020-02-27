import WebGLConsts from '@tsgl/webgl-consts';

export enum CullFace {
    FRONT = WebGLConsts.FRONT,
    BACK = WebGLConsts.BACK,
    FRONT_AND_BACK = WebGLConsts.FRONT_AND_BACK,
};

export interface FaceCulling {
    cullFace?: boolean,
    frontFace?: CullFace,
};
