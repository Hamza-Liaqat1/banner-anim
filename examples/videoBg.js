webpackJsonp([4],{

/***/ 1085:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1086);


/***/ }),

/***/ 1086:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_banner_anim__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rc_queue_anim__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_tween_one__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_index_less__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_index_less__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_index_less__);
// use jsx to render html, do not modify simple.html
/* eslint jsx-a11y/media-has-caption: 0 */








var Element = __WEBPACK_IMPORTED_MODULE_0_rc_banner_anim__["a" /* default */].Element;

var BgElement = Element.BgElement;
function Demo() {
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_0_rc_banner_anim__["a" /* default */],
    null,
    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      Element,
      { key: 'aaa',
        prefixCls: 'banner-user-elem'
      },
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        BgElement,
        { key: 'bg', className: 'bg' },
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'video',
          { loop: true, autoPlay: true },
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('source', { src: 'https://os.alipayobjects.com/rmsportal/CoDFvoxaQpTnLOM.mp4', type: 'video/mp4' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_rc_queue_anim__["a" /* default */],
        { name: 'QueueAnim' },
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'h1',
          { key: 'h1' },
          'Ant Motion Demo'
        ),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'p',
          { key: 'p' },
          'Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_rc_tween_one__["c" /* default */],
        { animation: { y: 50, opacity: 0, type: 'from' }, name: 'TweenOne' },
        'Ant Motion Demo.Ant MotionDemo'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      Element,
      { key: 'bbb',
        prefixCls: 'banner-user-elem'
      },
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(BgElement, {
        key: 'bg',
        className: 'bg',
        style: {
          backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }
      }),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_rc_queue_anim__["a" /* default */],
        { name: 'QueueAnim' },
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'h1',
          { key: 'h1' },
          'Ant Motion Demo'
        ),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'p',
          { key: 'p' },
          'Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_rc_tween_one__["c" /* default */],
        { animation: { y: 50, opacity: 0, type: 'from', delay: 200 }, name: 'TweenOne' },
        'Ant Motion Demo.Ant MotionDemo'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      Element,
      { key: 'ccc',
        prefixCls: 'banner-user-elem'
      },
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(BgElement, {
        key: 'bg',
        className: 'bg',
        style: {
          backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }
      }),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_rc_queue_anim__["a" /* default */],
        { name: 'QueueAnim' },
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'h1',
          { key: 'h1' },
          'Ant Motion Demo'
        ),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'p',
          { key: 'p' },
          'Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_rc_tween_one__["c" /* default */],
        { animation: { y: 50, opacity: 0, type: 'from', delay: 200 }, name: 'TweenOne' },
        'Ant Motion Demo.Ant Motion Demo'
      )
    )
  );
}

__WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ })

},[1085]);
//# sourceMappingURL=videoBg.js.map