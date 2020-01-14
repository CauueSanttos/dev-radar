import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@mongodb-mcoul.mongodb.net/week10?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
