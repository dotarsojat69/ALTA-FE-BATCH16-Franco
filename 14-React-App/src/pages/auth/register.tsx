import { FormEvent, useState } from "react";

import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout";
import { registerAccount } from "@/utils/apis/auth";

const Register = () => {
  const {toast} = useToast();

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  async function onSubmitRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
    const body = {
      full_name : fullname,
      email,
      password,
      role: "user",
      address,
      phone_number : phoneNumber
    };
     
    const result = await registerAccount(body);
    toast({
      description: result.message,
    });
  } catch (error: any) {
    toast({
      title: "Oops! Something went wrong.",
      description: error.toString(),
      variant: "destructive",
    });
  }
  }

  return (
    <Layout>
    <form className="flex flex-col gap-3" 
    onSubmit={(e) => onSubmitRegister}
    >
    <Input 
    placeholder="Full Name" 
    value={fullname} 
    onChange={(e)=> setFullName(e.target.value)}
    />
    <Input 
    type='email'
    placeholder="Email Address" 
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    />
    <Input 
    type='password'
    placeholder="Password" 
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    />
    <Input 
    placeholder="Address"
    value={address}
    onChange={(e)=>setAddress(e.target.value)}
    />
    <Input 
    placeholder="Phone Number"
    value={phoneNumber}
    onChange={(e)=>setPhoneNumber(e.target.value)}
    />
    <Button type="submit">Sign Up</Button>
    </form>
    </Layout>
  );
  }; 


export default Register;
