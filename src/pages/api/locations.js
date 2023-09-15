import clientPromise from "../../../utils/database";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db();

       const locations = await db.collection("locations").find({}).toArray();

       res.json(locations);
   } catch (e) {
       console.error(e);
   }
}; 