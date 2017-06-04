import defaultConfig from './config';
import customConfig from '../../config/custom';
var customConfigFn = customConfig.icon;
import layout from './layout';
// Does not contain color styles
import styler from '../../common/styler';

var config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

styler.add('pe-icon', layout(config));