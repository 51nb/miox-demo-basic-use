import Router from 'miox-router';
import C from '../webviews/c/index.vue';

const route = new Router();

route.use(async (ctx, next) => {
  alert('正在进入C页面，点击确定进入');
  await next();
});
route.patch('/d', async ctx => await ctx.render(C));

export default route;