export default () => ({
  uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/grc-compliance',
  dbName: process.env.DATABASE_NAME || 'grc-compliance',
});
