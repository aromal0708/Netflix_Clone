import User from "@/models/user.model";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (req: any) => {
  const { email, password }: { email: string; password: string } = req.json();
  const normalizedEmail: string = email.toLowerCase();

  if (!email || !password) {
    return NextResponse.json(
      { message: "All Feilds required" },
      { status: 400 }
    );
  }
  const user: any = User.findOne({ email: normalizedEmail });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 409 });
  }

  const validPassword = bcrypt.compare(password, user.password);

  if (!validPassword) {
    return NextResponse.json({ message: "Invalid Password" }, { status: 400 });
  }
};
