import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

import { CustomFormField } from "@/components/custom_formfield";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import Layout from "@/components/layout";
import { useToast } from "@/components/ui/use-toast";

import { loginAccount, loginSchema, LoginSchema } from "@/utils/apis/auth";
import { useToken } from "@/utils/contexts/token";

const Login = () => {
  const { changeToken } = useToken();
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  /*
   * useEffect(() => {}, [])
   * mirip dengan componentDidMount, artinya dia hanya dijalankan sekali pada saat component telah dimuat pertama kali
   *
   * useEffect(() => {}, [state1, state2, state3, ....])
   * mirip dengan componentDidMount dan componentDidUpdate, artinya dia dijalankan sekali pada saat component telah dimuat, setelah itu akan berjalan kembali ketika nilai dari variabel/state yang ditulis didalam dependencies ([]) itu berubah
   *
   * useEffect(() => {})
   * side effect akan jalan secara terus menerus kalau penulisannya tanpa scope ([])
   *
   * useEffect(() => {
   *  return () => {
   *    ...
   *  }
   * })
   * side effect akan dijalankan setiap waktu (mirip dengan penulisan useEffect tanpa scope), namun dia akan berhenti/unsubscribe ketika kita meninggalkan/berpindah halaman, dengan harap agar performa dari web/aplikasi tetap terjaga karena tidak ada proses berjalan dibalik layar. Contoh implementasi di real scenario adalah OTP (ada perhitungan mundur yang dijalankan setiap detik), ataupun status online. useEffect ini sendiri mirip dengan componentDidMount + componentDidUpdate + componentWillUnmount
   */

  async function onSubmitLogin(data: LoginSchema) {
    try {
      const result = await loginAccount(data);
      changeToken(result.payload?.token);
      toast({
        description: "Hello, Welcome Back!",
      });
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  return (
    <Layout centerX centerY>
      <Card className="w-full md:w-3/4 lg:w-1/2">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your account using email</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              data-testid="form-login"
              onSubmit={form.handleSubmit(onSubmitLogin)}
              className="space-y-8"
            >
              <CustomFormField
                control={form.control}
                name="email"
                label="Email"
              >
                {(field) => (
                  <Input
                    data-testid="input-email"
                    placeholder="name@mail.com"
                    type="email"
                    disabled={form.formState.isSubmitting}
                    aria-disabled={form.formState.isSubmitting}
                    {...field}
                  />
                )}
              </CustomFormField>
              <CustomFormField
                control={form.control}
                name="password"
                label="Password"
              >
                {(field) => (
                  <Input
                    data-testid="input-password"
                    placeholder="Password"
                    type="password"
                    disabled={form.formState.isSubmitting}
                    aria-disabled={form.formState.isSubmitting}
                    {...field}
                  />
                )}
              </CustomFormField>
              <CardFooter className="grid gap-6">
                <Button
                  data-testid="btn-submit"
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </>
                  ) : (
                    "Login"
                  )}
                </Button>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or
                    </span>
                  </div>
                </div>
                <Button
                  data-testid="btn-navigate-register"
                  variant="secondary"
                  type="submit"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Login;