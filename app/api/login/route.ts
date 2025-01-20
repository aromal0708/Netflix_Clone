import User from "@/models/user.model";
import { UserType } from "@/types";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { email, password }: { email: string; password: string } =
    await req.json();
  const normalizedEmail: string = email.toLowerCase();

  if (!email || !password) {
    return NextResponse.json(
      { message: "All Feilds required" },
      { status: 400 }
    );
  }
  const user: UserType | null = await User.findOne({ email: normalizedEmail });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 409 });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return NextResponse.json({ message: "Invalid Password" }, { status: 400 });
  }
};
