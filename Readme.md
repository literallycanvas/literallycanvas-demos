# Literally Canvas Demos

This repository contains demonstrations of how to set up and use Literally
Canvas.

`classic_with_gui/`: Plain JS files. No `require()` usage.

`classic_without_gui/`: Same as `classic_with_gui`, but this demo uses the
    "core build" that doesn't include any UI. Instead, there is custom
    JavaScript that controls the active tool, colors, etc.

`react_npm_webpack`: A modern setup that installs Literally Canvas from NPM,
    requires it and React with CommonJS, and produces a single JavaScript file.
    This is the best way to start if you're beginning a new project.
