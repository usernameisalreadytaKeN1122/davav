## datav：基于Vue框架的数据大屏项目
基于Vue框架的数据大屏项目，是指将获取到的数据信息用前端语言经过数据可视化处理，利用ECharts开源图表库对数据进行图形化表达，投放在各种尺寸的屏幕上，包括超大的LED屏、投影屏以及普通显示屏等。
<picture>
 <source media="(prefers-color-scheme: dark)" srcset="https://github.com/usernameisalreadytaKeN1122/davav/blob/main/pic/result.jpg">
 <source media="(prefers-color-scheme: light)" srcset="https://github.com/usernameisalreadytaKeN1122/davav/blob/main/pic/result.jpg">
 <img alt="YOUR-ALT-TEXT" src="https://github.com/usernameisalreadytaKeN1122/davav/blob/main/pic/result.jpg">
</picture>
使用Vue3.0框架，利用EChart4.0绘制各类视图图表效果，进行包括用户统计、骑手概况和环比分析在内的十四个组件的设计与开发，并使用真实数据利用数据接口进行通信，结合Hooks编程思想，采用全新的编程方式完成项目架构和代码编写，通过Http和WebSocket更新接口数据，通过接口数据驱动ECharts的数据更新，最终实现的数据大屏界面简洁美观，操作反馈较好，各组件实现效果良好。

## 目录结构
<details open>
<summary>前端的目录主要包括8个部分，其中public、src、README.md、vue.config.js、package-lock.json和babel.config.js为创建Vue框架的项目后自行生成的文件夹，node_modules为执行npm install命令后自行生成的文件夹，具体目录结构如图所示。</summary>
<picture>
 <source media="(prefers-color-scheme: dark)" srcset="https://github.com/usernameisalreadytaKeN1122/davav/blob/main/pic/Directory%20structure.jpg">
 <source media="(prefers-color-scheme: light)" srcset="https://github.com/usernameisalreadytaKeN1122/davav/blob/main/pic/Directory%20structure.jpg">
 <img alt="YOUR-ALT-TEXT" src="https://github.com/usernameisalreadytaKeN1122/davav/blob/main/pic/Directory%20structure.jpg">
</picture>
</details>

## 环境安装


|| 步骤 |
|-----:|---------------|
|     1|安装node.js               |
|     2|npm install -g cnpm –registry=https://registry.npm.taobao.org ,安装淘宝镜像               |
|     3|npm install --global vue-cli,全局安装vue-cli               |  
|     3|vue add vue-next,自动安装 vue-cli-plugin-vue-next插件，升级为vue3项目               |

## 组件开发
<details>
<summary>组件化的核心意义是提取有复用性的东西，在web前端有复用价值的东西指的是控件、基础逻辑功能、公共样式以及稳定的业务逻辑，公共样式的复用性在很大程度上提高了前端的开发效率。  
 共14个通用组件，具体包括顶部标题TopHeader、年龄分布图表AverageAge、设备统计TotalDevice、南丁格尔图ScheduleView、性别统计TotalGender、骑手统计TotalRider、热卖品类HotCategory、顶部核心指标CenterHeader、变换分类TransformCategory、基础滑动列表SalesList、销售额大盘OrderMap、实时订单趋势RealTimeOrder、订单日历+商家排行SalesRank和用户统计TotalUser组件</summary>
<picture>
 <source media="(prefers-color-scheme: dark)" srcset="https://github.com/usernameisalreadytaKeN1122/davav/blob/main/pic/14.jpg">
 <source media="(prefers-color-scheme: light)" srcset="https://github.com/usernameisalreadytaKeN1122/davav/blob/main/pic/14.jpg">
 <img alt="YOUR-ALT-TEXT" src="https://github.com/usernameisalreadytaKeN1122/davav/blob/main/pic/14.jpg">
</picture>
</details>

