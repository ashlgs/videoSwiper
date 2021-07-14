module.exports =
    /******/
    (function (modules) { // webpackBootstrap
        /******/ // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/ // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/ // Check if module is in cache
            /******/
            if (installedModules[moduleId]) {
                /******/
                return installedModules[moduleId].exports;
                /******/
            }
            /******/ // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: false,
                /******/
                exports: {}
                /******/
            };
            /******/
            /******/ // Execute the module function
            /******/
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ // Flag the module as loaded
            /******/
            module.l = true;
            /******/
            /******/ // Return the exports of the module
            /******/
            return module.exports;
            /******/
        }
        /******/
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;
        /******/
        /******/ // expose the module cache
        /******/
        __webpack_require__.c = installedModules;
        /******/
        /******/ // define getter function for harmony exports
        /******/
        __webpack_require__.d = function (exports, name, getter) {
            /******/
            if (!__webpack_require__.o(exports, name)) {
                /******/
                Object.defineProperty(exports, name, {
                    enumerable: true,
                    get: getter
                });
                /******/
            }
            /******/
        };
        /******/
        /******/ // define __esModule on exports
        /******/
        __webpack_require__.r = function (exports) {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
                /******/
            }
            /******/
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            /******/
        };
        /******/
        /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 8|1: behave like require
        /******/
        __webpack_require__.t = function (value, mode) {
            /******/
            if (mode & 1) value = __webpack_require__(value);
            /******/
            if (mode & 8) return value;
            /******/
            if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
            /******/
            var ns = Object.create(null);
            /******/
            __webpack_require__.r(ns);
            /******/
            Object.defineProperty(ns, 'default', {
                enumerable: true,
                value: value
            });
            /******/
            if (mode & 2 && typeof value != 'string')
                for (var key in value) __webpack_require__.d(ns, key, function (key) {
                    return value[key];
                }.bind(null, key));
            /******/
            return ns;
            /******/
        };
        /******/
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = function (module) {
            /******/
            var getter = module && module.__esModule ?
                /******/
                function getDefault() {
                    return module['default'];
                } :
                /******/
                function getModuleExports() {
                    return module;
                };
            /******/
            __webpack_require__.d(getter, 'a', getter);
            /******/
            return getter;
            /******/
        };
        /******/
        /******/ // Object.prototype.hasOwnProperty.call
        /******/
        __webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/
        /******/ // __webpack_public_path__
        /******/
        __webpack_require__.p = "";
        /******/
        /******/
        /******/ // Load entry module and return exports
        /******/
        return __webpack_require__(__webpack_require__.s = 0);
        /******/
    })
        /************************************************************************/
        /******/
        ([
            /* 0 */
            /***/
            (function (module, exports, __webpack_require__) {

                "use strict";


                Component({
                    options: {
                        addGlobalClass: true,
                        pureDataPattern: /^_/
                    },
                    properties: {
                        duration: {
                            type: Number,
                            value: 500
                        },
                        easingFunction: {
                            type: String,
                            value: 'default'
                        },
                        loop: {
                            type: Boolean,
                            value: false
                        },
                        index: {
                            type: Number,
                            value: 0,
                            // observer: function (newVal, oldVal) {

                            //     console.log(oldVal,"newVal:::::", newVal)
                            //     if(oldVal !=0){}
                            //     this.setData({
                            //         index: newVal,//*
                            //         nextQueue: [],
                            //         prevQueue: [],
                            //         curQueue: [],
                            //         // circular: false,
                            //         _last: 1,
                            //         _change: -1,
                            //         _invalidUp: 0,
                            //         // _invalidDown: 0,
                            //         // videoBol: [false, false, false, false],
                            //     }, () => {
                            //         console.log(this.data.videoList)

                            //         this._videoListChanged(this.data.videoList);
                            //     })
                            // }
                        },
                        videoList: {
                            type: Array,
                            value: [],
                            observer: function observer() {
                                console.log("::::::::::::::::::::::::::::::::::::")
                                var newVal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                                if (newVal.length) {
                                    newVal.map((item, index) => {
                                        return item.idxKey = index + 1;
                                    });
                                    if (newVal.length <= 10) {
                                        this._videoListChanged(newVal);
                                    } else {
                                        // 防止当前数组被污染
                                        let arr = JSON.parse(JSON.stringify(newVal));
                                        // 去掉已有的数据
                                        let nextArr = arr.splice(this.data.total);
                                        this.data.nextQueue.push(...nextArr);
                                    }
                                    this.setData({
                                        total: newVal.length
                                    })
                                }
                            }
                        }
                    },
                    data: {
                        nextQueue: [],
                        prevQueue: [],
                        curQueue: [],
                        circular: false,
                        _last: 1,
                        _change: -1,
                        _invalidUp: 0,
                        _invalidDown: 0,
                        _videoContexts: [],
                        total: 0,
                        videoBol: [false, false, false, false],

                        showComment: false
                    },
                    lifetimes: {
                        attached: function attached() {
                            this.data._videoContexts = [wx.createVideoContext('video_0', this), wx.createVideoContext('video_1', this), wx.createVideoContext('video_2', this), wx.createVideoContext('video_3', this)];

                        }
                    },
                    methods: {
                        noFn() {

                        },
                        approveClick(e) {
                            console.log("点赞?::", e.currentTarget.dataset.item)
                            let item = e.currentTarget.dataset.item;
                            let currIndex = item.index;
                            this.triggerEvent('aaa', { item });
                            // console.log(
                            //     item.approve, "currIndex", currIndex
                            // )
                            console.log("curQueue::::::::::", this.data.curQueue)
                            //更改curQueue显示状态到页面
                            for (let i = 0; i < this.data.curQueue.length; i++) {
                                if (item.id == this.data.curQueue[i].id) {
                                    this.setData({
                                        ['curQueue[' + i + '].approve']: !item.approve
                                    })
                                    break;
                                }
                            }

                            this.setData({
                                ['videoList[' + currIndex + '].approve']: !item.approve
                            }, () => {
                                console.log('videoList[' + currIndex + '].approve::::::::', this.data.videoList[currIndex].approve)
                            })



                        },
                        commentAreaClick() {
                            let animation = wx.createAnimation({
                                duration: 600,//动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
                                timingFunction: 'ease',//动画的效果 默认值是linear
                            })

                            this.animation = animation
                            if (!this.data.showComment) {//显示
                                this.setData({
                                    showComment: true
                                })

                                setTimeout(() => {
                                    this.fadeIn();
                                }, 200)
                                return
                            }

                            //隐藏
                            this.fadeDown();//调用显示动画
                            //setTimeout()延迟指定毫秒数后执行指定函数
                            setTimeout(() => {
                                this.setData({
                                    showComment: false
                                })
                            }, 200)

                        },
                        //动画集
                        fadeIn: function () {
                            this.animation.translateY(0).step()
                            this.setData({
                                animationData: this.animation.export()//动画实例的export方法导出动画数据传递给组件的animation属性
                            })
                        },
                        fadeDown: function () {
                            this.animation.translateY(300).step()
                            this.setData({
                                animationData: this.animation.export(),
                            })
                        },
                        skipPersonalPage(){
                            wx.navigateTo({
                              url: '/PersonalPage/PersonalPage',
                            })
                        },

                        _videoListChanged: function _videoListChanged(newVal) {
                            let _this = this;
                            let index = this.data.index;
                            let total = newVal.length;
                            // 如果传入的index大于总数，则默认从0开始播放
                            if (index + 1 > total) { index = 0; };
                            let data = this.data;
                            let remainder = index % 3; // 3的余数--当前轮播位置
                            let curQueue = [];
                            let _pop = [];
                            let swiperCurrent = remainder;
                            console.log("data.nextQueue----------------------", data.nextQueue)

                            newVal.forEach(function (item, idx) {
                                item.index = idx;
                                data.nextQueue.push(item);
                            });
                            console.log("data.nextQueue++++++++++++++++", data.nextQueue)
                            // console.log(newVal, 'newval', data);
                            if (data.curQueue.length === 0) {
                                let curIndex = index > 0 ? index - 1 : 0;
                                _this.data._change = ((index % 3) + 1) % 3;
                                // 假设直接从顶部滑下来
                                // _this.data._last = index === 0 ? 0 : // 如果初始播放第0个视频
                                //     // index不是0，刚好是3的倍数，上一个swiper-item的索引是2(最后一个)
                                //     _this.data._change === 0 ? 2 : _this.data._change - 1;// 其他情况直接用_change - 1就行
                                _this.data._last = remainder;
                                _this.data._invalidDown = index === 0 ? 1 : 0; // 如果刚好是第0个，不允许下滑

                                _this.data._invalidUp = total - curIndex < 2 ? 1 : 0; // 这个比较复杂了

                                // 设置前后还剩多少数据
                                _this.data.prevQueue = newVal.slice(0, curIndex);
                                _this.data.nextQueue = newVal.slice(curIndex + 3);

                                let circular = true;
                                if (_this.data.nextQueue.length === 0 && _this.data._change !== 0) {
                                    circular = false;
                                }
                                if (_this.data.prevQueue.length === 0 && _this.data._change !== 2) {
                                    circular = false;
                                }

                                // 当前swiper展示的数组顺序
                                let indexAdd = index + 1;
                                let indexAdd2 = index + 2;
                                let indexSub = index - 1;
                                if (total > 4 && total % 3 == 1 && (total - 1) - index <= 2) { // 除以3余1

                                    curQueue = [
                                        ...newVal.slice(total - 1, total),
                                        ...newVal.slice(total - 3, total - 2),
                                        ...newVal.slice(total - 2, total - 1),
                                        ...newVal.slice(total - 1, total),
                                    ]

                                    _this.data.circular = circular = false;
                                    if (total - 1 - index == 0) {
                                        _this.data._change = 0;
                                        _this.data._invalidDown = 0;
                                        _this.data._invalidUp = 1;
                                        _this.data._last = 3;
                                        swiperCurrent = 3;
                                        _this.data.prevQueue = newVal.slice(0, curIndex - 1);
                                    } else if (total - 1 - index == 1) {
                                        _this.data._change = 0;
                                        _this.data._invalidDown = 0;
                                        _this.data._invalidUp = 0;
                                        _this.data._last = 2;
                                    } else if (total - 1 - index == 2) {
                                        _this.data._change = 2;
                                        _this.data._invalidDown = 0;
                                        _this.data._invalidUp = 0;
                                        _this.data._last = 1;
                                        _this.data.circular = circular = true;
                                        curQueue = [
                                            ...newVal.slice(indexSub, index),
                                            ...newVal.slice(index, indexAdd),
                                            ...newVal.slice(indexAdd, indexAdd2),
                                        ]
                                    }

                                } else if (total > 4 && total % 3 == 2 && total - index - 1 <= 1) { // 除以3余2

                                    _pop = newVal.slice(total - 3, total - 2);
                                    _pop = _pop[0];
                                    if (total - index - 1 == 0 || total == index + 2) {
                                        if (total == index + 2) { // 当直接定位到倒数第二个播放
                                            _this.data._change = 1;
                                            _this.data._invalidDown = 0;
                                            _this.data._invalidUp = 0;
                                            _this.data._last = 0;
                                            circular = false;
                                            curQueue = [
                                                ...newVal.slice(total - 2, total - 1),
                                                ...newVal.slice(total - 1, total),
                                                // ...newVal.slice(total - 3, total - 2),
                                            ];
                                        } else {
                                            _this.data._change = 1;
                                            _this.data._invalidDown = 0;
                                            _this.data._invalidUp = 1;
                                            _this.data._last = 1;
                                            circular = false;
                                            curQueue = [
                                                ...newVal.slice(total - 2, total - 1),
                                                ...newVal.slice(total - 1, total),
                                            ];
                                        }
                                        _this.data.prevQueue = newVal.slice(0, total - 3);
                                    } else if (total - index - 1 == 1) {
                                        _this.data._change = 1;
                                        _this.data._invalidDown = 0;
                                        _this.data._invalidUp = 0;
                                        _this.data._last = 0;
                                        circular = true;
                                        curQueue = [
                                            ...newVal.slice(total - 2, total - 1),
                                            ...newVal.slice(total - 1, total),
                                            ...newVal.slice(total - 3, total - 2),
                                        ];
                                    }

                                } else {
                                    if (total <= 4) { // 当从第一个视频播放不需要其他操作
                                        // 当轮播第一次 初始化值
                                        _this.data._change = -1;
                                        _this.data._last = 1;
                                        _this.data._invalidDown = 0;
                                        _this.data._invalidUp = 0;
                                        // curQueue = newVal.slice(curIndex, curIndex + 3);
                                        curQueue = newVal;
                                        circular = false;
                                    } else {
                                        if (remainder == 0 && total > 4) {
                                            let lastArr = newVal.slice(indexSub, index); // 当这是第N轮的第一个swiper，需要裁剪上一个尾的数据
                                            if (index == 0) { // 当这是第一个swiper位置视频，当前最后一个视频为下2个
                                                _this.data._change = -1;
                                                _this.data._last = 1;
                                                _this.data._invalidDown = 0;
                                                _this.data._invalidUp = 0;
                                                lastArr = newVal.slice(indexAdd2, indexAdd2 + 1);
                                            }
                                            curQueue = [
                                                ...newVal.slice(index, indexAdd),
                                                ...newVal.slice(indexAdd, indexAdd2),
                                                ...lastArr
                                            ];
                                        } else if (remainder == 1 && total > 4) {
                                            curQueue = [
                                                ...newVal.slice(indexSub, index),
                                                ...newVal.slice(index, indexAdd),
                                                ...newVal.slice(indexAdd, indexAdd2)
                                            ]
                                        } else if (remainder == 2 && total > 4) {
                                            let homeArr = newVal.slice(indexAdd, indexAdd2); // 当这是第三个swiper，需要裁剪将来一个
                                            if (total === index + 1) { // 当这是最后一个视频时，只需要裁剪前2个
                                                circular = false;
                                                homeArr = newVal.slice(index - 2, indexSub);
                                            }
                                            curQueue = [
                                                ...homeArr,
                                                ...newVal.slice(indexSub, index),
                                                ...newVal.slice(index, indexAdd)
                                            ]
                                        }
                                    }

                                }
                                if (total <= 4) {
                                    swiperCurrent = index;
                                }
                                this.setData({
                                    curQueue: curQueue,
                                    total,
                                    circular,
                                    swiperCurrent,
                                    _pop
                                }, function () {
                                    _this.playCurrent(swiperCurrent);
                                });
                            }
                        },
                        animationfinish: function animationfinish(e) {
                            let _data = this.data,
                                _last = _data._last,
                                _change = _data._change,
                                curQueue = _data.curQueue,
                                prevQueue = _data.prevQueue,
                                nextQueue = _data.nextQueue,
                                total = _data.total;

                            let current = e.detail.current;
                            let diff = current - _last;
                            this.data.swiperCurrent = current;
                            this.playCurrent(current);
                            // 判断总数据是否大于等于10，并且下滑剩下4个视频开始请求接口拿数据；这里大小可以根据自己需求修改
                            console.log("total************", total)
                            console.log("nextQueue************", nextQueue)
                            if (total >= 10 && nextQueue.length < 5) {
                                this.triggerEvent('UpdataVideo', {});
                            }
                            if (diff === 0 || total <= 4) return;
                            this.data._last = current;
                            this.triggerEvent('change', {
                                activeId: curQueue[current].id
                            });
                            let direction = diff === 1 || diff === -2 ? 'up' : 'down';
                            if (direction === 'up') {
                                if (this.data._invalidDown === 0) {
                                    let change = (_change + 1) % 3;
                                    let add = nextQueue.shift();
                                    let remove = curQueue[change];
                                    if (add) {
                                        prevQueue.push(remove);
                                        curQueue[change] = add;
                                        this.data._change = change;

                                        // strart 判断是否总数余数为多少，裁剪当前轮播放2个还是4个。正常显示3个轮播
                                        if ((total % 3) === 1 && nextQueue.length === 0) {
                                            let timers = new Date();
                                            let addItem = JSON.parse(JSON.stringify(add));
                                            addItem.idxKey = timers.getTime();
                                            curQueue[3] = addItem;
                                        } else if ((total % 3) === 2 && nextQueue.length === 0) {
                                            let _pop = curQueue.pop();
                                            this.setData({
                                                _pop: _pop
                                            })
                                        }
                                        // end

                                    } else {
                                        this.data._invalidUp += 1;
                                    }
                                } else {
                                    this.data._invalidDown -= 1;
                                }
                            }
                            if (direction === 'down') {
                                if (this.data._invalidUp === 0) {
                                    let _change2 = _change;
                                    let _remove = curQueue[_change2];
                                    let _add = prevQueue.pop();
                                    if (_add) {
                                        curQueue[_change2] = _add;
                                        nextQueue.unshift(_remove);
                                        this.data._change = (_change2 - 1 + 3) % 3;
                                    } else {
                                        this.data._invalidDown += 1;
                                    }
                                } else {

                                    // strart 判断是否总数余数为多少，裁剪当前轮播放2个还是4个。正常显示3个轮播
                                    if ((total % 3) === 1 && curQueue.length === 4) {
                                        curQueue.pop();
                                    } else if ((total % 3) === 2 && nextQueue.length === 0) {
                                        curQueue.push(this.data._pop);
                                    }
                                    // end

                                    this.data._invalidUp -= 1;
                                }
                            }
                            let circular = true;
                            if (nextQueue.length === 0 && current !== 0) {
                                circular = false;
                            }
                            if (prevQueue.length === 0 && current !== 2) {
                                circular = false;
                            }
                            this.setData({
                                curQueue: curQueue,
                                circular: circular
                            }, () => {
                                // console.log('curQueue:', JSON.parse(JSON.stringify(this.data.curQueue)), 'nextQueue:', this.data.nextQueue, 'prevQueue:', this.data.prevQueue)
                                // console.log(this.data);
                                // console.log(curQueue[current], 'id', this.data, current);
                                // console.log('_change:', this.data._change, '_invalidDown:', this.data._invalidDown, '_invalidUp:', this.data._invalidUp, '_last:', this.data._last)
                            });
                            console.log("------------------qh",this.data.curQueue)
                        },
                        // 点击播放或暂停
                        clickVideo(e) {
                            let current = this.data.swiperCurrent;
                            let index = e.currentTarget.dataset.index;
                            let videoContextPrev = wx.createVideoContext(`video_${current}`, this)
                            if (this.data.videoBol[index]) {
                                videoContextPrev.pause();
                            } else {
                                videoContextPrev.pause();
                                setTimeout(function () {
                                    //将点击视频进行播放
                                    videoContextPrev.play();
                                }, 300)
                            }
                        },
                        playCurrent: function playCurrent(current) {
                            this.setData({
                                swiperCurrent: current
                            }, () => {
                                let _videoContexts = this.data._videoContexts;
                                _videoContexts.map((item, index) => {
                                    if (current == index) {
                                        item.play();
                                    } else {
                                        item.stop();
                                    }
                                })
                            });
                        },
                        onPlay: function onPlay(e) {
                            this.trigger(e, 'play');
                            let index = e.currentTarget.dataset.index;
                            let id = e.currentTarget.dataset.id;
                            this.setData({
                                [`videoBol[${index}]`]: true
                            });
                        },
                        onPause: function onPause(e) {
                            this.trigger(e, 'pause');

                            let index = e.currentTarget.dataset.index;
                            this.setData({
                                [`videoBol[${index}]`]: false
                            });
                        },
                        onEnded: function onEnded(e) {
                            this.trigger(e, 'ended');

                            let index = e.currentTarget.dataset.index;
                            this.setData({
                                [`videoBol[${index}]`]: false
                            });
                        },
                        onError: function onError(e) {
                            this.trigger(e, 'error');

                            let index = e.currentTarget.dataset.index;
                            this.setData({
                                [`videoBol[${index}]`]: false
                            });
                        },
                        onTimeUpdate: function onTimeUpdate(e) {
                            this.trigger(e, 'timeupdate');
                        },
                        onWaiting: function onWaiting(e) {
                            this.trigger(e, 'wait');
                        },
                        onProgress: function onProgress(e) {
                            this.trigger(e, 'progress');
                        },
                        onLoadedMetaData: function onLoadedMetaData(e) {
                            this.trigger(e, 'loadedmetadata');
                        },
                        trigger: function trigger(e, type) {
                            let ext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

                            let detail = e.detail;
                            let activeId = e.target.dataset.id;
                            this.triggerEvent(type, Object.assign(Object.assign(Object.assign({}, detail), {
                                activeId: activeId
                            }), ext));
                        }
                    }
                });

                /***/
            })
            /******/
        ]);