import { withRenderState } from '../src';
import { CullFace, WindingOrder } from '../src/states/FaceCulling';

let gl = {} as WebGLRenderingContext;

withRenderState(gl, {
    faceCulling: {
        frontFace: WindingOrder.CCW,
    },
}, () => {

});