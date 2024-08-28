import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://mdd14499:danish@cluster0.zrbezsu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
// MONGODB_URI="mongodb://Siddiq:Siddiq@ac-3u1omyb-shard-00-00.a4yklnv.mongodb.net:27017,ac-3u1omyb-shard-00-01.a4yklnv.mongodb.net:27017,ac-3u1omyb-shard-00-02.a4yklnv.mongodb.net:27017/Vocal?ssl=true&replicaSet=atlas-zyuw7g-shard-0&authSource=admin&retryWrites=true&w=majority"