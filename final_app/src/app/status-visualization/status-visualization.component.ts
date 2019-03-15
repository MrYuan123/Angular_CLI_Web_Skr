import { Component, OnInit } from '@angular/core';
import { StatusService } from '../status.service';
import { Status} from '../status';

@Component({
  selector: 'app-status-visualization',
  templateUrl: './status-visualization.component.html',
  styleUrls: ['./status-visualization.component.scss']
})
export class StatusVisualizationComponent implements OnInit {
  //
  // onTimeOut() {
  //   this.ApiCall().then(
  //     success => {
  //       if(success ['ok'] == 0){
  //         this.navCtrl.push(myPage);
  //       }
  //     },
  //     error => { console.log(error); });
  // }
    TemperatureList: number[];
    SpeedList: number[];
    MemoryList: number[];
    statusArr: Status[];
    option2: {};
    option3: {};


  constructor(private statusService: StatusService) {
      const mems: number[] = new Array();
      const speeds: number[] = new Array();
      const tems: number[] = new Array();
      this.statusService.getStatus().subscribe(status => {
          this.statusArr = status;
          for (let m = 0; m < this.statusArr.length; m++) {
              console.log(m);
              console.log(Number(this.statusArr[m]['Temperature']));
              mems.push(Number(this.statusArr[m]['Memory']));
              speeds.push(Number(this.statusArr[m]['Speed']));
              tems.push(Number(this.statusArr[m]['Temperature']));
              // this.TemperatureList.push(Number(this.statusArr[m]['Temperature']));
              // this.SpeedList.push(Number(this.statusArr[m]['Speed']));
              // this.MemoryList.push(Number(this.statusArr[m]['Memory']));
          }

          for (let l = 0; l < this.MemoryList.length; l++) {
              console.log(this.MemoryList[l]);
          }
      });
      // this.MemoryList = [15, 24, 22, 45, 5,  67, 88, 10 , 30, 50, 60, 35, 42, 48, 76, 28, 90, 38, 75];
      this.option2 = {
          toolbox: {
              feature: {
                  dataZoom: {
                      yAxisIndex: 'none'
                  },
                  restore: {},
                  saveAsImage: {}
              }
          },
          title: {
              text: 'Memory Monitor',
              subtext: 'Measurement Unit',
              left: 'center'
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              axisLabel: {interval: 9},
              data: [
                  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99'
              ].map(function (str) {
                  return str.replace(' ', '\n');
              })
          },
          // ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          yAxis: {
              type: 'value',
              max: 1000,

          },
          series: [{
              data: mems,
              type: 'line',
              areaStyle: {}
          }]
      };

      this.option3 = {
          title : {
              text: 'Condition Monitor Diagram',
              subtext: 'Web Skr Team',
              x: 'center',
              align: 'right'
          },
          grid: {
              bottom: 80
          },
          toolbox: {
              feature: {
                  dataZoom: {
                      yAxisIndex: 'none'
                  },
                  restore: {},
                  saveAsImage: {}
              }
          },
          tooltip : {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  animation: false,
                  label: {
                      backgroundColor: '#505765'
                  }
              }
          },
          legend: {
              data: ['流量', '降雨量'],
              x: 'left'
          },
          dataZoom: [
              {
                  show: true,
                  realtime: true,
                  start: 65,
                  end: 85
              },
              {
                  type: 'inside',
                  realtime: true,
                  start: 65,
                  end: 85
              }
          ],
          xAxis : [
              {
                  type : 'category',
                  boundaryGap : false,
                  axisLine: {onZero: false},
                  axisLabel: {interval: 9},
                  data : [
                      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99'
                  ].map(function (str) {
                      return str.replace(' ', '\n');
                  })
              }
          ],
          yAxis: [
              {
                  name: 'Temperature(Clecisus)',
                  type: 'value',
                  max: 200
              },
              {
                  name: 'Network Speed(mb/s)',
                  nameLocation: 'start',
                  max: 2000,
                  type: 'value',
                  inverse: true
              }
          ],
          series: [
              {
                  name: 'Temperature',
                  type: 'line',
                  animation: false,
                  areaStyle: {
                  },
                  lineStyle: {
                      width: 1
                  },
                  markArea: {
                      silent: true,
                  },
                  data: tems
                  //     [
                  //     34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22
                  // ]
              },
              {
                  name: 'Netowrk Speed',
                  type: 'line',
                  yAxisIndex: 1,
                  animation: false,
                  areaStyle: {
                  },
                  lineStyle: {
                      width: 1
                  },
                  markArea: {
                      silent: true,
                  },
                  data: speeds
                  //     [
                  //     234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456
                  // ]
              }
          ]
      };
  }


    ngOnInit() {
    }

    getMessage(): void{
    }
        // this.statusArr.forEach((data: Status) => console.log(data));
        // console.log(this.statusArr);
        // for( let item in this.statusArr){
        //     // alert(item['Temperature']);
        //     this.TemperatureList.push(Number(item['Temperature']));
        //     this.SpeedList.push(Number(item['Speed']));
        //     this.MemoryList.push(Number(item['Memory']));
        // }

    // showloading = true;

  option3 = {
    title : {
      text: 'Condition Monitor Diagram',
      subtext: 'Web Skr Team',
      x: 'center',
      align: 'right'
    },
    grid: {
      bottom: 80
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        restore: {},
        saveAsImage: {}
      }
    },
    tooltip : {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        animation: false,
        label: {
          backgroundColor: '#505765'
        }
      }
    },
    legend: {
      data: ['流量', '降雨量'],
      x: 'left'
    },
    dataZoom: [
      {
        show: true,
        realtime: true,
        start: 65,
        end: 85
      },
      {
        type: 'inside',
        realtime: true,
        start: 65,
        end: 85
      }
    ],
    xAxis : [
      {
        type : 'category',
        boundaryGap : false,
        axisLine: {onZero: false},
        axisLabel: {interval: 9},
        data : [
          '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99'
        ].map(function (str) {
          return str.replace(' ', '\n');
        })
      }
    ],
    yAxis: [
      {
        name: 'Temperature(Clecisus)',
        type: 'value',
        max: 200
      },
      {
        name: 'Network Speed(mb/s)',
        nameLocation: 'start',
        max: 2000,
        type: 'value',
        inverse: true
      }
    ],
    series: [
      {
        name: 'Temperature',
        type: 'line',
        animation: false,
        areaStyle: {
        },
        lineStyle: {
          width: 1
        },
        markArea: {
          silent: true,
        },
        data: [
          34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22
        ]
      },
      {
        name: 'Netowrk Speed',
        type: 'line',
        yAxisIndex: 1,
        animation: false,
        areaStyle: {
        },
        lineStyle: {
          width: 1
        },
        markArea: {
          silent: true,
        },
        data: [
          234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456
        ]
      }
    ]
  };
}
