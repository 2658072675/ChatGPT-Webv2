'use strict';
Object.defineProperty(exports, '__esModule', { value: true });

// 获取配置信息的函数
function getConfig(key) {
	const config = {
		port: 3200,  // 端口号，确保没有被占用
		mysql_config: {  // MySQL配置信息
			dialect: 'mysql',
			host: '43.159.38.166',  // 数据库主机地址
			port: 3306,  // 数据库端口号，默认3306
			username: 'chat130',  // 数据库用户名
			password: 'ZneCSdQsNbswPcWa',  // 数据库密码
			database: 'chat130',  // 数据库名称
			timezone: '+08:00',
			dialectOptions: {
				dateStrings: true,
				typeCast: true
			}
		},
		redis_config: {  // Redis配置信息，一般不用改
			type: 'redis',
			host: '43.159.38.166',
			port: 6379,
			password: 'jhkdjhkjdhsIUTYURTU_CzjRAp'
		},
		email: 'service@sky350.com',  // 邮件地址
		email_config: {  // 邮件配置信息
			host: 'smtp.larksuite.com',  // SMTP服务器地址
			port: 465,  // SMTP服务器端口号
			ignoreTLS: false,  // 是否忽略TLS
			secure: false,  // 是否使用安全连接
			auth: {
				user: 'service@sky350.com',  // SMTP服务器用户名
				pass: 'jGxXarVcHpzbkU7i'  // SMTP服务器密码
			}
		}
	};
	if (key) {
		return config[key];
	}
	return config;
}

exports.default = {
	getConfig
};

//# sourceMappingURL=index.js.map
