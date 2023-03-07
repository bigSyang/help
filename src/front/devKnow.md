# 开发须知


## 一、代码仓库（GitLab）
[仓库地址](http://192.168.10.152)

### 1、注册账号
![注册账号](/assets/getStarted_1.png)

**须知**

- Full name，填写真实的中文名，例如：李逍遥
- Username，填写真实的中文名拼音，例如：lixiaoyao
- Email，填写一个可用的邮箱地址
- 账号创建后，找负责人申请代码仓库权限

### 2、Git安装与配置
#### 下载安装
- Windows环境，[下载地址](https://git-scm.com/download/win)
- MAC环境，[下载地址](https://git-scm.com/download/mac)
### 配置
进入项目根目录配置如下
- git config user.name “gitLab账号“
- git config user.email ”gitLab邮箱”
- git config --list 查看配置是否设置成功

### 3、代码提交说明

- 后端配置文件不允许提交，如：application.yml、bootstrap.yml
- 前端环境变量文件不允许提交，如：.env.development、.env.production
- 每次提交代码，必须写明代码提交备注
::: danger 提交注释规范
1、新增的功能，Add #需求编号，如：**Add #1234 新增MySQL元数据采集**

2、功能改造与优化，Mod #需求编号，如：**Mod #765 优化数据标准模板导入**

3、bug修复，Fix #bug编号，如：**Fix #5645 修复AD域导入时，部门信息丢失的bug**
:::


## 二、需求仓库（禅道）
[禅道地址](http://106.75.229.129:8020/author/index)

### 1、账号申请
找负责人开通账号

### 2、需求管理须知
- 领取需求后，须认真阅读需求文档，理解业务流程，才能开发
- 开发完成后，须更改需求状态为“研发完毕”，再交给测试

## 三、网盘
[网盘地址](http://file.wcompass.net/)

### 1、账号申请
找负责人开通账号

