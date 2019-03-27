import * as Koa from 'koa';
import * as Router from 'koa-router';
import { datas } from './datas/offers';

const routeOptions: Router.IRouterOptions = {
  prefix: '/api'
}

const router = new Router(routeOptions);

router.get('/job-offers', (ctx: Koa.Context) => {
  ctx.body = datas;
});

router.get('/job-offers/:reference', (ctx: Koa.Context) => {
  ctx.body = datas.find((jobOffer) => jobOffer.reference === ctx.params.reference);
});

export { router };
