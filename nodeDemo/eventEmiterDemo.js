			//引入events模块
			var events = require('events');
			//创建eventEmitter（事件发射器）对象
			var eventEmitter = new events.EventEmitter();
			
			//监听器 1
			var listener1=function listener1(){
				console.log('监听器 listener1 被执行');
			}
			//监听器 2
			var listener2=function listener2(){
				console.log('监听器 listener2 被执行');
			}
			// 绑定 connection 事件，处理函数为 listener1 
			eventEmitter.addListener('connect',listener1);
			// 绑定 connection 事件，处理函数为 listener2
			eventEmitter.on('connect',listener2);

			var eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connect');

			console.log(eventListeners + " 个监听器监听连接事件。");
			// 处理 connection 事件 
			eventEmitter.emit('connect');
			// 移除监绑定的 listener1 函数
			eventEmitter.removeListener('connect', listener1);
			console.log("listener1 不再受监听。");

			// 触发连接事件
			eventEmitter.emit('connection');

			eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connect');
			console.log(eventListeners + " 个监听器监听连接事件。");

			eventEmitter.removeAllListeners('connect');

			eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connect');

			console.log(eventListeners + " 个监听器监听连接事件。");

			console.log("程序执行完毕。");