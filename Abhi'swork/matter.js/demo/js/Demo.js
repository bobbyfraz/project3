/**
* The Matter.js demo page controller and example runner.
*
* NOTE: For the actual example code, refer to the source files in `/examples/`.
*
* @class Demo
*/

(function() {
    var sourceLinkRoot = 'https://github.com/liabru/matter-js/blob/master/examples';

    var demo = MatterTools.Demo.create({
        toolbar: {
            title: 'matter-js',
            url: 'https://github.com/liabru/matter-js',
            reset: true,
            source: true,
            inspector: true,
            tools: true,
            fullscreen: true,
            exampleSelect: true
        },
        tools: {
            inspector: true,
            gui: true
        },
        inline: false,
        preventZoom: true,
        resetOnOrientation: true,
        examples: [
            {
                name: 'Car',
                id: 'car',
                init: Example.car,
                sourceLink: sourceLinkRoot + '/car.js'
            },
         ]
     });

    document.body.appendChild(demo.dom.root);

    MatterTools.Demo.start(demo);
})();