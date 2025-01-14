import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectToDB } from "@/lib/db";
import User from "@/models/user.model";
export const POST = async (req: any) => {
  try {
    const { name, email, password } = await req.json();
    //No Credentials
    if (!email || !password || !name) {
      return NextResponse.json(
        { message: "All feilds required" },
        { status: 402 }
      );
    }
    //Establish COnnection With DataBase
    await connectToDB();

    //User already exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "User Already Exists" },
        { status: 409 }
      );
    }
    //Save user if no user exists
    const hashedPassword = await bcrypt.hash(password, 8);
    User.create({
      name,
      email,
      password: hashedPassword,
    });
    
    return NextResponse.json(
      { message: "User Registered Successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
