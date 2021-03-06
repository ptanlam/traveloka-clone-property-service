import mongoose from 'mongoose';

export default async function connectToDatabase() {
  try {
    await mongoose.connect(
      'mongodb://localhost/traveloka_clone_property_service',
      {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    // eslint-disable-next-line no-console
    console.log('Property service connected to database successfully!');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(
      `Property service failed to connect to database: ${err.message}`,
    );
  }
}
