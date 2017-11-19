import Router from 'miox-router';
import HomePage from '../webviews/home/index.vue';
import ExamplePage from '../webviews/go-webview/index.vue';
import A from '../webviews/a/index.vue';
import B from '../webviews/b/index.vue';
import Crouter from './c';

const route = new Router();
let id = 1;

route.use('/c', Crouter.routes(), async (ctx, next) => {
  alert('C router not find');
  await next();
});
route.patch('/', async ctx => await ctx.render(HomePage));
route.patch('/go-webview/:a(\\d+)?/:b(\\d+)?', async ctx => await ctx.render(ExamplePage, {
  query: ctx.query,
  params: ctx.params
}));
route.patch('/a', async ctx => await ctx.render(A));
route.patch('/b', async ctx => await ctx.render(B));
route.patch('/h', async ctx => {
  if (id++ % 2 === 1) {
    await ctx.render(A);
  } else {
    await ctx.render(B);
  }
})

export default route;