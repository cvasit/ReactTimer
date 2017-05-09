1.npm install karma@0.13.22 karma-chrome-launcher@0.2.2 karma-mocha@0.2.2 karma-mocha-reporter@2.0.0 karma-sourcemap-loader@0.3.7 karma-webpack@1.7.0 mocha@2.4.5 expect@1.14.0 --save

2. mistakes i made
 karma.conf.js was named as karma.config.js
 once corrected to karma.conf.js
3.IndexRoute doesnot take a path. 
4. npm install react-addons-test-utils@0.14.6 --save-dev
5.How to create instance of a component in a test class.
Use:function renderIntoDocument(<Component/>) to create an instance of the component being
tested.This is available in 'react-addons-test-utils' module.
6. _clock.scss is name with _ prefix becos it is partial.