import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      toast.success("Welcome back!");
      navigate("/admin");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card p-8 w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-brand-blue text-center">
          Admin Login
        </h1>
        <input
          className="input"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <input
          className="input"
          placeholder="Password"
          type="password"
          {...register("password", { required: true })}
        />
        <button className="btn-primary w-full">Login</button>
      </form>
    </div>
  );
}
