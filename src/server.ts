import App from '@/app';
import CardsRoute from '@routes/cards.route';
import IndexRoute from '@routes/index.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new CardsRoute()]);

app.listen();
