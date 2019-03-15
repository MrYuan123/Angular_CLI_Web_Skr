import {Component, OnInit, Output, AfterViewInit, EventEmitter} from '@angular/core';
import { MapOptions, Point, MarkerOptions, NavigationControlOptions, ControlAnchor,
    NavigationControlType, OverviewMapControlOptions, ScaleControlOptions, MapTypeControlOptions, MapTypeControlType,
    GeolocationControlOptions} from 'angular2-baidu-map';
import {any} from 'codelyzer/util/function';


@Component({
    selector: 'app-location-visualization',
    templateUrl: './location-visualization.component.html',
    styleUrls: ['./location-visualization.component.scss']
})
export class LocationVisualizationComponent implements OnInit {
    constructor() {


        // 这是控件control
        this.controlOpts = {         // 导航控件
            anchor: ControlAnchor.BMAP_ANCHOR_TOP_LEFT,      // 显示的控件的位置
            type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE,   // 用来描述它是什么样的导航
            offset: {                                        // 控件的大小
                width: 30,
                height: 30
            },
            showZoomInfo: true,                             // 是否展示当前的信息
            enableGeolocation: true                         // 是否启用地理定位功能
        };
        this.overviewmapOpts = {    // 地图全景控件
            anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT,  // 显示的控件的位置
            isOpen: true                                    // whf 。。官网里没有说明？？
        };
        this.scaleOpts = {          // 比例尺控件
            anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
        };
        this.mapTypeOpts = {        // 地图类型
            type: MapTypeControlType.BMAP_MAPTYPE_CONTROL_HORIZONTAL
        };
        // Geolocation 和Panorama 没有属性
    }

    locationdic = {'Boston': { lng: -71.02, lat: 38.53}, 'NewYork': { lng: -70.63, lat: 40.32}};
    // public opts: MapOptions;
    opts: any;
    markers: any;
    // offlineOpts: OfflineAudioContextOptions;
    // public markers: Array<{ point: Point; options?: MarkerOptions  }>;
    public controlOpts: NavigationControlOptions;
    public overviewmapOpts: OverviewMapControlOptions;
    public scaleOpts: ScaleControlOptions;
    public mapTypeOpts: MapTypeControlOptions;
    public geolocationOpts: GeolocationControlOptions;

    clickMarker(marker: any) {
        console.log(marker);
    }
    loadMap(e: any) {
        console.log(e);
    }

    // mapClicked($event: MouseEvent) {
    //   this.markers.push({
    //
    //     options: {
    //       title: 'test'
    //     },
    //     point: {
    //       lng: -71.063,   // 经度
    //       lat: 42.34,    // 纬度
    //     }
    //   });
    // }


    ngOnInit() {

        this.opts = {
            centerAndZoom: {     // 设置中心点和缩放级别
                lng: -79.99694444,   // 经度
                lat: 40.4405555,
                // radius = 8000,
                zoom: 7           // 缩放级别
            },
            minZoom: 3,  // 最小缩放级别的地图
            maxZoom: 19, // 最大缩放级别的地图
            enableHighResolution: true,  // 是否用高分辨率的地图，default：true
            enableAutoResize: true,  // 是否可以自动调整大小，default：true
            enableMapClick: true,  // 地图是否可以点击，default：true
            disableDragging: false, // 是否禁用地图拖动功能
            enableScrollWheelZoom: true, // 是否启用滚轮进行缩放功能
            disableDoubleClickZoom: false, // 是否禁用双击缩放功能
            enableKeyboard: true,  // 是否启用键盘移动地图功能
            enableInertialDragging: false,     // 是否启用惯性阻力函数
            enableContinuousZoom: true,  // 是否启用连续缩放功能
            disablePinchToZoom: false,   // 是否禁用缩放功能的缩放
            cursor: '',         // 设置默认的光标样式,应该遵循CSS规范
            draggingCursor: '', // 设置默认的拖动光标样式，应该遵循CSS规范
            currentCity: '北京市',   // 设置当前的城市
        };


        this.markers = [
            {
                title: 'asdkjgaslfkjasd',
                content: '1111111',
                autoDisplayInfoWindow: true,
                // options: {
                //   title: 'asdkjgaslfkjasd',
                //   content: '1111111'
                // },
                point: {
                    lng: 120.62,   // 经度
                    lat: 31.32,    // 纬度

                }
            },
            {
                options: {
                    title: 'test'
                },
                point: {
                    lng: -71.063,   // 经度
                    lat: 42.32,    // 纬度
                }
            },
            {
                point: {
                    lng: -71.06,   // 经度
                    lat: 42.32,    // 纬度
                }
            },
            {
                point: {
                    lng: -71.061,   // 经度
                    lat: 42.324,    // 纬度
                }
            },
            {
                point: {
                    lng: -71.061,   // 经度
                    lat: 42.318,    // 纬度

                }
            },
            {
                point: {
                    lng: -71.06,   // 经度
                    lat: 42.33,    // 纬度
                }
            },
            {
                point: {
                    lng: -74.005972222,   // 经度
                    lat: 40.7143528,    // 纬度
                }
            },
            {
                point: {
                    lng: -74.006,   // 经度
                    lat: 40.715,    // 纬度
                }
            },
            {
                point: {
                    lng: -74.00597,   // 经度
                    lat: 40.7145,    // 纬度
                }
            },
            {
                point: {
                    lng: -77.036367,   // 经度
                    lat: 38.8951167,    // 纬度
                }
            },

            {
                point: {
                    lng: -77.0,   // 经度
                    lat: 38.9,    // 纬度
                }
            },
            {
                point: {
                    lng: -79.99694444,   // 经度
                    lat: 40.4405555,    // 纬度
                }
            },
            {
                point: {
                    lng: -83.03333,   // 经度
                    lat: 42.3166,    // 纬度
                }
            },
            {
                point: {
                    lng: -118.36667,   // 经度
                    lat: 34.08333,    // 纬度
                }
            },
            {
                point: {
                    lng: -95.3833333,   // 经度
                    lat: 29.75,    // 纬度
                }
            },
            {
                point: {
                    lng: -104.98333333,   // 经度
                    lat: 39.716667,    // 纬度
                }
            },
            {
                point: {
                    lng: -112.083333,   // 经度
                    lat: 33.05,    // 纬度
                }
            }
        ];

    }





}