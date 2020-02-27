import { Blending } from './states/Blending';
import { Color } from './states/Color';
import { Depth } from './states/Depth';
import { FaceCulling } from './states/FaceCulling';
import { Misc } from './states/Misc';
import { Scissor } from './states/Scissor';
import { Stencil } from './states/Stencil';
import { Viewport } from './states/Viewport';

export type GLParameters = Blending & Color & Depth & FaceCulling & Misc & Scissor & Stencil & Viewport;

export interface RenderState {
    blending: Blending,
    color: Color,
    depth: Depth,
    faceCulling: FaceCulling,
    misc: Misc,
    scissor: Scissor,
    stencil: Stencil,
    viewport: Viewport,
};

