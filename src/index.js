/**
 * Miox install file
 */
import 'miox-css';
import './index.less';
import Miox from 'miox';
import Engine from 'miox-vue2x';
import Route from './routes';
import Animate from 'miox-animation';

// 新建Miox对象
const app = new Miox({
  session: true,
  max: 5
});

// 各种事件
app.on('500', err => console.error(err.stack));
app.on('404', err => console.warn('404 Not found'));
app.on('process:start', () => console.log('process:start'));
app.on('process:end', () => console.log('process:end'));

// 设置引擎
app.install(Animate('slide'), Engine);

// 设置路由
app.use(Route.routes());

// 启动服务监听
export default app.listen();