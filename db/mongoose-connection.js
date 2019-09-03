import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/test-app', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// module.exports = { mongoose };
export default mongoose;
