/**
 * Created by anonymoussc on 6/30/15 7:40 PM.
 */

exports.config = {
    seleniumAddress : 'http://localhost:4444/wd/hub',
    specs           : ['testbSpec.js'],
    jasmineNodeOpts : {
        showColors             : true,
        defaultTimeoutInterval : 30000
    }
};