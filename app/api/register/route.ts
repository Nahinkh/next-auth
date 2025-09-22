import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
    try {
        await connectToDatabase();
        const {name, email, password} = await req.json();
        console.log({name, email, password});
        const existingUser = await User.findOne({email});
        if(existingUser){
            return new Response(JSON.stringify({error: 'User already exists'}), {status: 400});
        }
        const newUser = new User({name, email, password, provider: 'credentials'});
        await newUser.save();
        return new Response(JSON.stringify({message: 'User registered successfully'}), {status: 201});  
    } catch (error) {
      console.log(error);
      return new Response(JSON.stringify({error: 'Internal Server Error'}), {status: 500});  
    }

}