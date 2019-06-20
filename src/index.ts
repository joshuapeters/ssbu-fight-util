import App from './03_presentation/App';

var app = new App();
var port = parseInt(process.env.PORT) || 3000;

app
    .initialize()
    .start(port);