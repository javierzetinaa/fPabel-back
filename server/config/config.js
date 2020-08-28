process.env.PORT = process.env.PORT || 4000;
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
process.env.TOKEN = '48h';
process.env.SEED = process.env.SEED || 'token-seed-secret-jsjs-quecrazyoso';
let urlDB;
if (process.env.NODE_ENV === 'dev') urlDB = 'mongodb://localhost:27017/fpanel';
else urlDB = 'mongodb+srv://fpaneladmin:olaolaola315@fpanel.lejim.mongodb.net/fpanel';
process.env.urlDB = urlDB;