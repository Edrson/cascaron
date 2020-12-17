
import express, {Application} from 'express';
const morgan = require('morgan');
const bodyParser = require('body-parser');
/* import IndexRoutes from './routes/index.routes'; */
var routes = require('./routes/index.ts');
export class App {
   private app: Application;
    constructor(private port?: number | string){
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(morgan('dev'));
        this.settings ();
        this.routes();
    }

  
    settings(){
    this.app.set('port', this.port || process.env.PORT || 3001);
    }


        /* this.app.use(IndexRoutes); */
       routes(){
        this.app.use('/', routes)
       }
       
    

    async listen(){
     await   this.app.listen(this.app.get('port'));
     console.log('server en el port ', this.app.get('port'));
}

}

