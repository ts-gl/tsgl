import { Blending } from './states/Blending';
import { FaceCulling } from './states/FaceCulling';

export type GLParameters = Blending & FaceCulling;

export interface RenderState {
    blending?: Blending,
    faceCulling?: FaceCulling,
}
