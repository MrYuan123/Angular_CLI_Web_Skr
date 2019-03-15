# 6150 Final Teamwork WebSkr

![](https://img.shields.io/badge/Download-622.8%20MB-blue.svg)
&nbsp;
![](https://img.shields.io/badge/node-%3E%3D6.0.0-green.svg)
&nbsp;
![](https://img.shields.io/badge/build-passing-brightgreen.svg)
&nbsp;
![](
https://img.shields.io/cocoapods/p/AFNetworking.svg
)

> Remote IOT System
> 
> Angular Cli
> 
> NodeJS
> 
> MongoDB


## 1. Project Description
### Background

With the development of Internet of Things technology, more and more individuals or businesses choose to collect data and process data by renting cloud devices. Therefore, the management system of these cloud devices is especially important.

### Function

`Realtime Data` : Create multiple line charts to show devices data by using MongoDB and Echarts API which already have built-in data display technology.

`Map Identifier` : Use Baidu Map API to create a devices map based on the unique location. Users can intuitively get the geographic information of their devices.

`User Friendly Interface` : Implement Bootstrap to design the overall structure of the web page, simply divide the user interface and device data interface.

##2. Requirements
### Basic Requirements

- node v8.12.0

- npm v6.4.1

- mongoDB


### Npm Depedencies

- angular/http

- rxjs

- angular-boostrap

- angular-material

- bootswatch

### Environment

- Mac os Mojove x64

- Windows10 Education

##3. Component Description
### Login Component
This component is used to provide an interface for users who have already registered an account for login. Users need to type in both correct username and password to get into the information interface. The whole structure is simple and efficient, the background picture will change with times.

### Register Component
The register component is parallel to the login component which saves users personal information, including username, email address and password. The email input text has already added the validation for email address which should contain @ in the input string. In confirm password part, users need to type same password in that input text to insure the success of the register process.

### Homepage Component
This component defines the main frame of the IOT system web page. Add the header, sidebar, login dashboard and footer at the same time. Use data binding to show the login username on the dashboard and add a button for clicking inorder to jump to the target devices component.

### Header Component
This component uses bootstrap as the structure frame to build the header. Header contains the system name with a unique logo, a search textarea to search target devices and a tool bar with the profile picture. The color of the header make the whole system seams simple and practical. The tool bar is a dropdown bar which is also used in bootstrap.

### Footer Component
The footer is very simple with one row of producer information.

### Sider Component
The sider component contains multiple tags which can navigate to different target components.
The navigate tags contains one A tags and one LI tages, all the tags are listening to the click action.

### Device Tabel Component
This component is the second function on the side bar which can be navigated to by clicking the button on side bar. Use the function *ngFor to travers all the devices element in the list and print them out on the table. Users can delete each devices or see the detials of each device and decide which device need to be deleted.

### Add Device Component
This component is the third function on the side bar which can be navigated to by clicking the button on side bar. Users need to enter the device ID, device name, device location and select a device type to create a new device. The device ID should not be duplicate, and each textarea should not be blank.

### Change Pass Component
This component is the fourth function on the side bar which can be navigated to by clicking the button on side bar. Users need to input their target password and rewrite them on the next textarea with clicking the submit button. By creating this new password, the user can use this password to login this system for the next time.

### Status Visualization Component
This component is the fifth function on the side bar which can be navigated to by clicking the button on side bar. The echarts API is used in this component to show the data changing trends. Some basic display functions are included with the echarts API.

### Location Visualization Component
This component is the sixth function on the side bar which can be navigated to by clicking the button on side bar. This component is inserted with a Google map API to show the location of each devices. By using this function, users can have a more intuitive understanding of their devices.

### Status Table Component
The status table is detached from the devices table, this component is the seventh function on the side bar which can be navigated to by clicking the button on side bar. By using the data binding, the table can be connected to the random data and show them on the web page.

### NodeJS
Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write Command Line tools and for server-side scripting-running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.

### RESTful API
`/account/GET` Take one or more accounts from the server;

`/account/POST` Create a new account on the server;

`/account/DELETE` Delete a account on the server;


##4. Run and Test
Run `ng serve --open` to run the project with the test link `http://localhost:4200/login`

If the port 4200 is used, we can also run `ng serve -port 8002` and open the project at port 8002 with the test link `http://localhost:8002/login`, the port number can be changed to others.


> Reference

- Learn how to write Angular with hero example: **[Angular](https://angular.io/).**
- Learn how to use mongoDB with examples: **[MongoDB](http://www.runoob.com/mongodb/mongodb-tutorial.html).**
- Learn how to use NodeJS to combine front end and back end: **[NodeJS](http://www.runoob.com/nodejs/nodejs-tutorial.html).**
- Learn how to use Echarts API with some official instance: **[Echarts](http://echarts.baidu.com/examples/).**
- Learn how to use Baidu Map API with some official instance: **[Baidu Map](http://lbsyun.baidu.com/).**