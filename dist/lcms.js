/*
 * Originally written by yoya:
 * 2018/03/06- (c) yoya@awm.jp
 *
 * With modifications by @mattdesl for ES6 and updated Emscripten
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BYTES_SH: function() {
        return BYTES_SH;
    },
    CHANNELS_SH: function() {
        return CHANNELS_SH;
    },
    COLORSPACE_SH: function() {
        return COLORSPACE_SH;
    },
    DOSWAP_SH: function() {
        return DOSWAP_SH;
    },
    ENDIAN16_SH: function() {
        return ENDIAN16_SH;
    },
    EXTRA_SH: function() {
        return EXTRA_SH;
    },
    FLAVOR_SH: function() {
        return FLAVOR_SH;
    },
    FLOAT_SH: function() {
        return FLOAT_SH;
    },
    INTENT_ABSOLUTE_COLORIMETRIC: function() {
        return INTENT_ABSOLUTE_COLORIMETRIC;
    },
    INTENT_PERCEPTUAL: function() {
        return INTENT_PERCEPTUAL;
    },
    INTENT_RELATIVE_COLORIMETRIC: function() {
        return INTENT_RELATIVE_COLORIMETRIC;
    },
    INTENT_SATURATION: function() {
        return INTENT_SATURATION;
    },
    LCMS_VERSION: function() {
        return LCMS_VERSION;
    },
    OPTIMIZED_SH: function() {
        return OPTIMIZED_SH;
    },
    PLANAR_SH: function() {
        return PLANAR_SH;
    },
    PT_ANY: function() {
        return PT_ANY;
    },
    PT_CMY: function() {
        return PT_CMY;
    },
    PT_CMYK: function() {
        return PT_CMYK;
    },
    PT_GRAY: function() {
        return PT_GRAY;
    },
    PT_HLS: function() {
        return PT_HLS;
    },
    PT_HSV: function() {
        return PT_HSV;
    },
    PT_Lab: function() {
        return PT_Lab;
    },
    PT_LabV2: function() {
        return PT_LabV2;
    },
    PT_MCH1: function() {
        return PT_MCH1;
    },
    PT_MCH10: function() {
        return PT_MCH10;
    },
    PT_MCH11: function() {
        return PT_MCH11;
    },
    PT_MCH12: function() {
        return PT_MCH12;
    },
    PT_MCH13: function() {
        return PT_MCH13;
    },
    PT_MCH14: function() {
        return PT_MCH14;
    },
    PT_MCH15: function() {
        return PT_MCH15;
    },
    PT_MCH2: function() {
        return PT_MCH2;
    },
    PT_MCH3: function() {
        return PT_MCH3;
    },
    PT_MCH4: function() {
        return PT_MCH4;
    },
    PT_MCH5: function() {
        return PT_MCH5;
    },
    PT_MCH6: function() {
        return PT_MCH6;
    },
    PT_MCH7: function() {
        return PT_MCH7;
    },
    PT_MCH8: function() {
        return PT_MCH8;
    },
    PT_MCH9: function() {
        return PT_MCH9;
    },
    PT_RGB: function() {
        return PT_RGB;
    },
    PT_XYZ: function() {
        return PT_XYZ;
    },
    PT_YCbCr: function() {
        return PT_YCbCr;
    },
    PT_YUV: function() {
        return PT_YUV;
    },
    PT_YUVK: function() {
        return PT_YUVK;
    },
    PT_Yxy: function() {
        return PT_Yxy;
    },
    SWAPFIRST_SH: function() {
        return SWAPFIRST_SH;
    },
    TYPE_ABGR_16: function() {
        return TYPE_ABGR_16;
    },
    TYPE_ABGR_16_PLANAR: function() {
        return TYPE_ABGR_16_PLANAR;
    },
    TYPE_ABGR_16_SE: function() {
        return TYPE_ABGR_16_SE;
    },
    TYPE_ABGR_8: function() {
        return TYPE_ABGR_8;
    },
    TYPE_ABGR_8_PLANAR: function() {
        return TYPE_ABGR_8_PLANAR;
    },
    TYPE_ALabV2_8: function() {
        return TYPE_ALabV2_8;
    },
    TYPE_ALab_8: function() {
        return TYPE_ALab_8;
    },
    TYPE_ARGB_16: function() {
        return TYPE_ARGB_16;
    },
    TYPE_ARGB_8: function() {
        return TYPE_ARGB_8;
    },
    TYPE_ARGB_8_PLANAR: function() {
        return TYPE_ARGB_8_PLANAR;
    },
    TYPE_BGRA_16: function() {
        return TYPE_BGRA_16;
    },
    TYPE_BGRA_16_SE: function() {
        return TYPE_BGRA_16_SE;
    },
    TYPE_BGRA_8: function() {
        return TYPE_BGRA_8;
    },
    TYPE_BGRA_8_PLANAR: function() {
        return TYPE_BGRA_8_PLANAR;
    },
    TYPE_BGR_16: function() {
        return TYPE_BGR_16;
    },
    TYPE_BGR_16_PLANAR: function() {
        return TYPE_BGR_16_PLANAR;
    },
    TYPE_BGR_16_SE: function() {
        return TYPE_BGR_16_SE;
    },
    TYPE_BGR_8: function() {
        return TYPE_BGR_8;
    },
    TYPE_BGR_8_PLANAR: function() {
        return TYPE_BGR_8_PLANAR;
    },
    TYPE_BGR_DBL: function() {
        return TYPE_BGR_DBL;
    },
    TYPE_CMYK10_16: function() {
        return TYPE_CMYK10_16;
    },
    TYPE_CMYK10_16_SE: function() {
        return TYPE_CMYK10_16_SE;
    },
    TYPE_CMYK10_8: function() {
        return TYPE_CMYK10_8;
    },
    TYPE_CMYK11_16: function() {
        return TYPE_CMYK11_16;
    },
    TYPE_CMYK11_16_SE: function() {
        return TYPE_CMYK11_16_SE;
    },
    TYPE_CMYK11_8: function() {
        return TYPE_CMYK11_8;
    },
    TYPE_CMYK12_16: function() {
        return TYPE_CMYK12_16;
    },
    TYPE_CMYK12_16_SE: function() {
        return TYPE_CMYK12_16_SE;
    },
    TYPE_CMYK12_8: function() {
        return TYPE_CMYK12_8;
    },
    TYPE_CMYK5_16: function() {
        return TYPE_CMYK5_16;
    },
    TYPE_CMYK5_16_SE: function() {
        return TYPE_CMYK5_16_SE;
    },
    TYPE_CMYK5_8: function() {
        return TYPE_CMYK5_8;
    },
    TYPE_CMYK6_16: function() {
        return TYPE_CMYK6_16;
    },
    TYPE_CMYK6_16_PLANAR: function() {
        return TYPE_CMYK6_16_PLANAR;
    },
    TYPE_CMYK6_16_SE: function() {
        return TYPE_CMYK6_16_SE;
    },
    TYPE_CMYK6_8: function() {
        return TYPE_CMYK6_8;
    },
    TYPE_CMYK6_8_PLANAR: function() {
        return TYPE_CMYK6_8_PLANAR;
    },
    TYPE_CMYK7_16: function() {
        return TYPE_CMYK7_16;
    },
    TYPE_CMYK7_16_SE: function() {
        return TYPE_CMYK7_16_SE;
    },
    TYPE_CMYK7_8: function() {
        return TYPE_CMYK7_8;
    },
    TYPE_CMYK8_16: function() {
        return TYPE_CMYK8_16;
    },
    TYPE_CMYK8_16_SE: function() {
        return TYPE_CMYK8_16_SE;
    },
    TYPE_CMYK8_8: function() {
        return TYPE_CMYK8_8;
    },
    TYPE_CMYK9_16: function() {
        return TYPE_CMYK9_16;
    },
    TYPE_CMYK9_16_SE: function() {
        return TYPE_CMYK9_16_SE;
    },
    TYPE_CMYK9_8: function() {
        return TYPE_CMYK9_8;
    },
    TYPE_CMYKA_8: function() {
        return TYPE_CMYKA_8;
    },
    TYPE_CMYK_16: function() {
        return TYPE_CMYK_16;
    },
    TYPE_CMYK_16_PLANAR: function() {
        return TYPE_CMYK_16_PLANAR;
    },
    TYPE_CMYK_16_REV: function() {
        return TYPE_CMYK_16_REV;
    },
    TYPE_CMYK_16_SE: function() {
        return TYPE_CMYK_16_SE;
    },
    TYPE_CMYK_8: function() {
        return TYPE_CMYK_8;
    },
    TYPE_CMYK_8_PLANAR: function() {
        return TYPE_CMYK_8_PLANAR;
    },
    TYPE_CMYK_8_REV: function() {
        return TYPE_CMYK_8_REV;
    },
    TYPE_CMYK_DBL: function() {
        return TYPE_CMYK_DBL;
    },
    TYPE_CMY_16: function() {
        return TYPE_CMY_16;
    },
    TYPE_CMY_16_PLANAR: function() {
        return TYPE_CMY_16_PLANAR;
    },
    TYPE_CMY_16_SE: function() {
        return TYPE_CMY_16_SE;
    },
    TYPE_CMY_8: function() {
        return TYPE_CMY_8;
    },
    TYPE_CMY_8_PLANAR: function() {
        return TYPE_CMY_8_PLANAR;
    },
    TYPE_GRAYA_16: function() {
        return TYPE_GRAYA_16;
    },
    TYPE_GRAYA_16_PLANAR: function() {
        return TYPE_GRAYA_16_PLANAR;
    },
    TYPE_GRAYA_16_SE: function() {
        return TYPE_GRAYA_16_SE;
    },
    TYPE_GRAYA_8: function() {
        return TYPE_GRAYA_8;
    },
    TYPE_GRAYA_8_PLANAR: function() {
        return TYPE_GRAYA_8_PLANAR;
    },
    TYPE_GRAY_16: function() {
        return TYPE_GRAY_16;
    },
    TYPE_GRAY_16_REV: function() {
        return TYPE_GRAY_16_REV;
    },
    TYPE_GRAY_16_SE: function() {
        return TYPE_GRAY_16_SE;
    },
    TYPE_GRAY_8: function() {
        return TYPE_GRAY_8;
    },
    TYPE_GRAY_8_REV: function() {
        return TYPE_GRAY_8_REV;
    },
    TYPE_GRAY_DBL: function() {
        return TYPE_GRAY_DBL;
    },
    TYPE_KCMY_16: function() {
        return TYPE_KCMY_16;
    },
    TYPE_KCMY_16_REV: function() {
        return TYPE_KCMY_16_REV;
    },
    TYPE_KCMY_16_SE: function() {
        return TYPE_KCMY_16_SE;
    },
    TYPE_KCMY_8: function() {
        return TYPE_KCMY_8;
    },
    TYPE_KCMY_8_REV: function() {
        return TYPE_KCMY_8_REV;
    },
    TYPE_KYMC10_16: function() {
        return TYPE_KYMC10_16;
    },
    TYPE_KYMC10_16_SE: function() {
        return TYPE_KYMC10_16_SE;
    },
    TYPE_KYMC10_8: function() {
        return TYPE_KYMC10_8;
    },
    TYPE_KYMC11_16: function() {
        return TYPE_KYMC11_16;
    },
    TYPE_KYMC11_16_SE: function() {
        return TYPE_KYMC11_16_SE;
    },
    TYPE_KYMC11_8: function() {
        return TYPE_KYMC11_8;
    },
    TYPE_KYMC12_16: function() {
        return TYPE_KYMC12_16;
    },
    TYPE_KYMC12_16_SE: function() {
        return TYPE_KYMC12_16_SE;
    },
    TYPE_KYMC12_8: function() {
        return TYPE_KYMC12_8;
    },
    TYPE_KYMC5_16: function() {
        return TYPE_KYMC5_16;
    },
    TYPE_KYMC5_16_SE: function() {
        return TYPE_KYMC5_16_SE;
    },
    TYPE_KYMC5_8: function() {
        return TYPE_KYMC5_8;
    },
    TYPE_KYMC7_16: function() {
        return TYPE_KYMC7_16;
    },
    TYPE_KYMC7_16_SE: function() {
        return TYPE_KYMC7_16_SE;
    },
    TYPE_KYMC7_8: function() {
        return TYPE_KYMC7_8;
    },
    TYPE_KYMC8_16: function() {
        return TYPE_KYMC8_16;
    },
    TYPE_KYMC8_16_SE: function() {
        return TYPE_KYMC8_16_SE;
    },
    TYPE_KYMC8_8: function() {
        return TYPE_KYMC8_8;
    },
    TYPE_KYMC9_16: function() {
        return TYPE_KYMC9_16;
    },
    TYPE_KYMC9_16_SE: function() {
        return TYPE_KYMC9_16_SE;
    },
    TYPE_KYMC9_8: function() {
        return TYPE_KYMC9_8;
    },
    TYPE_KYMC_16: function() {
        return TYPE_KYMC_16;
    },
    TYPE_KYMC_16_SE: function() {
        return TYPE_KYMC_16_SE;
    },
    TYPE_KYMC_8: function() {
        return TYPE_KYMC_8;
    },
    TYPE_LabV2_16: function() {
        return TYPE_LabV2_16;
    },
    TYPE_LabV2_8: function() {
        return TYPE_LabV2_8;
    },
    TYPE_Lab_16: function() {
        return TYPE_Lab_16;
    },
    TYPE_Lab_8: function() {
        return TYPE_Lab_8;
    },
    TYPE_Lab_DBL: function() {
        return TYPE_Lab_DBL;
    },
    TYPE_RGBA_16: function() {
        return TYPE_RGBA_16;
    },
    TYPE_RGBA_16_PLANAR: function() {
        return TYPE_RGBA_16_PLANAR;
    },
    TYPE_RGBA_16_SE: function() {
        return TYPE_RGBA_16_SE;
    },
    TYPE_RGBA_8: function() {
        return TYPE_RGBA_8;
    },
    TYPE_RGBA_8_PLANAR: function() {
        return TYPE_RGBA_8_PLANAR;
    },
    TYPE_RGB_16: function() {
        return TYPE_RGB_16;
    },
    TYPE_RGB_16_PLANAR: function() {
        return TYPE_RGB_16_PLANAR;
    },
    TYPE_RGB_16_SE: function() {
        return TYPE_RGB_16_SE;
    },
    TYPE_RGB_8: function() {
        return TYPE_RGB_8;
    },
    TYPE_RGB_8_PLANAR: function() {
        return TYPE_RGB_8_PLANAR;
    },
    TYPE_RGB_DBL: function() {
        return TYPE_RGB_DBL;
    },
    TYPE_XYZ_16: function() {
        return TYPE_XYZ_16;
    },
    TYPE_XYZ_DBL: function() {
        return TYPE_XYZ_DBL;
    },
    TYPE_YUVK_16: function() {
        return TYPE_YUVK_16;
    },
    TYPE_YUVK_8: function() {
        return TYPE_YUVK_8;
    },
    TYPE_Yxy_16: function() {
        return TYPE_Yxy_16;
    },
    T_BYTES: function() {
        return T_BYTES;
    },
    T_CHANNELS: function() {
        return T_CHANNELS;
    },
    T_COLORSPACE: function() {
        return T_COLORSPACE;
    },
    T_DOSWAP: function() {
        return T_DOSWAP;
    },
    T_ENDIAN16: function() {
        return T_ENDIAN16;
    },
    T_EXTRA: function() {
        return T_EXTRA;
    },
    T_FLAVOR: function() {
        return T_FLAVOR;
    },
    T_FLOAT: function() {
        return T_FLOAT;
    },
    T_OPTIMIZED: function() {
        return T_OPTIMIZED;
    },
    T_PLANAR: function() {
        return T_PLANAR;
    },
    T_SWAPFIRST: function() {
        return T_SWAPFIRST;
    },
    cmsFLAGS_BLACKPOINTCOMPENSATION: function() {
        return cmsFLAGS_BLACKPOINTCOMPENSATION;
    },
    cmsFLAGS_COPY_ALPHA: function() {
        return cmsFLAGS_COPY_ALPHA;
    },
    cmsFLAGS_GAMUTCHECK: function() {
        return cmsFLAGS_GAMUTCHECK;
    },
    cmsFLAGS_HIGHRESPRECALC: function() {
        return cmsFLAGS_HIGHRESPRECALC;
    },
    cmsFLAGS_LOWRESPRECALC: function() {
        return cmsFLAGS_LOWRESPRECALC;
    },
    cmsFLAGS_NOCACHE: function() {
        return cmsFLAGS_NOCACHE;
    },
    cmsFLAGS_NOOPTIMIZE: function() {
        return cmsFLAGS_NOOPTIMIZE;
    },
    cmsFLAGS_NOWHITEONWHITEFIXUP: function() {
        return cmsFLAGS_NOWHITEONWHITEFIXUP;
    },
    cmsFLAGS_NULLTRANSFORM: function() {
        return cmsFLAGS_NULLTRANSFORM;
    },
    cmsFLAGS_SOFTPROOFING: function() {
        return cmsFLAGS_SOFTPROOFING;
    },
    cmsInfoCopyright: function() {
        return cmsInfoCopyright;
    },
    cmsInfoDescription: function() {
        return cmsInfoDescription;
    },
    cmsInfoManufacturer: function() {
        return cmsInfoManufacturer;
    },
    cmsInfoModel: function() {
        return cmsInfoModel;
    },
    cmsMAXCHANNELS: function() {
        return cmsMAXCHANNELS;
    },
    cmsSigBlueColorantTag: function() {
        return cmsSigBlueColorantTag;
    },
    cmsSigCmyData: function() {
        return cmsSigCmyData;
    },
    cmsSigCmykData: function() {
        return cmsSigCmykData;
    },
    cmsSigGrayData: function() {
        return cmsSigGrayData;
    },
    cmsSigGreenColorantTag: function() {
        return cmsSigGreenColorantTag;
    },
    cmsSigHlsData: function() {
        return cmsSigHlsData;
    },
    cmsSigHsvData: function() {
        return cmsSigHsvData;
    },
    cmsSigLabData: function() {
        return cmsSigLabData;
    },
    cmsSigLuvData: function() {
        return cmsSigLuvData;
    },
    cmsSigRedColorantTag: function() {
        return cmsSigRedColorantTag;
    },
    cmsSigRgbData: function() {
        return cmsSigRgbData;
    },
    cmsSigXYZData: function() {
        return cmsSigXYZData;
    },
    cmsSigYCbCrData: function() {
        return cmsSigYCbCrData;
    },
    cmsSigYxyData: function() {
        return cmsSigYxyData;
    },
    default: function() {
        return _default;
    },
    instantiate: function() {
        return instantiate;
    }
});
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self1) {
    if (self1 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self1;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self1, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self1);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var LCMS_VERSION = 2160;
var cmsMAXCHANNELS = 16; // L654
var cmsSigRedColorantTag = 0x7258595a; // 'rXYZ' (L382)
var cmsSigGreenColorantTag = 0x6758595a; // 'gXYZ'
var cmsSigBlueColorantTag = 0x6258595a; // 'bXYZ'
var cmsSigXYZData = 0x58595a20; // 'XYZ ' (L433)
var cmsSigLabData = 0x4c616220; // 'Lab '
var cmsSigLuvData = 0x4c757620; // 'Luv '
var cmsSigYCbCrData = 0x59436272; // 'YCbr'
var cmsSigYxyData = 0x59787920; // 'Yxy '
var cmsSigRgbData = 0x52474220; // 'RGB '
var cmsSigGrayData = 0x47524159; // 'GRAY'
var cmsSigHsvData = 0x48535620; // 'HSV '
var cmsSigHlsData = 0x484c5320; // 'HLS '
var cmsSigCmykData = 0x434d594b; // 'CMYK'
var cmsSigCmyData = 0x434d5920; // 'CMY '
var FLOAT_SH = function(a) {
    return a << 22;
}; // (L674)
var OPTIMIZED_SH = function(s) {
    return s << 21;
};
var COLORSPACE_SH = function(s) {
    return s << 16;
};
var SWAPFIRST_SH = function(s) {
    return s << 14;
};
var FLAVOR_SH = function(s) {
    return s << 13;
};
var PLANAR_SH = function(p) {
    return p << 12;
};
var ENDIAN16_SH = function(e) {
    return e << 11;
};
var DOSWAP_SH = function(e) {
    return e << 10;
};
var EXTRA_SH = function(e) {
    return e << 7;
};
var CHANNELS_SH = function(c) {
    return c << 3;
};
var BYTES_SH = function(b) {
    return b;
};
var T_FLOAT = function(a) {
    return a >> 22 & 1;
};
var T_OPTIMIZED = function(o) {
    return o >> 21 & 1;
};
var T_COLORSPACE = function(s) {
    return s >> 16 & 31;
};
var T_SWAPFIRST = function(s) {
    return s >> 14 & 1;
};
var T_FLAVOR = function(s) {
    return s >> 13 & 1;
};
var T_PLANAR = function(p) {
    return p >> 12 & 1;
};
var T_ENDIAN16 = function(e) {
    return e >> 11 & 1;
};
var T_DOSWAP = function(e) {
    return e >> 10 & 1;
};
var T_EXTRA = function(e) {
    return e >> 7 & 7;
};
var T_CHANNELS = function(c) {
    return c >> 3 & 15;
};
var T_BYTES = function(b) {
    return b & 7;
};
var PT_ANY = 0; // Don't check colorspace // (L701)
var PT_GRAY = 3;
var PT_RGB = 4;
var PT_CMY = 5;
var PT_CMYK = 6;
var PT_YCbCr = 7;
var PT_YUV = 8; // Lu'v'
var PT_XYZ = 9;
var PT_Lab = 10;
var PT_YUVK = 11; // Lu'v'K
var PT_HSV = 12;
var PT_HLS = 13;
var PT_Yxy = 14;
var PT_MCH1 = 15;
var PT_MCH2 = 16;
var PT_MCH3 = 17;
var PT_MCH4 = 18;
var PT_MCH5 = 19;
var PT_MCH6 = 20;
var PT_MCH7 = 21;
var PT_MCH8 = 22;
var PT_MCH9 = 23;
var PT_MCH10 = 24;
var PT_MCH11 = 25;
var PT_MCH12 = 26;
var PT_MCH13 = 27;
var PT_MCH14 = 28;
var PT_MCH15 = 29;
var PT_LabV2 = 30; // Identical to PT_Lab, but using the V2 old encoding
var TYPE_GRAY_8 = COLORSPACE_SH(PT_GRAY) | CHANNELS_SH(1) | BYTES_SH(1); // (L739)
var TYPE_GRAY_8_REV = COLORSPACE_SH(PT_GRAY) | CHANNELS_SH(1) | BYTES_SH(1) | FLAVOR_SH(1);
var TYPE_GRAY_16 = COLORSPACE_SH(PT_GRAY) | CHANNELS_SH(1) | BYTES_SH(2);
var TYPE_GRAY_16_REV = COLORSPACE_SH(PT_GRAY) | CHANNELS_SH(1) | BYTES_SH(2) | FLAVOR_SH(1);
var TYPE_GRAY_16_SE = COLORSPACE_SH(PT_GRAY) | CHANNELS_SH(1) | BYTES_SH(2) | ENDIAN16_SH(1);
var TYPE_GRAYA_8 = COLORSPACE_SH(PT_GRAY) | EXTRA_SH(1) | CHANNELS_SH(1) | BYTES_SH(1);
var TYPE_GRAYA_16 = COLORSPACE_SH(PT_GRAY) | EXTRA_SH(1) | CHANNELS_SH(1) | BYTES_SH(2);
var TYPE_GRAYA_16_SE = COLORSPACE_SH(PT_GRAY) | EXTRA_SH(1) | CHANNELS_SH(1) | BYTES_SH(2) | ENDIAN16_SH(1);
var TYPE_GRAYA_8_PLANAR = COLORSPACE_SH(PT_GRAY) | EXTRA_SH(1) | CHANNELS_SH(1) | BYTES_SH(1) | PLANAR_SH(1);
var TYPE_GRAYA_16_PLANAR = COLORSPACE_SH(PT_GRAY) | EXTRA_SH(1) | CHANNELS_SH(1) | BYTES_SH(2) | PLANAR_SH(1);
var TYPE_RGB_8 = COLORSPACE_SH(PT_RGB) | CHANNELS_SH(3) | BYTES_SH(1);
var TYPE_RGB_8_PLANAR = COLORSPACE_SH(PT_RGB) | CHANNELS_SH(3) | BYTES_SH(1) | PLANAR_SH(1);
var TYPE_BGR_8 = COLORSPACE_SH(PT_RGB) | CHANNELS_SH(3) | BYTES_SH(1) | DOSWAP_SH(1);
var TYPE_BGR_8_PLANAR = COLORSPACE_SH(PT_RGB) | CHANNELS_SH(3) | BYTES_SH(1) | DOSWAP_SH(1) | PLANAR_SH(1);
var TYPE_RGB_16 = COLORSPACE_SH(PT_RGB) | CHANNELS_SH(3) | BYTES_SH(2);
var TYPE_RGB_16_PLANAR = COLORSPACE_SH(PT_RGB) | CHANNELS_SH(3) | BYTES_SH(2) | PLANAR_SH(1);
var TYPE_RGB_16_SE = COLORSPACE_SH(PT_RGB) | CHANNELS_SH(3) | BYTES_SH(2) | ENDIAN16_SH(1);
var TYPE_BGR_16 = COLORSPACE_SH(PT_RGB) | CHANNELS_SH(3) | BYTES_SH(2) | DOSWAP_SH(1);
var TYPE_BGR_16_PLANAR = COLORSPACE_SH(PT_RGB) | CHANNELS_SH(3) | BYTES_SH(2) | DOSWAP_SH(1) | PLANAR_SH(1);
var TYPE_BGR_16_SE = COLORSPACE_SH(PT_RGB) | CHANNELS_SH(3) | BYTES_SH(2) | DOSWAP_SH(1) | ENDIAN16_SH(1);
var TYPE_RGBA_8 = COLORSPACE_SH(PT_RGB) | EXTRA_SH(1) | CHANNELS_SH(3) | BYTES_SH(1);
var TYPE_RGBA_8_PLANAR = COLORSPACE_SH(PT_RGB) | EXTRA_SH(1) | CHANNELS_SH(3) | BYTES_SH(1) | PLANAR_SH(1);
var TYPE_RGBA_16 = COLORSPACE_SH(PT_RGB) | EXTRA_SH(1) | CHANNELS_SH(3) | BYTES_SH(2);
var TYPE_RGBA_16_PLANAR = COLORSPACE_SH(PT_RGB) | EXTRA_SH(1) | CHANNELS_SH(3) | BYTES_SH(2) | PLANAR_SH(1);
var TYPE_RGBA_16_SE = COLORSPACE_SH(PT_RGB) | EXTRA_SH(1) | CHANNELS_SH(3) | BYTES_SH(2) | ENDIAN16_SH(1);
var TYPE_ARGB_8 = COLORSPACE_SH(PT_RGB) | EXTRA_SH(1) | CHANNELS_SH(3) | BYTES_SH(1) | SWAPFIRST_SH(1);
var TYPE_ARGB_8_PLANAR = COLORSPACE_SH(PT_RGB) | EXTRA_SH(1) | CHANNELS_SH(3) | BYTES_SH(1) | SWAPFIRST_SH(1) | PLANAR_SH(1);
var TYPE_ARGB_16 = COLORSPACE_SH(PT_RGB) | EXTRA_SH(1) | CHANNELS_SH(3) | BYTES_SH(2) | SWAPFIRST_SH(1);
var TYPE_ABGR_8 = COLORSPACE_SH(PT_RGB) | EXTRA_SH(1) | CHANNELS_SH(3) | BYTES_SH(1) | DOSWAP_SH(1);
var TYPE_ABGR_8_PLANAR = COLORSPACE_SH(PT_RGB) | EXTRA_SH(1) | CHANNELS_SH(3) | BYTES_SH(1) | DOSWAP_SH(1) | PLANAR_SH(1);
var TYPE_ABGR_16 = COLORSPACE_SH(PT_RGB) | EXTRA_SH(1) | CHANNELS_SH(3) | BYTES_SH(2) | DOSWAP_SH(1);
var TYPE_ABGR_16_PLANAR = COLORSPACE_SH(PT_RGB) | EXTRA_SH(1) | CHANNELS_SH(3) | BYTES_SH(2) | DOSWAP_SH(1) | PLANAR_SH(1);
var TYPE_ABGR_16_SE = COLORSPACE_SH(PT_RGB) | EXTRA_SH(1) | CHANNELS_SH(3) | BYTES_SH(2) | DOSWAP_SH(1) | ENDIAN16_SH(1);
var TYPE_BGRA_8 = COLORSPACE_SH(PT_RGB) | EXTRA_SH(1) | CHANNELS_SH(3) | BYTES_SH(1) | DOSWAP_SH(1) | SWAPFIRST_SH(1);
var TYPE_BGRA_8_PLANAR = COLORSPACE_SH(PT_RGB) | EXTRA_SH(1) | CHANNELS_SH(3) | BYTES_SH(1) | DOSWAP_SH(1) | SWAPFIRST_SH(1) | PLANAR_SH(1);
var TYPE_BGRA_16 = COLORSPACE_SH(PT_RGB) | EXTRA_SH(1) | CHANNELS_SH(3) | BYTES_SH(2) | DOSWAP_SH(1) | SWAPFIRST_SH(1);
var TYPE_BGRA_16_SE = COLORSPACE_SH(PT_RGB) | EXTRA_SH(1) | CHANNELS_SH(3) | BYTES_SH(2) | ENDIAN16_SH(1) | DOSWAP_SH(1) | SWAPFIRST_SH(1);
var TYPE_CMY_8 = COLORSPACE_SH(PT_CMY) | CHANNELS_SH(3) | BYTES_SH(1);
var TYPE_CMY_8_PLANAR = COLORSPACE_SH(PT_CMY) | CHANNELS_SH(3) | BYTES_SH(1) | PLANAR_SH(1);
var TYPE_CMY_16 = COLORSPACE_SH(PT_CMY) | CHANNELS_SH(3) | BYTES_SH(2);
var TYPE_CMY_16_PLANAR = COLORSPACE_SH(PT_CMY) | CHANNELS_SH(3) | BYTES_SH(2) | PLANAR_SH(1);
var TYPE_CMY_16_SE = COLORSPACE_SH(PT_CMY) | CHANNELS_SH(3) | BYTES_SH(2) | ENDIAN16_SH(1);
var TYPE_CMYK_8 = COLORSPACE_SH(PT_CMYK) | CHANNELS_SH(4) | BYTES_SH(1);
var TYPE_CMYKA_8 = COLORSPACE_SH(PT_CMYK) | EXTRA_SH(1) | CHANNELS_SH(4) | BYTES_SH(1);
var TYPE_CMYK_8_REV = COLORSPACE_SH(PT_CMYK) | CHANNELS_SH(4) | BYTES_SH(1) | FLAVOR_SH(1);
var TYPE_YUVK_8 = TYPE_CMYK_8_REV;
var TYPE_CMYK_8_PLANAR = COLORSPACE_SH(PT_CMYK) | CHANNELS_SH(4) | BYTES_SH(1) | PLANAR_SH(1);
var TYPE_CMYK_16 = COLORSPACE_SH(PT_CMYK) | CHANNELS_SH(4) | BYTES_SH(2);
var TYPE_CMYK_16_REV = COLORSPACE_SH(PT_CMYK) | CHANNELS_SH(4) | BYTES_SH(2) | FLAVOR_SH(1);
var TYPE_YUVK_16 = TYPE_CMYK_16_REV;
var TYPE_CMYK_16_PLANAR = COLORSPACE_SH(PT_CMYK) | CHANNELS_SH(4) | BYTES_SH(2) | PLANAR_SH(1);
var TYPE_CMYK_16_SE = COLORSPACE_SH(PT_CMYK) | CHANNELS_SH(4) | BYTES_SH(2) | ENDIAN16_SH(1);
var TYPE_KYMC_8 = COLORSPACE_SH(PT_CMYK) | CHANNELS_SH(4) | BYTES_SH(1) | DOSWAP_SH(1);
var TYPE_KYMC_16 = COLORSPACE_SH(PT_CMYK) | CHANNELS_SH(4) | BYTES_SH(2) | DOSWAP_SH(1);
var TYPE_KYMC_16_SE = COLORSPACE_SH(PT_CMYK) | CHANNELS_SH(4) | BYTES_SH(2) | DOSWAP_SH(1) | ENDIAN16_SH(1);
var TYPE_KCMY_8 = COLORSPACE_SH(PT_CMYK) | CHANNELS_SH(4) | BYTES_SH(1) | SWAPFIRST_SH(1);
var TYPE_KCMY_8_REV = COLORSPACE_SH(PT_CMYK) | CHANNELS_SH(4) | BYTES_SH(1) | FLAVOR_SH(1) | SWAPFIRST_SH(1);
var TYPE_KCMY_16 = COLORSPACE_SH(PT_CMYK) | CHANNELS_SH(4) | BYTES_SH(2) | SWAPFIRST_SH(1);
var TYPE_KCMY_16_REV = COLORSPACE_SH(PT_CMYK) | CHANNELS_SH(4) | BYTES_SH(2) | FLAVOR_SH(1) | SWAPFIRST_SH(1);
var TYPE_KCMY_16_SE = COLORSPACE_SH(PT_CMYK) | CHANNELS_SH(4) | BYTES_SH(2) | ENDIAN16_SH(1) | SWAPFIRST_SH(1);
var TYPE_CMYK5_8 = COLORSPACE_SH(PT_MCH5) | CHANNELS_SH(5) | BYTES_SH(1);
var TYPE_CMYK5_16 = COLORSPACE_SH(PT_MCH5) | CHANNELS_SH(5) | BYTES_SH(2);
var TYPE_CMYK5_16_SE = COLORSPACE_SH(PT_MCH5) | CHANNELS_SH(5) | BYTES_SH(2) | ENDIAN16_SH(1);
var TYPE_KYMC5_8 = COLORSPACE_SH(PT_MCH5) | CHANNELS_SH(5) | BYTES_SH(1) | DOSWAP_SH(1);
var TYPE_KYMC5_16 = COLORSPACE_SH(PT_MCH5) | CHANNELS_SH(5) | BYTES_SH(2) | DOSWAP_SH(1);
var TYPE_KYMC5_16_SE = COLORSPACE_SH(PT_MCH5) | CHANNELS_SH(5) | BYTES_SH(2) | DOSWAP_SH(1) | ENDIAN16_SH(1);
var TYPE_CMYK6_8 = COLORSPACE_SH(PT_MCH6) | CHANNELS_SH(6) | BYTES_SH(1);
var TYPE_CMYK6_8_PLANAR = COLORSPACE_SH(PT_MCH6) | CHANNELS_SH(6) | BYTES_SH(1) | PLANAR_SH(1);
var TYPE_CMYK6_16 = COLORSPACE_SH(PT_MCH6) | CHANNELS_SH(6) | BYTES_SH(2);
var TYPE_CMYK6_16_PLANAR = COLORSPACE_SH(PT_MCH6) | CHANNELS_SH(6) | BYTES_SH(2) | PLANAR_SH(1);
var TYPE_CMYK6_16_SE = COLORSPACE_SH(PT_MCH6) | CHANNELS_SH(6) | BYTES_SH(2) | ENDIAN16_SH(1);
var TYPE_CMYK7_8 = COLORSPACE_SH(PT_MCH7) | CHANNELS_SH(7) | BYTES_SH(1);
var TYPE_CMYK7_16 = COLORSPACE_SH(PT_MCH7) | CHANNELS_SH(7) | BYTES_SH(2);
var TYPE_CMYK7_16_SE = COLORSPACE_SH(PT_MCH7) | CHANNELS_SH(7) | BYTES_SH(2) | ENDIAN16_SH(1);
var TYPE_KYMC7_8 = COLORSPACE_SH(PT_MCH7) | CHANNELS_SH(7) | BYTES_SH(1) | DOSWAP_SH(1);
var TYPE_KYMC7_16 = COLORSPACE_SH(PT_MCH7) | CHANNELS_SH(7) | BYTES_SH(2) | DOSWAP_SH(1);
var TYPE_KYMC7_16_SE = COLORSPACE_SH(PT_MCH7) | CHANNELS_SH(7) | BYTES_SH(2) | DOSWAP_SH(1) | ENDIAN16_SH(1);
var TYPE_CMYK8_8 = COLORSPACE_SH(PT_MCH8) | CHANNELS_SH(8) | BYTES_SH(1);
var TYPE_CMYK8_16 = COLORSPACE_SH(PT_MCH8) | CHANNELS_SH(8) | BYTES_SH(2);
var TYPE_CMYK8_16_SE = COLORSPACE_SH(PT_MCH8) | CHANNELS_SH(8) | BYTES_SH(2) | ENDIAN16_SH(1);
var TYPE_KYMC8_8 = COLORSPACE_SH(PT_MCH8) | CHANNELS_SH(8) | BYTES_SH(1) | DOSWAP_SH(1);
var TYPE_KYMC8_16 = COLORSPACE_SH(PT_MCH8) | CHANNELS_SH(8) | BYTES_SH(2) | DOSWAP_SH(1);
var TYPE_KYMC8_16_SE = COLORSPACE_SH(PT_MCH8) | CHANNELS_SH(8) | BYTES_SH(2) | DOSWAP_SH(1) | ENDIAN16_SH(1);
var TYPE_CMYK9_8 = COLORSPACE_SH(PT_MCH9) | CHANNELS_SH(9) | BYTES_SH(1);
var TYPE_CMYK9_16 = COLORSPACE_SH(PT_MCH9) | CHANNELS_SH(9) | BYTES_SH(2);
var TYPE_CMYK9_16_SE = COLORSPACE_SH(PT_MCH9) | CHANNELS_SH(9) | BYTES_SH(2) | ENDIAN16_SH(1);
var TYPE_KYMC9_8 = COLORSPACE_SH(PT_MCH9) | CHANNELS_SH(9) | BYTES_SH(1) | DOSWAP_SH(1);
var TYPE_KYMC9_16 = COLORSPACE_SH(PT_MCH9) | CHANNELS_SH(9) | BYTES_SH(2) | DOSWAP_SH(1);
var TYPE_KYMC9_16_SE = COLORSPACE_SH(PT_MCH9) | CHANNELS_SH(9) | BYTES_SH(2) | DOSWAP_SH(1) | ENDIAN16_SH(1);
var TYPE_CMYK10_8 = COLORSPACE_SH(PT_MCH10) | CHANNELS_SH(10) | BYTES_SH(1);
var TYPE_CMYK10_16 = COLORSPACE_SH(PT_MCH10) | CHANNELS_SH(10) | BYTES_SH(2);
var TYPE_CMYK10_16_SE = COLORSPACE_SH(PT_MCH10) | CHANNELS_SH(10) | BYTES_SH(2) | ENDIAN16_SH(1);
var TYPE_KYMC10_8 = COLORSPACE_SH(PT_MCH10) | CHANNELS_SH(10) | BYTES_SH(1) | DOSWAP_SH(1);
var TYPE_KYMC10_16 = COLORSPACE_SH(PT_MCH10) | CHANNELS_SH(10) | BYTES_SH(2) | DOSWAP_SH(1);
var TYPE_KYMC10_16_SE = COLORSPACE_SH(PT_MCH10) | CHANNELS_SH(10) | BYTES_SH(2) | DOSWAP_SH(1) | ENDIAN16_SH(1);
var TYPE_CMYK11_8 = COLORSPACE_SH(PT_MCH11) | CHANNELS_SH(11) | BYTES_SH(1);
var TYPE_CMYK11_16 = COLORSPACE_SH(PT_MCH11) | CHANNELS_SH(11) | BYTES_SH(2);
var TYPE_CMYK11_16_SE = COLORSPACE_SH(PT_MCH11) | CHANNELS_SH(11) | BYTES_SH(2) | ENDIAN16_SH(1);
var TYPE_KYMC11_8 = COLORSPACE_SH(PT_MCH11) | CHANNELS_SH(11) | BYTES_SH(1) | DOSWAP_SH(1);
var TYPE_KYMC11_16 = COLORSPACE_SH(PT_MCH11) | CHANNELS_SH(11) | BYTES_SH(2) | DOSWAP_SH(1);
var TYPE_KYMC11_16_SE = COLORSPACE_SH(PT_MCH11) | CHANNELS_SH(11) | BYTES_SH(2) | DOSWAP_SH(1) | ENDIAN16_SH(1);
var TYPE_CMYK12_8 = COLORSPACE_SH(PT_MCH12) | CHANNELS_SH(12) | BYTES_SH(1);
var TYPE_CMYK12_16 = COLORSPACE_SH(PT_MCH12) | CHANNELS_SH(12) | BYTES_SH(2);
var TYPE_CMYK12_16_SE = COLORSPACE_SH(PT_MCH12) | CHANNELS_SH(12) | BYTES_SH(2) | ENDIAN16_SH(1);
var TYPE_KYMC12_8 = COLORSPACE_SH(PT_MCH12) | CHANNELS_SH(12) | BYTES_SH(1) | DOSWAP_SH(1);
var TYPE_KYMC12_16 = COLORSPACE_SH(PT_MCH12) | CHANNELS_SH(12) | BYTES_SH(2) | DOSWAP_SH(1);
var TYPE_KYMC12_16_SE = COLORSPACE_SH(PT_MCH12) | CHANNELS_SH(12) | BYTES_SH(2) | DOSWAP_SH(1) | ENDIAN16_SH(1);
var TYPE_XYZ_16 = COLORSPACE_SH(PT_XYZ) | CHANNELS_SH(3) | BYTES_SH(2);
var TYPE_Lab_8 = COLORSPACE_SH(PT_Lab) | CHANNELS_SH(3) | BYTES_SH(1);
var TYPE_LabV2_8 = COLORSPACE_SH(PT_LabV2) | CHANNELS_SH(3) | BYTES_SH(1);
var TYPE_ALab_8 = COLORSPACE_SH(PT_Lab) | CHANNELS_SH(3) | BYTES_SH(1) | EXTRA_SH(1) | SWAPFIRST_SH(1);
var TYPE_ALabV2_8 = COLORSPACE_SH(PT_LabV2) | CHANNELS_SH(3) | BYTES_SH(1) | EXTRA_SH(1) | SWAPFIRST_SH(1);
var TYPE_Lab_16 = COLORSPACE_SH(PT_Lab) | CHANNELS_SH(3) | BYTES_SH(2);
var TYPE_LabV2_16 = COLORSPACE_SH(PT_LabV2) | CHANNELS_SH(3) | BYTES_SH(2);
var TYPE_Yxy_16 = COLORSPACE_SH(PT_Yxy) | CHANNELS_SH(3) | BYTES_SH(2);
var TYPE_XYZ_DBL = FLOAT_SH(1) | COLORSPACE_SH(PT_XYZ) | CHANNELS_SH(3) | BYTES_SH(0); // (L916)
var TYPE_Lab_DBL = FLOAT_SH(1) | COLORSPACE_SH(PT_Lab) | CHANNELS_SH(3) | BYTES_SH(0);
var TYPE_GRAY_DBL = FLOAT_SH(1) | COLORSPACE_SH(PT_GRAY) | CHANNELS_SH(1) | BYTES_SH(0);
var TYPE_RGB_DBL = FLOAT_SH(1) | COLORSPACE_SH(PT_RGB) | CHANNELS_SH(3) | BYTES_SH(0);
var TYPE_BGR_DBL = FLOAT_SH(1) | COLORSPACE_SH(PT_RGB) | CHANNELS_SH(3) | BYTES_SH(0) | DOSWAP_SH(1);
var TYPE_CMYK_DBL = FLOAT_SH(1) | COLORSPACE_SH(PT_CMYK) | CHANNELS_SH(4) | BYTES_SH(0);
var cmsInfoDescription = 0; // (L1503)
var cmsInfoManufacturer = 1;
var cmsInfoModel = 2;
var cmsInfoCopyright = 3;
var INTENT_PERCEPTUAL = 0; // (L1617)
var INTENT_RELATIVE_COLORIMETRIC = 1;
var INTENT_SATURATION = 2;
var INTENT_ABSOLUTE_COLORIMETRIC = 3;
var cmsFLAGS_NOCACHE = 0x0040; // Inhibit 1-pixel cache (L1636)
var cmsFLAGS_NOOPTIMIZE = 0x0100; // Inhibit optimizations
var cmsFLAGS_NULLTRANSFORM = 0x0200; // Don't transform anyway
var cmsFLAGS_GAMUTCHECK = 0x1000; // Out of Gamut alarm
var cmsFLAGS_SOFTPROOFING = 0x4000; // Do softproofing
var cmsFLAGS_BLACKPOINTCOMPENSATION = 0x2000;
var cmsFLAGS_NOWHITEONWHITEFIXUP = 0x0004; // Don't fix scum dot
var cmsFLAGS_HIGHRESPRECALC = 0x0400; // Use more memory to give better accurancy
var cmsFLAGS_LOWRESPRECALC = 0x0800; // Use less memory to minimize resources
var cmsFLAGS_COPY_ALPHA = 0x04000000;
var instantiate = function() {
    var _document_currentScript;
    var _scriptName = typeof document != 'undefined' ? (_document_currentScript = document.currentScript) === null || _document_currentScript === void 0 ? void 0 : _document_currentScript.src : undefined;
    return function() {
        var moduleArg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var moduleRtn;
        var Module = moduleArg;
        var readyPromiseResolve, readyPromiseReject;
        var readyPromise = new Promise(function(resolve, reject) {
            readyPromiseResolve = resolve;
            readyPromiseReject = reject;
        });
        [
            "_malloc",
            "_cmsXYZ2xyY",
            "_cmsReadTag",
            "_cmsGetTransformOutputFormat",
            "_cmsGetTransformInputFormat",
            "_cmsDoTransform",
            "_cmsDeleteTransform",
            "_cmsCreateProofingTransform",
            "_cmsCreateTransform",
            "_cmsFormatterForColorspaceOfProfile",
            "_cmsGetColorSpace",
            "_cmsGetProfileInfoASCII",
            "_cmsCreateLab4Profile",
            "_cmsCreateXYZProfile",
            "_cmsCreate_sRGBProfile",
            "_cmsCloseProfile",
            "_cmsOpenProfileFromMem",
            "getExceptionMessage",
            "incrementExceptionRefcount",
            "decrementExceptionRefcount",
            "_memory",
            "___indirect_function_table",
            "onRuntimeInitialized"
        ].forEach(function(prop) {
            if (!Object.getOwnPropertyDescriptor(readyPromise, prop)) {
                Object.defineProperty(readyPromise, prop, {
                    get: function() {
                        return abort("You are getting " + prop + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
                    },
                    set: function() {
                        return abort("You are setting " + prop + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
                    }
                });
            }
        });
        var ENVIRONMENT_IS_WEB = (typeof window === "undefined" ? "undefined" : _type_of(window)) == "object";
        var ENVIRONMENT_IS_WORKER = typeof WorkerGlobalScope != "undefined";
        var ENVIRONMENT_IS_NODE = (typeof process === "undefined" ? "undefined" : _type_of(process)) == "object" && _type_of(process.versions) == "object" && typeof process.versions.node == "string" && process.type != "renderer";
        var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
        var moduleOverrides = Object.assign({}, Module);
        var arguments_ = [];
        var thisProgram = "./this.program";
        var scriptDirectory = "";
        function locateFile(path) {
            if (Module["locateFile"]) {
                return Module["locateFile"](path, scriptDirectory);
            }
            return scriptDirectory + path;
        }
        var readAsync, readBinary;
        if (ENVIRONMENT_IS_SHELL) {
            if ((typeof process === "undefined" ? "undefined" : _type_of(process)) == "object" && typeof require === "function" || (typeof window === "undefined" ? "undefined" : _type_of(window)) == "object" || typeof WorkerGlobalScope != "undefined") throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
        } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
            if (ENVIRONMENT_IS_WORKER) {
                scriptDirectory = self.location.href;
            } else if (typeof document != "undefined" && document.currentScript) {
                scriptDirectory = document.currentScript.src;
            }
            if (_scriptName) {
                scriptDirectory = _scriptName;
            }
            if (scriptDirectory.startsWith("blob:")) {
                scriptDirectory = "";
            } else {
                scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
            }
            if (!((typeof window === "undefined" ? "undefined" : _type_of(window)) == "object" || typeof WorkerGlobalScope != "undefined")) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
            {
                if (ENVIRONMENT_IS_WORKER) {
                    readBinary = function(url) {
                        var xhr = new XMLHttpRequest;
                        xhr.open("GET", url, false);
                        xhr.responseType = "arraybuffer";
                        xhr.send(null);
                        return new Uint8Array(xhr.response);
                    };
                }
                readAsync = function(url) {
                    assert(!isFileURI(url), "readAsync does not work with file:// URLs");
                    return fetch(url, {
                        credentials: "same-origin"
                    }).then(function(response) {
                        if (response.ok) {
                            return response.arrayBuffer();
                        }
                        return Promise.reject(new Error(response.status + " : " + response.url));
                    });
                };
            }
        } else {
            throw new Error("environment detection error");
        }
        var out = Module["print"] || console.log.bind(console);
        var _$err = Module["printErr"] || console.error.bind(console);
        Object.assign(Module, moduleOverrides);
        moduleOverrides = null;
        checkIncomingModuleAPI();
        if (Module["arguments"]) arguments_ = Module["arguments"];
        legacyModuleProp("arguments", "arguments_");
        if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
        legacyModuleProp("thisProgram", "thisProgram");
        assert(typeof Module["memoryInitializerPrefixURL"] == "undefined", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
        assert(typeof Module["pthreadMainPrefixURL"] == "undefined", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
        assert(typeof Module["cdInitializerPrefixURL"] == "undefined", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
        assert(typeof Module["filePackagePrefixURL"] == "undefined", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
        assert(typeof Module["read"] == "undefined", "Module.read option was removed");
        assert(typeof Module["readAsync"] == "undefined", "Module.readAsync option was removed (modify readAsync in JS)");
        assert(typeof Module["readBinary"] == "undefined", "Module.readBinary option was removed (modify readBinary in JS)");
        assert(typeof Module["setWindowTitle"] == "undefined", "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)");
        assert(typeof Module["TOTAL_MEMORY"] == "undefined", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
        legacyModuleProp("asm", "wasmExports");
        legacyModuleProp("readAsync", "readAsync");
        legacyModuleProp("readBinary", "readBinary");
        legacyModuleProp("setWindowTitle", "setWindowTitle");
        assert(!ENVIRONMENT_IS_NODE, "node environment detected but not enabled at build time.  Add `node` to `-sENVIRONMENT` to enable.");
        assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");
        var wasmBinary = Module["wasmBinary"];
        legacyModuleProp("wasmBinary", "wasmBinary");
        if ((typeof WebAssembly === "undefined" ? "undefined" : _type_of(WebAssembly)) != "object") {
            _$err("no native wasm support detected");
        }
        var wasmMemory;
        var ABORT = false;
        function assert(condition, text) {
            if (!condition) {
                abort("Assertion failed" + (text ? ": " + text : ""));
            }
        }
        var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        function updateMemoryViews() {
            var b = wasmMemory.buffer;
            Module["HEAP8"] = HEAP8 = new Int8Array(b);
            Module["HEAP16"] = HEAP16 = new Int16Array(b);
            Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
            Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
            Module["HEAP32"] = HEAP32 = new Int32Array(b);
            Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
            Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
            Module["HEAPF64"] = HEAPF64 = new Float64Array(b);
        }
        assert(!Module["STACK_SIZE"], "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time");
        assert(typeof Int32Array != "undefined" && typeof Float64Array !== "undefined" && Int32Array.prototype.subarray != undefined && Int32Array.prototype.set != undefined, "JS engine does not provide full typed array support");
        assert(!Module["wasmMemory"], "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally");
        assert(!Module["INITIAL_MEMORY"], "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");
        function writeStackCookie() {
            var max = _emscripten_stack_get_end();
            assert((max & 3) == 0);
            if (max == 0) {
                max += 4;
            }
            HEAPU32[max >> 2] = 34821223;
            HEAPU32[max + 4 >> 2] = 2310721022;
            HEAPU32[0 >> 2] = 1668509029;
        }
        function checkStackCookie() {
            if (ABORT) return;
            var max = _emscripten_stack_get_end();
            if (max == 0) {
                max += 4;
            }
            var cookie1 = HEAPU32[max >> 2];
            var cookie2 = HEAPU32[max + 4 >> 2];
            if (cookie1 != 34821223 || cookie2 != 2310721022) {
                abort("Stack overflow! Stack cookie has been overwritten at ".concat(ptrToString(max), ", expected hex dwords 0x89BACDFE and 0x2135467, but received ").concat(ptrToString(cookie2), " ").concat(ptrToString(cookie1)));
            }
            if (HEAPU32[0 >> 2] != 1668509029) {
                abort("Runtime error: The application has corrupted its heap memory area (address zero)!");
            }
        }
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        function preRun() {
            if (Module["preRun"]) {
                if (typeof Module["preRun"] == "function") Module["preRun"] = [
                    Module["preRun"]
                ];
                while(Module["preRun"].length){
                    addOnPreRun(Module["preRun"].shift());
                }
            }
            callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
            assert(!runtimeInitialized);
            runtimeInitialized = true;
            checkStackCookie();
            callRuntimeCallbacks(__ATINIT__);
        }
        function postRun() {
            checkStackCookie();
            if (Module["postRun"]) {
                if (typeof Module["postRun"] == "function") Module["postRun"] = [
                    Module["postRun"]
                ];
                while(Module["postRun"].length){
                    addOnPostRun(Module["postRun"].shift());
                }
            }
            callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb) {
            __ATPRERUN__.unshift(cb);
        }
        function addOnInit(cb) {
            __ATINIT__.unshift(cb);
        }
        function addOnPostRun(cb) {
            __ATPOSTRUN__.unshift(cb);
        }
        assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
        assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
        assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
        assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        var runDependencyTracking = {};
        function addRunDependency(id) {
            var _Module_monitorRunDependencies;
            runDependencies++;
            (_Module_monitorRunDependencies = Module["monitorRunDependencies"]) === null || _Module_monitorRunDependencies === void 0 ? void 0 : _Module_monitorRunDependencies.call(Module, runDependencies);
            if (id) {
                assert(!runDependencyTracking[id]);
                runDependencyTracking[id] = 1;
                if (runDependencyWatcher === null && typeof setInterval != "undefined") {
                    runDependencyWatcher = setInterval(function() {
                        if (ABORT) {
                            clearInterval(runDependencyWatcher);
                            runDependencyWatcher = null;
                            return;
                        }
                        var shown = false;
                        for(var dep in runDependencyTracking){
                            if (!shown) {
                                shown = true;
                                _$err("still waiting on run dependencies:");
                            }
                            _$err("dependency: ".concat(dep));
                        }
                        if (shown) {
                            _$err("(end of list)");
                        }
                    }, 1e4);
                }
            } else {
                _$err("warning: run dependency added without ID");
            }
        }
        function removeRunDependency(id) {
            var _Module_monitorRunDependencies;
            runDependencies--;
            (_Module_monitorRunDependencies = Module["monitorRunDependencies"]) === null || _Module_monitorRunDependencies === void 0 ? void 0 : _Module_monitorRunDependencies.call(Module, runDependencies);
            if (id) {
                assert(runDependencyTracking[id]);
                delete runDependencyTracking[id];
            } else {
                _$err("warning: run dependency removed without ID");
            }
            if (runDependencies == 0) {
                if (runDependencyWatcher !== null) {
                    clearInterval(runDependencyWatcher);
                    runDependencyWatcher = null;
                }
                if (dependenciesFulfilled) {
                    var callback = dependenciesFulfilled;
                    dependenciesFulfilled = null;
                    callback();
                }
            }
        }
        function abort(what) {
            var _Module_onAbort;
            (_Module_onAbort = Module["onAbort"]) === null || _Module_onAbort === void 0 ? void 0 : _Module_onAbort.call(Module, what);
            what = "Aborted(" + what + ")";
            _$err(what);
            ABORT = true;
            var e = new WebAssembly.RuntimeError(what);
            readyPromiseReject(e);
            throw e;
        }
        var FS = {
            error: function error() {
                abort("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM");
            },
            init: function init() {
                FS.error();
            },
            createDataFile: function createDataFile() {
                FS.error();
            },
            createPreloadedFile: function createPreloadedFile() {
                FS.error();
            },
            createLazyFile: function createLazyFile() {
                FS.error();
            },
            open: function open() {
                FS.error();
            },
            mkdev: function mkdev() {
                FS.error();
            },
            registerDevice: function registerDevice() {
                FS.error();
            },
            analyzePath: function analyzePath() {
                FS.error();
            },
            ErrnoError: function ErrnoError() {
                FS.error();
            }
        };
        Module["FS_createDataFile"] = FS.createDataFile;
        Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
        var dataURIPrefix = "data:application/octet-stream;base64,";
        var isDataURI = function(filename) {
            return filename.startsWith(dataURIPrefix);
        };
        var isFileURI = function(filename) {
            return filename.startsWith("file://");
        };
        function createExportWrapper(name, nargs) {
            return function() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                assert(runtimeInitialized, "native function `".concat(name, "` called before runtime initialization"));
                var f = wasmExports[name];
                assert(f, "exported native function `".concat(name, "` not found"));
                assert(args.length <= nargs, "native function `".concat(name, "` called with ").concat(args.length, " args but expects ").concat(nargs));
                return f.apply(void 0, _to_consumable_array(args));
            };
        }
        var EmscriptenEH = /*#__PURE__*/ function(Error1) {
            "use strict";
            _inherits(EmscriptenEH, Error1);
            function EmscriptenEH() {
                _class_call_check(this, EmscriptenEH);
                return _call_super(this, EmscriptenEH, arguments);
            }
            return EmscriptenEH;
        }(_wrap_native_super(Error));
        var EmscriptenSjLj = /*#__PURE__*/ function(EmscriptenEH) {
            "use strict";
            _inherits(EmscriptenSjLj, EmscriptenEH);
            function EmscriptenSjLj() {
                _class_call_check(this, EmscriptenSjLj);
                return _call_super(this, EmscriptenSjLj, arguments);
            }
            return EmscriptenSjLj;
        }(EmscriptenEH);
        var CppException = /*#__PURE__*/ function(EmscriptenEH) {
            "use strict";
            _inherits(CppException, EmscriptenEH);
            function CppException(excPtr) {
                _class_call_check(this, CppException);
                var _this;
                _this = _call_super(this, CppException, [
                    excPtr
                ]);
                _this.excPtr = excPtr;
                var excInfo = getExceptionMessage(excPtr);
                _this.name = excInfo[0];
                _this.message = excInfo[1];
                return _this;
            }
            return CppException;
        }(EmscriptenEH);
        function findWasmBinary() {
            var f = "lcms.wasm";
            if (!isDataURI(f)) {
                return locateFile(f);
            }
            return f;
        }
        var wasmBinaryFile;
        function getBinarySync(file) {
            if (file == wasmBinaryFile && wasmBinary) {
                return new Uint8Array(wasmBinary);
            }
            if (readBinary) {
                return readBinary(file);
            }
            throw "both async and sync fetching of the wasm failed";
        }
        function getBinaryPromise(binaryFile) {
            if (!wasmBinary) {
                return readAsync(binaryFile).then(function(response) {
                    return new Uint8Array(response);
                }, function() {
                    return getBinarySync(binaryFile);
                });
            }
            return Promise.resolve().then(function() {
                return getBinarySync(binaryFile);
            });
        }
        function instantiateArrayBuffer(binaryFile, imports, receiver) {
            return getBinaryPromise(binaryFile).then(function(binary) {
                return WebAssembly.instantiate(binary, imports);
            }).then(receiver, function(reason) {
                _$err("failed to asynchronously prepare wasm: ".concat(reason));
                if (isFileURI(wasmBinaryFile)) {
                    _$err("warning: Loading from a file URI (".concat(wasmBinaryFile, ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing"));
                }
                abort(reason);
            });
        }
        function instantiateAsync(binary, binaryFile, imports, callback) {
            if (!binary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(binaryFile) && typeof fetch == "function") {
                return fetch(binaryFile, {
                    credentials: "same-origin"
                }).then(function(response) {
                    var result = WebAssembly.instantiateStreaming(response, imports);
                    return result.then(callback, function(reason) {
                        _$err("wasm streaming compile failed: ".concat(reason));
                        _$err("falling back to ArrayBuffer instantiation");
                        return instantiateArrayBuffer(binaryFile, imports, callback);
                    });
                });
            }
            return instantiateArrayBuffer(binaryFile, imports, callback);
        }
        function getWasmImports() {
            return {
                env: wasmImports,
                wasi_snapshot_preview1: wasmImports
            };
        }
        function createWasm() {
            var info = getWasmImports();
            function receiveInstance(instance, module) {
                wasmExports = instance.exports;
                wasmMemory = wasmExports["memory"];
                assert(wasmMemory, "memory not found in wasm exports");
                updateMemoryViews();
                wasmTable = wasmExports["__indirect_function_table"];
                assert(wasmTable, "table not found in wasm exports");
                addOnInit(wasmExports["__wasm_call_ctors"]);
                removeRunDependency("wasm-instantiate");
                return wasmExports;
            }
            addRunDependency("wasm-instantiate");
            var trueModule = Module;
            function receiveInstantiationResult(result) {
                assert(Module === trueModule, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
                trueModule = null;
                receiveInstance(result["instance"]);
            }
            if (Module["instantiateWasm"]) {
                try {
                    return Module["instantiateWasm"](info, receiveInstance);
                } catch (e) {
                    _$err("Module.instantiateWasm callback failed with error: ".concat(e));
                    readyPromiseReject(e);
                }
            }
            wasmBinaryFile !== null && wasmBinaryFile !== void 0 ? wasmBinaryFile : wasmBinaryFile = findWasmBinary();
            instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult).catch(readyPromiseReject);
            return {};
        }
        (function() {
            var h16 = new Int16Array(1);
            var h8 = new Int8Array(h16.buffer);
            h16[0] = 25459;
            if (h8[0] !== 115 || h8[1] !== 99) throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";
        })();
        if (Module["ENVIRONMENT"]) {
            throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");
        }
        function legacyModuleProp(prop, newName) {
            var incoming = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
            if (!Object.getOwnPropertyDescriptor(Module, prop)) {
                Object.defineProperty(Module, prop, {
                    configurable: true,
                    get: function get() {
                        var extra = incoming ? " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)" : "";
                        abort("`Module.".concat(prop, "` has been replaced by `").concat(newName, "`") + extra);
                    }
                });
            }
        }
        function ignoredModuleProp(prop) {
            if (Object.getOwnPropertyDescriptor(Module, prop)) {
                abort("`Module.".concat(prop, "` was supplied but `").concat(prop, "` not included in INCOMING_MODULE_JS_API"));
            }
        }
        function isExportedByForceFilesystem(name) {
            return name === "FS_createPath" || name === "FS_createDataFile" || name === "FS_createPreloadedFile" || name === "FS_unlink" || name === "addRunDependency" || name === "FS_createLazyFile" || name === "FS_createDevice" || name === "removeRunDependency";
        }
        function hookGlobalSymbolAccess(sym, func) {
            if (typeof globalThis != "undefined" && !Object.getOwnPropertyDescriptor(globalThis, sym)) {
                Object.defineProperty(globalThis, sym, {
                    configurable: true,
                    get: function get() {
                        func();
                        return undefined;
                    }
                });
            }
        }
        function missingGlobal(sym, msg) {
            hookGlobalSymbolAccess(sym, function() {
                warnOnce("`".concat(sym, "` is not longer defined by emscripten. ").concat(msg));
            });
        }
        missingGlobal("buffer", "Please use HEAP8.buffer or wasmMemory.buffer");
        missingGlobal("asm", "Please use wasmExports instead");
        function missingLibrarySymbol(sym) {
            hookGlobalSymbolAccess(sym, function() {
                var msg = "`".concat(sym, "` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line");
                var librarySymbol = sym;
                if (!librarySymbol.startsWith("_")) {
                    librarySymbol = "$" + sym;
                }
                msg += " (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='".concat(librarySymbol, "')");
                if (isExportedByForceFilesystem(sym)) {
                    msg += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you";
                }
                warnOnce(msg);
            });
            unexportedRuntimeSymbol(sym);
        }
        function unexportedRuntimeSymbol(sym) {
            if (!Object.getOwnPropertyDescriptor(Module, sym)) {
                Object.defineProperty(Module, sym, {
                    configurable: true,
                    get: function get() {
                        var msg = "'".concat(sym, "' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)");
                        if (isExportedByForceFilesystem(sym)) {
                            msg += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you";
                        }
                        abort(msg);
                    }
                });
            }
        }
        var ExitStatus = function ExitStatus(status) {
            "use strict";
            _class_call_check(this, ExitStatus);
            _define_property(this, "name", "ExitStatus");
            this.message = "Program terminated with exit(".concat(status, ")");
            this.status = status;
        };
        var callRuntimeCallbacks = function(callbacks) {
            while(callbacks.length > 0){
                callbacks.shift()(Module);
            }
        };
        function getValue(ptr) {
            var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "i8";
            if (type.endsWith("*")) type = "*";
            switch(type){
                case "i1":
                    return HEAP8[ptr];
                case "i8":
                    return HEAP8[ptr];
                case "i16":
                    return HEAP16[ptr >> 1];
                case "i32":
                    return HEAP32[ptr >> 2];
                case "i64":
                    abort("to do getValue(i64) use WASM_BIGINT");
                case "float":
                    return HEAPF32[ptr >> 2];
                case "double":
                    return HEAPF64[ptr >> 3];
                case "*":
                    return HEAPU32[ptr >> 2];
                default:
                    abort("invalid type for getValue: ".concat(type));
            }
        }
        var noExitRuntime = Module["noExitRuntime"] || true;
        var ptrToString = function(ptr) {
            assert(typeof ptr === "number");
            ptr >>>= 0;
            return "0x" + ptr.toString(16).padStart(8, "0");
        };
        function setValue(ptr, value) {
            var type = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "i8";
            if (type.endsWith("*")) type = "*";
            switch(type){
                case "i1":
                    HEAP8[ptr] = value;
                    break;
                case "i8":
                    HEAP8[ptr] = value;
                    break;
                case "i16":
                    HEAP16[ptr >> 1] = value;
                    break;
                case "i32":
                    HEAP32[ptr >> 2] = value;
                    break;
                case "i64":
                    abort("to do setValue(i64) use WASM_BIGINT");
                case "float":
                    HEAPF32[ptr >> 2] = value;
                    break;
                case "double":
                    HEAPF64[ptr >> 3] = value;
                    break;
                case "*":
                    HEAPU32[ptr >> 2] = value;
                    break;
                default:
                    abort("invalid type for setValue: ".concat(type));
            }
        }
        var stackRestore = function(val) {
            return __emscripten_stack_restore(val);
        };
        var stackSave = function() {
            return _emscripten_stack_get_current();
        };
        var warnOnce = function(text) {
            var _warnOnce;
            (_warnOnce = warnOnce).shown || (_warnOnce.shown = {});
            if (!warnOnce.shown[text]) {
                warnOnce.shown[text] = 1;
                _$err(text);
            }
        };
        var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder : undefined;
        var UTF8ArrayToString = function(heapOrArray) {
            var idx = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, maxBytesToRead = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : NaN;
            var endIdx = idx + maxBytesToRead;
            var endPtr = idx;
            while(heapOrArray[endPtr] && !(endPtr >= endIdx))++endPtr;
            if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
                return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
            }
            var str = "";
            while(idx < endPtr){
                var u0 = heapOrArray[idx++];
                if (!(u0 & 128)) {
                    str += String.fromCharCode(u0);
                    continue;
                }
                var u1 = heapOrArray[idx++] & 63;
                if ((u0 & 224) == 192) {
                    str += String.fromCharCode((u0 & 31) << 6 | u1);
                    continue;
                }
                var u2 = heapOrArray[idx++] & 63;
                if ((u0 & 240) == 224) {
                    u0 = (u0 & 15) << 12 | u1 << 6 | u2;
                } else {
                    if ((u0 & 248) != 240) warnOnce("Invalid UTF-8 leading byte " + ptrToString(u0) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!");
                    u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
                }
                if (u0 < 65536) {
                    str += String.fromCharCode(u0);
                } else {
                    var ch = u0 - 65536;
                    str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
                }
            }
            return str;
        };
        var UTF8ToString = function(ptr, maxBytesToRead) {
            assert(typeof ptr == "number", "UTF8ToString expects a number (got ".concat(typeof ptr === "undefined" ? "undefined" : _type_of(ptr), ")"));
            return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
        };
        var ___assert_fail = function(condition, filename, line, func) {
            abort("Assertion failed: ".concat(UTF8ToString(condition), ", at: ") + [
                filename ? UTF8ToString(filename) : "unknown filename",
                line,
                func ? UTF8ToString(func) : "unknown function"
            ]);
        };
        var exceptionCaught = [];
        var uncaughtExceptionCount = 0;
        var ___cxa_begin_catch = function(ptr) {
            var info = new ExceptionInfo(ptr);
            if (!info.get_caught()) {
                info.set_caught(true);
                uncaughtExceptionCount--;
            }
            info.set_rethrown(false);
            exceptionCaught.push(info);
            ___cxa_increment_exception_refcount(ptr);
            return ___cxa_get_exception_ptr(ptr);
        };
        var exceptionLast = 0;
        var ExceptionInfo = /*#__PURE__*/ function() {
            "use strict";
            function ExceptionInfo(excPtr) {
                _class_call_check(this, ExceptionInfo);
                this.excPtr = excPtr;
                this.ptr = excPtr - 24;
            }
            _create_class(ExceptionInfo, [
                {
                    key: "set_type",
                    value: function set_type(type) {
                        HEAPU32[this.ptr + 4 >> 2] = type;
                    }
                },
                {
                    key: "get_type",
                    value: function get_type() {
                        return HEAPU32[this.ptr + 4 >> 2];
                    }
                },
                {
                    key: "set_destructor",
                    value: function set_destructor(destructor) {
                        HEAPU32[this.ptr + 8 >> 2] = destructor;
                    }
                },
                {
                    key: "get_destructor",
                    value: function get_destructor() {
                        return HEAPU32[this.ptr + 8 >> 2];
                    }
                },
                {
                    key: "set_caught",
                    value: function set_caught(caught) {
                        caught = caught ? 1 : 0;
                        HEAP8[this.ptr + 12] = caught;
                    }
                },
                {
                    key: "get_caught",
                    value: function get_caught() {
                        return HEAP8[this.ptr + 12] != 0;
                    }
                },
                {
                    key: "set_rethrown",
                    value: function set_rethrown(rethrown) {
                        rethrown = rethrown ? 1 : 0;
                        HEAP8[this.ptr + 13] = rethrown;
                    }
                },
                {
                    key: "get_rethrown",
                    value: function get_rethrown() {
                        return HEAP8[this.ptr + 13] != 0;
                    }
                },
                {
                    key: "init",
                    value: function init(type, destructor) {
                        this.set_adjusted_ptr(0);
                        this.set_type(type);
                        this.set_destructor(destructor);
                    }
                },
                {
                    key: "set_adjusted_ptr",
                    value: function set_adjusted_ptr(adjustedPtr) {
                        HEAPU32[this.ptr + 16 >> 2] = adjustedPtr;
                    }
                },
                {
                    key: "get_adjusted_ptr",
                    value: function get_adjusted_ptr() {
                        return HEAPU32[this.ptr + 16 >> 2];
                    }
                }
            ]);
            return ExceptionInfo;
        }();
        var ___resumeException = function(ptr) {
            if (!exceptionLast) {
                exceptionLast = new CppException(ptr);
            }
            throw exceptionLast;
        };
        var setTempRet0 = function(val) {
            return __emscripten_tempret_set(val);
        };
        var findMatchingCatch = function(args) {
            var thrown = exceptionLast === null || exceptionLast === void 0 ? void 0 : exceptionLast.excPtr;
            if (!thrown) {
                setTempRet0(0);
                return 0;
            }
            var info = new ExceptionInfo(thrown);
            info.set_adjusted_ptr(thrown);
            var thrownType = info.get_type();
            if (!thrownType) {
                setTempRet0(0);
                return thrown;
            }
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var caughtType = _step.value;
                    if (caughtType === 0 || caughtType === thrownType) {
                        break;
                    }
                    var adjusted_ptr_addr = info.ptr + 16;
                    if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
                        setTempRet0(caughtType);
                        return thrown;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            setTempRet0(thrownType);
            return thrown;
        };
        var ___cxa_find_matching_catch_2 = function() {
            return findMatchingCatch([]);
        };
        var ___cxa_find_matching_catch_3 = function(arg0) {
            return findMatchingCatch([
                arg0
            ]);
        };
        var SYSCALLS = {
            varargs: undefined,
            getStr: function getStr(ptr) {
                var ret = UTF8ToString(ptr);
                return ret;
            }
        };
        function ___syscall_fcntl64(fd, cmd, varargs) {
            SYSCALLS.varargs = varargs;
            return 0;
        }
        function ___syscall_ioctl(fd, op, varargs) {
            SYSCALLS.varargs = varargs;
            return 0;
        }
        function ___syscall_openat(dirfd, path, flags, varargs) {
            SYSCALLS.varargs = varargs;
            abort("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM");
        }
        var ___syscall_rmdir = function(path) {
            abort("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM");
        };
        var ___syscall_unlinkat = function(dirfd, path, flags) {
            abort("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM");
        };
        var __abort_js = function() {
            abort("native code called abort()");
        };
        var __emscripten_memcpy_js = function(dest, src, num) {
            return HEAPU8.copyWithin(dest, src, src + num);
        };
        var convertI32PairToI53Checked = function(lo, hi) {
            assert(lo == lo >>> 0 || lo == (lo | 0));
            assert(hi === (hi | 0));
            return hi + 2097152 >>> 0 < 4194305 - !!lo ? (lo >>> 0) + hi * 4294967296 : NaN;
        };
        function __gmtime_js(time_low, time_high, tmPtr) {
            var time = convertI32PairToI53Checked(time_low, time_high);
            var date = new Date(time * 1e3);
            HEAP32[tmPtr >> 2] = date.getUTCSeconds();
            HEAP32[tmPtr + 4 >> 2] = date.getUTCMinutes();
            HEAP32[tmPtr + 8 >> 2] = date.getUTCHours();
            HEAP32[tmPtr + 12 >> 2] = date.getUTCDate();
            HEAP32[tmPtr + 16 >> 2] = date.getUTCMonth();
            HEAP32[tmPtr + 20 >> 2] = date.getUTCFullYear() - 1900;
            HEAP32[tmPtr + 24 >> 2] = date.getUTCDay();
            var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
            var yday = (date.getTime() - start) / (1e3 * 60 * 60 * 24) | 0;
            HEAP32[tmPtr + 28 >> 2] = yday;
        }
        var stringToUTF8Array = function(str, heap, outIdx, maxBytesToWrite) {
            assert(typeof str === "string", "stringToUTF8Array expects a string (got ".concat(typeof str === "undefined" ? "undefined" : _type_of(str), ")"));
            if (!(maxBytesToWrite > 0)) return 0;
            var startIdx = outIdx;
            var endIdx = outIdx + maxBytesToWrite - 1;
            for(var i = 0; i < str.length; ++i){
                var u = str.charCodeAt(i);
                if (u >= 55296 && u <= 57343) {
                    var u1 = str.charCodeAt(++i);
                    u = 65536 + ((u & 1023) << 10) | u1 & 1023;
                }
                if (u <= 127) {
                    if (outIdx >= endIdx) break;
                    heap[outIdx++] = u;
                } else if (u <= 2047) {
                    if (outIdx + 1 >= endIdx) break;
                    heap[outIdx++] = 192 | u >> 6;
                    heap[outIdx++] = 128 | u & 63;
                } else if (u <= 65535) {
                    if (outIdx + 2 >= endIdx) break;
                    heap[outIdx++] = 224 | u >> 12;
                    heap[outIdx++] = 128 | u >> 6 & 63;
                    heap[outIdx++] = 128 | u & 63;
                } else {
                    if (outIdx + 3 >= endIdx) break;
                    if (u > 1114111) warnOnce("Invalid Unicode code point " + ptrToString(u) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).");
                    heap[outIdx++] = 240 | u >> 18;
                    heap[outIdx++] = 128 | u >> 12 & 63;
                    heap[outIdx++] = 128 | u >> 6 & 63;
                    heap[outIdx++] = 128 | u & 63;
                }
            }
            heap[outIdx] = 0;
            return outIdx - startIdx;
        };
        var stringToUTF8 = function(str, outPtr, maxBytesToWrite) {
            assert(typeof maxBytesToWrite == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
            return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
        };
        var lengthBytesUTF8 = function(str) {
            var len = 0;
            for(var i = 0; i < str.length; ++i){
                var c = str.charCodeAt(i);
                if (c <= 127) {
                    len++;
                } else if (c <= 2047) {
                    len += 2;
                } else if (c >= 55296 && c <= 57343) {
                    len += 4;
                    ++i;
                } else {
                    len += 3;
                }
            }
            return len;
        };
        var __tzset_js = function(timezone, daylight, std_name, dst_name) {
            var currentYear = (new Date).getFullYear();
            var winter = new Date(currentYear, 0, 1);
            var summer = new Date(currentYear, 6, 1);
            var winterOffset = winter.getTimezoneOffset();
            var summerOffset = summer.getTimezoneOffset();
            var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
            HEAPU32[timezone >> 2] = stdTimezoneOffset * 60;
            HEAP32[daylight >> 2] = Number(winterOffset != summerOffset);
            var extractZone = function(timezoneOffset) {
                var sign = timezoneOffset >= 0 ? "-" : "+";
                var absOffset = Math.abs(timezoneOffset);
                var hours = String(Math.floor(absOffset / 60)).padStart(2, "0");
                var minutes = String(absOffset % 60).padStart(2, "0");
                return "UTC".concat(sign).concat(hours).concat(minutes);
            };
            var winterName = extractZone(winterOffset);
            var summerName = extractZone(summerOffset);
            assert(winterName);
            assert(summerName);
            assert(lengthBytesUTF8(winterName) <= 16, "timezone name truncated to fit in TZNAME_MAX (".concat(winterName, ")"));
            assert(lengthBytesUTF8(summerName) <= 16, "timezone name truncated to fit in TZNAME_MAX (".concat(summerName, ")"));
            if (summerOffset < winterOffset) {
                stringToUTF8(winterName, std_name, 17);
                stringToUTF8(summerName, dst_name, 17);
            } else {
                stringToUTF8(winterName, dst_name, 17);
                stringToUTF8(summerName, std_name, 17);
            }
        };
        var _emscripten_date_now = function() {
            return Date.now();
        };
        var getHeapMax = function() {
            return 2147483648;
        };
        var alignMemory = function(size, alignment) {
            assert(alignment, "alignment argument is required");
            return Math.ceil(size / alignment) * alignment;
        };
        var growMemory = function(size) {
            var b = wasmMemory.buffer;
            var pages = (size - b.byteLength + 65535) / 65536 | 0;
            try {
                wasmMemory.grow(pages);
                updateMemoryViews();
                return 1;
            } catch (e) {
                _$err("growMemory: Attempted to grow heap from ".concat(b.byteLength, " bytes to ").concat(size, " bytes, but got error: ").concat(e));
            }
        };
        var _emscripten_resize_heap = function(requestedSize) {
            var oldSize = HEAPU8.length;
            requestedSize >>>= 0;
            assert(requestedSize > oldSize);
            var maxHeapSize = getHeapMax();
            if (requestedSize > maxHeapSize) {
                _$err("Cannot enlarge memory, requested ".concat(requestedSize, " bytes, but the limit is ").concat(maxHeapSize, " bytes!"));
                return false;
            }
            for(var cutDown = 1; cutDown <= 4; cutDown *= 2){
                var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
                overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
                var newSize = Math.min(maxHeapSize, alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536));
                var replacement = growMemory(newSize);
                if (replacement) {
                    return true;
                }
            }
            _$err("Failed to grow the heap from ".concat(oldSize, " bytes to ").concat(newSize, " bytes, not enough memory!"));
            return false;
        };
        var _fd_close = function(fd) {
            abort("fd_close called without SYSCALLS_REQUIRE_FILESYSTEM");
        };
        var _fd_read = function(fd, iov, iovcnt, pnum) {
            abort("fd_read called without SYSCALLS_REQUIRE_FILESYSTEM");
        };
        function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
            var offset = convertI32PairToI53Checked(offset_low, offset_high);
            return 70;
        }
        var printCharBuffers = [
            null,
            [],
            []
        ];
        var printChar = function(stream, curr) {
            var buffer = printCharBuffers[stream];
            assert(buffer);
            if (curr === 0 || curr === 10) {
                (stream === 1 ? out : _$err)(UTF8ArrayToString(buffer));
                buffer.length = 0;
            } else {
                buffer.push(curr);
            }
        };
        var flush_NO_FILESYSTEM = function() {
            _fflush(0);
            if (printCharBuffers[1].length) printChar(1, 10);
            if (printCharBuffers[2].length) printChar(2, 10);
        };
        var _fd_write = function(fd, iov, iovcnt, pnum) {
            var num = 0;
            for(var i = 0; i < iovcnt; i++){
                var ptr = HEAPU32[iov >> 2];
                var len = HEAPU32[iov + 4 >> 2];
                iov += 8;
                for(var j = 0; j < len; j++){
                    printChar(fd, HEAPU8[ptr + j]);
                }
                num += len;
            }
            HEAPU32[pnum >> 2] = num;
            return 0;
        };
        var wasmTableMirror = [];
        var wasmTable;
        var getWasmTableEntry = function(funcPtr) {
            var func = wasmTableMirror[funcPtr];
            if (!func) {
                if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
                wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
            }
            assert(wasmTable.get(funcPtr) == func, "JavaScript-side Wasm function table mirror is out of date!");
            return func;
        };
        var getCFunc = function(ident) {
            var func = Module["_" + ident];
            assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
            return func;
        };
        var writeArrayToMemory = function(array, buffer) {
            assert(array.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)");
            HEAP8.set(array, buffer);
        };
        var stackAlloc = function(sz) {
            return __emscripten_stack_alloc(sz);
        };
        var stringToUTF8OnStack = function(str) {
            var size = lengthBytesUTF8(str) + 1;
            var ret = stackAlloc(size);
            stringToUTF8(str, ret, size);
            return ret;
        };
        var ccall = function(ident, returnType, argTypes, args, opts) {
            var convertReturnValue = function convertReturnValue(ret) {
                if (returnType === "string") {
                    return UTF8ToString(ret);
                }
                if (returnType === "boolean") return Boolean(ret);
                return ret;
            };
            var onDone = function onDone(ret) {
                if (stack !== 0) stackRestore(stack);
                return convertReturnValue(ret);
            };
            var toC = {
                string: function(str) {
                    var ret = 0;
                    if (str !== null && str !== undefined && str !== 0) {
                        ret = stringToUTF8OnStack(str);
                    }
                    return ret;
                },
                array: function(arr) {
                    var ret = stackAlloc(arr.length);
                    writeArrayToMemory(arr, ret);
                    return ret;
                }
            };
            var func = getCFunc(ident);
            var cArgs = [];
            var stack = 0;
            assert(returnType !== "array", 'Return type should not be "array".');
            if (args) {
                for(var i = 0; i < args.length; i++){
                    var converter = toC[argTypes[i]];
                    if (converter) {
                        if (stack === 0) stack = stackSave();
                        cArgs[i] = converter(args[i]);
                    } else {
                        cArgs[i] = args[i];
                    }
                }
            }
            var ret = func.apply(void 0, _to_consumable_array(cArgs));
            ret = onDone(ret);
            return ret;
        };
        var cwrap = function(ident, returnType, argTypes, opts) {
            return function() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                return ccall(ident, returnType, argTypes, args, opts);
            };
        };
        var incrementExceptionRefcount = function(ptr) {
            return ___cxa_increment_exception_refcount(ptr);
        };
        Module["incrementExceptionRefcount"] = incrementExceptionRefcount;
        var decrementExceptionRefcount = function(ptr) {
            return ___cxa_decrement_exception_refcount(ptr);
        };
        Module["decrementExceptionRefcount"] = decrementExceptionRefcount;
        var getExceptionMessageCommon = function(ptr) {
            var sp = stackSave();
            var type_addr_addr = stackAlloc(4);
            var message_addr_addr = stackAlloc(4);
            ___get_exception_message(ptr, type_addr_addr, message_addr_addr);
            var type_addr = HEAPU32[type_addr_addr >> 2];
            var message_addr = HEAPU32[message_addr_addr >> 2];
            var type = UTF8ToString(type_addr);
            _free(type_addr);
            var message;
            if (message_addr) {
                message = UTF8ToString(message_addr);
                _free(message_addr);
            }
            stackRestore(sp);
            return [
                type,
                message
            ];
        };
        var getExceptionMessage = function(ptr) {
            return getExceptionMessageCommon(ptr);
        };
        Module["getExceptionMessage"] = getExceptionMessage;
        function checkIncomingModuleAPI() {
            ignoredModuleProp("fetchSettings");
        }
        var wasmImports = {
            __assert_fail: ___assert_fail,
            __cxa_begin_catch: ___cxa_begin_catch,
            __cxa_find_matching_catch_2: ___cxa_find_matching_catch_2,
            __cxa_find_matching_catch_3: ___cxa_find_matching_catch_3,
            __resumeException: ___resumeException,
            __syscall_fcntl64: ___syscall_fcntl64,
            __syscall_ioctl: ___syscall_ioctl,
            __syscall_openat: ___syscall_openat,
            __syscall_rmdir: ___syscall_rmdir,
            __syscall_unlinkat: ___syscall_unlinkat,
            _abort_js: __abort_js,
            _emscripten_memcpy_js: __emscripten_memcpy_js,
            _gmtime_js: __gmtime_js,
            _tzset_js: __tzset_js,
            emscripten_date_now: _emscripten_date_now,
            emscripten_resize_heap: _emscripten_resize_heap,
            fd_close: _fd_close,
            fd_read: _fd_read,
            fd_seek: _fd_seek,
            fd_write: _fd_write,
            invoke_ii: invoke_ii,
            invoke_iii: invoke_iii,
            invoke_v: invoke_v,
            invoke_vi: invoke_vi,
            invoke_vii: invoke_vii,
            invoke_viii: invoke_viii,
            invoke_viiii: invoke_viiii
        };
        var wasmExports = createWasm();
        var ___wasm_call_ctors = createExportWrapper("__wasm_call_ctors", 0);
        var _cmsGetColorSpace = Module["_cmsGetColorSpace"] = createExportWrapper("cmsGetColorSpace", 1);
        var _cmsXYZ2xyY = Module["_cmsXYZ2xyY"] = createExportWrapper("cmsXYZ2xyY", 2);
        var _cmsCloseProfile = Module["_cmsCloseProfile"] = createExportWrapper("cmsCloseProfile", 1);
        var _cmsDeleteTransform = Module["_cmsDeleteTransform"] = createExportWrapper("cmsDeleteTransform", 1);
        var _cmsDoTransform = Module["_cmsDoTransform"] = createExportWrapper("cmsDoTransform", 4);
        var _malloc = Module["_malloc"] = createExportWrapper("malloc", 1);
        var _free = createExportWrapper("free", 1);
        var _cmsFormatterForColorspaceOfProfile = Module["_cmsFormatterForColorspaceOfProfile"] = createExportWrapper("cmsFormatterForColorspaceOfProfile", 3);
        var _cmsOpenProfileFromMem = Module["_cmsOpenProfileFromMem"] = createExportWrapper("cmsOpenProfileFromMem", 2);
        var _cmsReadTag = Module["_cmsReadTag"] = createExportWrapper("cmsReadTag", 2);
        var _cmsGetProfileInfoASCII = Module["_cmsGetProfileInfoASCII"] = createExportWrapper("cmsGetProfileInfoASCII", 6);
        var _cmsCreateTransform = Module["_cmsCreateTransform"] = createExportWrapper("cmsCreateTransform", 6);
        var _cmsCreateXYZProfile = Module["_cmsCreateXYZProfile"] = createExportWrapper("cmsCreateXYZProfile", 0);
        var _cmsCreateLab4Profile = Module["_cmsCreateLab4Profile"] = createExportWrapper("cmsCreateLab4Profile", 1);
        var _cmsCreate_sRGBProfile = Module["_cmsCreate_sRGBProfile"] = createExportWrapper("cmsCreate_sRGBProfile", 0);
        var _cmsCreateProofingTransform = Module["_cmsCreateProofingTransform"] = createExportWrapper("cmsCreateProofingTransform", 8);
        var _cmsGetTransformInputFormat = Module["_cmsGetTransformInputFormat"] = createExportWrapper("cmsGetTransformInputFormat", 1);
        var _cmsGetTransformOutputFormat = Module["_cmsGetTransformOutputFormat"] = createExportWrapper("cmsGetTransformOutputFormat", 1);
        var _fflush = createExportWrapper("fflush", 1);
        var _setThrew = createExportWrapper("setThrew", 2);
        var __emscripten_tempret_set = createExportWrapper("_emscripten_tempret_set", 1);
        var _emscripten_stack_init = function() {
            return (_emscripten_stack_init = wasmExports["emscripten_stack_init"])();
        };
        var _emscripten_stack_get_free = function() {
            return (_emscripten_stack_get_free = wasmExports["emscripten_stack_get_free"])();
        };
        var _emscripten_stack_get_base = function() {
            return (_emscripten_stack_get_base = wasmExports["emscripten_stack_get_base"])();
        };
        var _emscripten_stack_get_end = function() {
            return (_emscripten_stack_get_end = wasmExports["emscripten_stack_get_end"])();
        };
        var __emscripten_stack_restore = function(a0) {
            return (__emscripten_stack_restore = wasmExports["_emscripten_stack_restore"])(a0);
        };
        var __emscripten_stack_alloc = function(a0) {
            return (__emscripten_stack_alloc = wasmExports["_emscripten_stack_alloc"])(a0);
        };
        var _emscripten_stack_get_current = function() {
            return (_emscripten_stack_get_current = wasmExports["emscripten_stack_get_current"])();
        };
        var ___cxa_free_exception = createExportWrapper("__cxa_free_exception", 1);
        var ___cxa_increment_exception_refcount = createExportWrapper("__cxa_increment_exception_refcount", 1);
        var ___cxa_decrement_exception_refcount = createExportWrapper("__cxa_decrement_exception_refcount", 1);
        var ___get_exception_message = createExportWrapper("__get_exception_message", 3);
        var ___cxa_can_catch = createExportWrapper("__cxa_can_catch", 3);
        var ___cxa_get_exception_ptr = createExportWrapper("__cxa_get_exception_ptr", 1);
        var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji", 5);
        function invoke_ii(index, a1) {
            var sp = stackSave();
            try {
                return getWasmTableEntry(index)(a1);
            } catch (e) {
                stackRestore(sp);
                if (!_instanceof(e, EmscriptenEH)) throw e;
                _setThrew(1, 0);
            }
        }
        function invoke_v(index) {
            var sp = stackSave();
            try {
                getWasmTableEntry(index)();
            } catch (e) {
                stackRestore(sp);
                if (!_instanceof(e, EmscriptenEH)) throw e;
                _setThrew(1, 0);
            }
        }
        function invoke_vii(index, a1, a2) {
            var sp = stackSave();
            try {
                getWasmTableEntry(index)(a1, a2);
            } catch (e) {
                stackRestore(sp);
                if (!_instanceof(e, EmscriptenEH)) throw e;
                _setThrew(1, 0);
            }
        }
        function invoke_vi(index, a1) {
            var sp = stackSave();
            try {
                getWasmTableEntry(index)(a1);
            } catch (e) {
                stackRestore(sp);
                if (!_instanceof(e, EmscriptenEH)) throw e;
                _setThrew(1, 0);
            }
        }
        function invoke_viiii(index, a1, a2, a3, a4) {
            var sp = stackSave();
            try {
                getWasmTableEntry(index)(a1, a2, a3, a4);
            } catch (e) {
                stackRestore(sp);
                if (!_instanceof(e, EmscriptenEH)) throw e;
                _setThrew(1, 0);
            }
        }
        function invoke_iii(index, a1, a2) {
            var sp = stackSave();
            try {
                return getWasmTableEntry(index)(a1, a2);
            } catch (e) {
                stackRestore(sp);
                if (!_instanceof(e, EmscriptenEH)) throw e;
                _setThrew(1, 0);
            }
        }
        function invoke_viii(index, a1, a2, a3) {
            var sp = stackSave();
            try {
                getWasmTableEntry(index)(a1, a2, a3);
            } catch (e) {
                stackRestore(sp);
                if (!_instanceof(e, EmscriptenEH)) throw e;
                _setThrew(1, 0);
            }
        }
        Module["ccall"] = ccall;
        Module["cwrap"] = cwrap;
        var missingLibrarySymbols = [
            "writeI53ToI64",
            "writeI53ToI64Clamped",
            "writeI53ToI64Signaling",
            "writeI53ToU64Clamped",
            "writeI53ToU64Signaling",
            "readI53FromI64",
            "readI53FromU64",
            "convertI32PairToI53",
            "convertU32PairToI53",
            "getTempRet0",
            "zeroMemory",
            "exitJS",
            "strError",
            "inetPton4",
            "inetNtop4",
            "inetPton6",
            "inetNtop6",
            "readSockaddr",
            "writeSockaddr",
            "emscriptenLog",
            "readEmAsmArgs",
            "jstoi_q",
            "getExecutableName",
            "listenOnce",
            "autoResumeAudioContext",
            "dynCallLegacy",
            "getDynCaller",
            "dynCall",
            "handleException",
            "keepRuntimeAlive",
            "runtimeKeepalivePush",
            "runtimeKeepalivePop",
            "callUserCallback",
            "maybeExit",
            "asmjsMangle",
            "asyncLoad",
            "mmapAlloc",
            "HandleAllocator",
            "getNativeTypeSize",
            "STACK_SIZE",
            "STACK_ALIGN",
            "POINTER_SIZE",
            "ASSERTIONS",
            "uleb128Encode",
            "sigToWasmTypes",
            "generateFuncType",
            "convertJsFunctionToWasm",
            "getEmptyTableSlot",
            "updateTableMap",
            "getFunctionAddress",
            "addFunction",
            "removeFunction",
            "reallyNegative",
            "unSign",
            "strLen",
            "reSign",
            "formatString",
            "intArrayFromString",
            "intArrayToString",
            "AsciiToString",
            "stringToAscii",
            "UTF16ToString",
            "stringToUTF16",
            "lengthBytesUTF16",
            "UTF32ToString",
            "stringToUTF32",
            "lengthBytesUTF32",
            "stringToNewUTF8",
            "registerKeyEventCallback",
            "maybeCStringToJsString",
            "findEventTarget",
            "getBoundingClientRect",
            "fillMouseEventData",
            "registerMouseEventCallback",
            "registerWheelEventCallback",
            "registerUiEventCallback",
            "registerFocusEventCallback",
            "fillDeviceOrientationEventData",
            "registerDeviceOrientationEventCallback",
            "fillDeviceMotionEventData",
            "registerDeviceMotionEventCallback",
            "screenOrientation",
            "fillOrientationChangeEventData",
            "registerOrientationChangeEventCallback",
            "fillFullscreenChangeEventData",
            "registerFullscreenChangeEventCallback",
            "JSEvents_requestFullscreen",
            "JSEvents_resizeCanvasForFullscreen",
            "registerRestoreOldStyle",
            "hideEverythingExceptGivenElement",
            "restoreHiddenElements",
            "setLetterbox",
            "softFullscreenResizeWebGLRenderTarget",
            "doRequestFullscreen",
            "fillPointerlockChangeEventData",
            "registerPointerlockChangeEventCallback",
            "registerPointerlockErrorEventCallback",
            "requestPointerLock",
            "fillVisibilityChangeEventData",
            "registerVisibilityChangeEventCallback",
            "registerTouchEventCallback",
            "fillGamepadEventData",
            "registerGamepadEventCallback",
            "registerBeforeUnloadEventCallback",
            "fillBatteryEventData",
            "battery",
            "registerBatteryEventCallback",
            "setCanvasElementSize",
            "getCanvasElementSize",
            "jsStackTrace",
            "getCallstack",
            "convertPCtoSourceLocation",
            "getEnvStrings",
            "checkWasiClock",
            "wasiRightsToMuslOFlags",
            "wasiOFlagsToMuslOFlags",
            "initRandomFill",
            "randomFill",
            "createDyncallWrapper",
            "safeSetTimeout",
            "setImmediateWrapped",
            "clearImmediateWrapped",
            "polyfillSetImmediate",
            "registerPostMainLoop",
            "registerPreMainLoop",
            "getPromise",
            "makePromise",
            "idsToPromises",
            "makePromiseCallback",
            "Browser_asyncPrepareDataCounter",
            "safeRequestAnimationFrame",
            "isLeapYear",
            "ydayFromDate",
            "arraySum",
            "addDays",
            "getSocketFromFD",
            "getSocketAddress",
            "heapObjectForWebGLType",
            "toTypedArrayIndex",
            "webgl_enable_ANGLE_instanced_arrays",
            "webgl_enable_OES_vertex_array_object",
            "webgl_enable_WEBGL_draw_buffers",
            "webgl_enable_WEBGL_multi_draw",
            "webgl_enable_EXT_polygon_offset_clamp",
            "webgl_enable_EXT_clip_control",
            "webgl_enable_WEBGL_polygon_mode",
            "emscriptenWebGLGet",
            "computeUnpackAlignedImageSize",
            "colorChannelsInGlTextureFormat",
            "emscriptenWebGLGetTexPixelData",
            "emscriptenWebGLGetUniform",
            "webglGetUniformLocation",
            "webglPrepareUniformLocationsBeforeFirstUse",
            "webglGetLeftBracePos",
            "emscriptenWebGLGetVertexAttrib",
            "__glGetActiveAttribOrUniform",
            "writeGLArray",
            "registerWebGlEventCallback",
            "runAndAbortIfError",
            "ALLOC_NORMAL",
            "ALLOC_STACK",
            "allocate",
            "writeStringToMemory",
            "writeAsciiToMemory",
            "setErrNo",
            "demangle",
            "stackTrace"
        ];
        missingLibrarySymbols.forEach(missingLibrarySymbol);
        var unexportedSymbols = [
            "run",
            "addOnPreRun",
            "addOnInit",
            "addOnPreMain",
            "addOnExit",
            "addOnPostRun",
            "addRunDependency",
            "removeRunDependency",
            "out",
            "err",
            "callMain",
            "abort",
            "wasmMemory",
            "wasmExports",
            "writeStackCookie",
            "checkStackCookie",
            "convertI32PairToI53Checked",
            "stackSave",
            "stackRestore",
            "stackAlloc",
            "setTempRet0",
            "ptrToString",
            "getHeapMax",
            "growMemory",
            "ENV",
            "ERRNO_CODES",
            "DNS",
            "Protocols",
            "Sockets",
            "timers",
            "warnOnce",
            "readEmAsmArgsArray",
            "jstoi_s",
            "alignMemory",
            "wasmTable",
            "noExitRuntime",
            "getCFunc",
            "freeTableIndexes",
            "functionsInTableMap",
            "setValue",
            "getValue",
            "PATH",
            "PATH_FS",
            "UTF8Decoder",
            "UTF8ArrayToString",
            "UTF8ToString",
            "stringToUTF8Array",
            "stringToUTF8",
            "lengthBytesUTF8",
            "UTF16Decoder",
            "stringToUTF8OnStack",
            "writeArrayToMemory",
            "JSEvents",
            "specialHTMLTargets",
            "findCanvasEventTarget",
            "currentFullscreenStrategy",
            "restoreOldWindowedStyle",
            "UNWIND_CACHE",
            "ExitStatus",
            "flush_NO_FILESYSTEM",
            "promiseMap",
            "uncaughtExceptionCount",
            "exceptionLast",
            "exceptionCaught",
            "ExceptionInfo",
            "findMatchingCatch",
            "getExceptionMessageCommon",
            "incrementExceptionRefcount",
            "decrementExceptionRefcount",
            "getExceptionMessage",
            "Browser",
            "getPreloadedImageData__data",
            "wget",
            "MONTH_DAYS_REGULAR",
            "MONTH_DAYS_LEAP",
            "MONTH_DAYS_REGULAR_CUMULATIVE",
            "MONTH_DAYS_LEAP_CUMULATIVE",
            "SYSCALLS",
            "tempFixedLengthArray",
            "miniTempWebGLFloatBuffers",
            "miniTempWebGLIntBuffers",
            "GL",
            "AL",
            "GLUT",
            "EGL",
            "GLEW",
            "IDBStore",
            "SDL",
            "SDL_gfx",
            "allocateUTF8",
            "allocateUTF8OnStack",
            "print",
            "printErr"
        ];
        unexportedSymbols.forEach(unexportedRuntimeSymbol);
        var calledRun;
        dependenciesFulfilled = function runCaller() {
            if (!calledRun) run();
            if (!calledRun) dependenciesFulfilled = runCaller;
        };
        function stackCheckInit() {
            _emscripten_stack_init();
            writeStackCookie();
        }
        function run() {
            if (runDependencies > 0) {
                return;
            }
            stackCheckInit();
            preRun();
            if (runDependencies > 0) {
                return;
            }
            function doRun() {
                var _Module_onRuntimeInitialized;
                if (calledRun) return;
                calledRun = true;
                Module["calledRun"] = true;
                if (ABORT) return;
                initRuntime();
                readyPromiseResolve(Module);
                (_Module_onRuntimeInitialized = Module["onRuntimeInitialized"]) === null || _Module_onRuntimeInitialized === void 0 ? void 0 : _Module_onRuntimeInitialized.call(Module);
                assert(!Module["_main"], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
                postRun();
            }
            if (Module["setStatus"]) {
                Module["setStatus"]("Running...");
                setTimeout(function() {
                    setTimeout(function() {
                        return Module["setStatus"]("");
                    }, 1);
                    doRun();
                }, 1);
            } else {
                doRun();
            }
            checkStackCookie();
        }
        if (Module["preInit"]) {
            if (typeof Module["preInit"] == "function") Module["preInit"] = [
                Module["preInit"]
            ];
            while(Module["preInit"].length > 0){
                Module["preInit"].pop()();
            }
        }
        run();
        Module.cmsOpenProfileFromMem = cwrap("cmsOpenProfileFromMem", "number", [
            "array",
            "number"
        ]);
        Module.cmsCloseProfile = cwrap("cmsCloseProfile", undefined, [
            "number"
        ]);
        Module.cmsCreate_sRGBProfile = cwrap("cmsCreate_sRGBProfile", "number", []);
        Module.cmsCreateXYZProfile = cwrap("cmsCreateXYZProfile", "number", [], []);
        Module.cmsCreateLab4Profile = cmsCreateLab4Profile;
        function cmsCreateLab4Profile(wpArr) {
            var whitePoint = 0;
            if (wpArr) {
                whitePoint = _malloc(8 * 3);
                for(var i = 0; i < 3; i++){
                    setValue(whitePoint + i * 8, wpArr[i], "double");
                }
            }
            var prof = ccall("cmsCreateLab4Profile", "number", [
                "number"
            ], [
                whitePoint
            ]);
            if (whitePoint) {
                _free(whitePoint);
            }
            return prof;
        }
        Module.cmsGetProfileInfoASCII = cmsGetProfileInfoASCII;
        function cmsGetProfileInfoASCII(hProfile, info, languageCode, countryCode) {
            var len = ccall("cmsGetProfileInfoASCII", "number", [
                "number",
                "number",
                "string",
                "string",
                "number",
                "number"
            ], [
                hProfile,
                info,
                languageCode,
                countryCode,
                0,
                0
            ]);
            var ptr = _malloc(len);
            var len = ccall("cmsGetProfileInfoASCII", "number", [
                "number",
                "number",
                "string",
                "string",
                "number",
                "number"
            ], [
                hProfile,
                info,
                languageCode,
                countryCode,
                ptr,
                len
            ]);
            var text = UTF8ToString(ptr, len);
            _free(ptr);
            return text;
        }
        Module.cmsGetColorSpace = cwrap("cmsGetColorSpace", "number", [
            "number"
        ]);
        Module.cmsGetColorSpaceASCII = function(profile) {
            var table = {
                1482250784: "XYZ",
                1281450528: "Lab",
                1282766368: "Luv",
                1497588338: "YCbr",
                1501067552: "Yxy",
                1380401696: "RGB",
                1196573017: "GRAY",
                1213421088: "HSV",
                1212961568: "HLS",
                1129142603: "CMYK",
                1129142560: "CMY"
            };
            var ret = Module.cmsGetColorSpace(profile);
            return table[ret] || null;
        };
        Module.cmsFormatterForColorspaceOfProfile = cmsFormatterForColorspaceOfProfile;
        function cmsFormatterForColorspaceOfProfile(hProfile, nBytes, isFloat) {
            return ccall("cmsFormatterForColorspaceOfProfile", "number", [
                "number",
                "number",
                "number"
            ], [
                hProfile,
                nBytes,
                isFloat
            ]);
        }
        Module.cmsCreateTransform = cmsCreateTransform;
        function cmsCreateTransform(hInput, inputFormat, hOutput, outputFormat, intent, flags) {
            return ccall("cmsCreateTransform", "number", [
                "number",
                "number",
                "number",
                "number",
                "number",
                "number"
            ], [
                hInput,
                inputFormat,
                hOutput,
                outputFormat,
                intent,
                flags
            ]);
        }
        Module.cmsCreateProofingTransform = cmsCreateProofingTransform;
        function cmsCreateProofingTransform(hInput, inputFormat, hOutput, outputFormat, proofing, intent, proofingIntent, flags) {
            return ccall("cmsCreateProofingTransform", "number", [
                "number",
                "number",
                "number",
                "number",
                "number",
                "number",
                "number",
                "number"
            ], [
                hInput,
                inputFormat,
                hOutput,
                outputFormat,
                proofing,
                intent,
                proofingIntent,
                flags
            ]);
        }
        Module.cmsDeleteTransform = cmsDeleteTransform;
        function cmsDeleteTransform(transform) {
            if (!transform) {
                console.warn("cmsDeleteTransform: ! transform");
                return;
            }
            ccall("cmsDeleteTransform", undefined, [
                "number"
            ], [
                transform
            ]);
        }
        Module.cmsGetTransformInputFormat = cmsGetTransformInputFormat;
        function cmsGetTransformInputFormat(transform) {
            return ccall("cmsGetTransformInputFormat", "number", [
                "number"
            ], [
                transform
            ]);
        }
        Module.cmsGetTransformOutputFormat = cmsGetTransformOutputFormat;
        function cmsGetTransformOutputFormat(transform) {
            return ccall("cmsGetTransformOutputFormat", "number", [
                "number"
            ], [
                transform
            ]);
        }
        Module.cmsDoTransform = cmsDoTransform;
        function cmsDoTransform(transform, inputArr, size) {
            var inputFormat = cmsGetTransformInputFormat(transform);
            var outputFormat = cmsGetTransformOutputFormat(transform);
            var inputIsFloat = T_FLOAT(inputFormat);
            var outputIsFloat = T_FLOAT(outputFormat);
            var inputChannels = T_CHANNELS(inputFormat) + T_EXTRA(inputFormat);
            var outputChannels = T_CHANNELS(outputFormat) + T_EXTRA(inputFormat);
            var inputBytes = T_BYTES(inputFormat);
            var outputBytes = T_BYTES(outputFormat);
            inputBytes = inputBytes < 1 ? 4 : inputBytes;
            outputBytes = outputBytes < 1 ? 4 : outputBytes;
            var inputBufferSize = inputChannels * inputBytes * size;
            var inputBuffer = _malloc(inputBufferSize);
            if (inputIsFloat) {
                var dataOnHeap = new Float32Array(Module.HEAPU8.buffer, inputBuffer, inputBufferSize);
            } else {
                var dataOnHeap = new Uint8Array(Module.HEAPU8.buffer, inputBuffer, inputBufferSize);
            }
            dataOnHeap.set(inputArr);
            var outputBufferSize = outputChannels * outputBytes * size;
            var outputBuffer = _malloc(outputBufferSize);
            ccall("cmsDoTransform", undefined, [
                "number",
                "number",
                "number",
                "number"
            ], [
                transform,
                inputBuffer,
                outputBuffer,
                size
            ]);
            if (outputIsFloat) {
                var outputArr = new Float32Array(Module.HEAPU8.buffer, outputBuffer, outputBufferSize);
            } else {
                var outputArr = new Uint8Array(Module.HEAPU8.buffer, outputBuffer, outputBufferSize);
            }
            _free(inputBuffer);
            _free(outputBuffer);
            return outputArr;
        }
        Module.cmsReadTag = cmsReadTag;
        function cmsReadTag(hProfile, sig) {
            var ptr = ccall("cmsReadTag", undefined, [
                "number",
                "number"
            ], [
                hProfile,
                sig
            ]);
            return ptr;
        }
        Module.cmsReadTag_XYZ = cmsReadTag_XYZ;
        function cmsReadTag_XYZ(hProfile, sig) {
            var ptr = cmsReadTag(hProfile, sig);
            if (!ptr) {
                return null;
            }
            var xyz = new Float64Array(3);
            xyz[0] = getValue(ptr, "double");
            xyz[1] = getValue(ptr + 8, "double");
            xyz[2] = getValue(ptr + 16, "double");
            return xyz;
        }
        Module.cmsXYZ2xyY = cmsXYZ2xyY;
        function cmsXYZ2xyY(xyz) {
            var srcPtr = _malloc(8 * 3);
            var dstPtr = _malloc(8 * 3);
            setValue(srcPtr, xyz[0], "double");
            setValue(srcPtr + 8, xyz[1], "double");
            setValue(srcPtr + 16, xyz[2], "double");
            ccall("cmsXYZ2xyY", undefined, [
                "number",
                "number"
            ], [
                dstPtr,
                srcPtr
            ]);
            var xyY = new Float64Array(3);
            xyY[0] = getValue(dstPtr, "double");
            xyY[1] = getValue(dstPtr + 8, "double");
            xyY[2] = getValue(dstPtr + 16, "double");
            _free(srcPtr);
            _free(dstPtr);
            return xyY;
        }
        moduleRtn = readyPromise;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var prop = _step.value;
                if (!(prop in moduleArg)) {
                    Object.defineProperty(moduleArg, prop, {
                        configurable: true,
                        get: function get() {
                            abort("Access to module property ('".concat(prop, "') is no longer possible via the module constructor argument; Instead, use the result of the module constructor."));
                        }
                    });
                }
            };
            for(var _iterator = Object.keys(Module)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return moduleRtn;
    };
}();
var _default = instantiate;
