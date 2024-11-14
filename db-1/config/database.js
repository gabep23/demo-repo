import pg from 'pg';

const config = {
    connectionString: "postgresql://postgres:PVmUeGdKPOnOyCSGcqHduInzVUSQidRI@autorack.proxy.rlwy.net:27464/railway"
};

const pool = new ongamepadconnected.Pool(config);
export {pool};