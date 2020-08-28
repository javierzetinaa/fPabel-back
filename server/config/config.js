process.env.PORT = process.env.PORT || 4000;
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
process.env.CADUCIDAD_TOKEN = '48h';
process.env.SEED = process.env.SEED || 'token-seed-secret-jsjs-quecrazyoso-desarrollo-d';
let urlDB;
if (process.env.NODE_ENV === 'dev') urlDB = 'mongodb://localhost:27017/fpanel';
else urlDB = process.env.MONGO_URI;
process.env.urlDB = urlDB;


