import WebGLConsts from '@tsgl/webgl2-consts';

// TODO(vtxf): luma.gl 居然没有地方设置 gl.enable(gl.SAMPLE_COVERAGE)，这是为什么？？
// [GL.SAMPLE_ALPHA_TO_COVERAGE]: isEnabled,
// [GL.SAMPLE_COVERAGE]: isEnabled,
// gl.enable(gl.SAMPLE_COVERAGE);
// gl.sampleCoverage(0.5, false);

export enum FrameBufferBINDING {
    DRAW_FRAMEBUFFER_BINDING = WebGLConsts.DRAW_FRAMEBUFFER_BINDING,
    READ_FRAMEBUFFER_BINDING = WebGLConsts.READ_FRAMEBUFFER_BINDING,
};

export interface Misc {
    sampleCoverage?: [number, boolean], // value, invert
    bindFramebuffer?: [FrameBufferBINDING, WebGLFramebuffer|void], // FrameBufferTarget, framBuffer
}
