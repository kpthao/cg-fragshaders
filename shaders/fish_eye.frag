#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 fisheyes = texcoord * 2.0 - 1.0;
    float theta = atan(fisheyes.y, fisheyes.x);
    float radius = pow(length(fisheyes), 1.5);
    fisheyes = vec2(radius * cos(theta), radius * sin(theta));
    fisheyes = 0.5 * (fisheyes + 1.0);
    FragColor = texture(image, fisheyes);
}
