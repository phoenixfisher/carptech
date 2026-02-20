import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";

const resetSchema = z.object({
  username: z.string().min(1, "Username is required"),
  oldPassword: z.string().min(1, "Current password is required"),
  newPassword: z.string().min(1, "New password is required"),
  confirmNewPassword: z.string().min(1, "Please confirm your new password"),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  message: "Passwords do not match",
  path: ["confirmNewPassword"],
});

type ResetValues = z.infer<typeof resetSchema>;

const Settings = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ResetValues>({
    resolver: zodResolver(resetSchema),
    defaultValues: { username: user?.username ?? "" },
  });

  // Redirect to login if not logged in
  if (!user) {
    navigate("/login");
    return null;
  }

  async function onSubmit(values: ResetValues) {
    setError("");
    setSuccess("");
    try {
      const res = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: values.username,
          oldPassword: values.oldPassword,
          newPassword: values.newPassword,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to reset password");
      setSuccess("Password updated successfully!");
      reset({
        username: user?.username ?? "",
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to reset password");
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto py-12 px-4 max-w-lg">
        <h1 className="text-senior-xl font-bold mb-8">Settings</h1>

        <Card>
          <CardHeader>
            <CardTitle>Reset Password</CardTitle>
            <CardDescription>
              Enter your username, current password, and a new password to update your credentials.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="s-username">Username</Label>
                <Input
                  id="s-username"
                  placeholder="Your username"
                  {...register("username")}
                />
                {errors.username && (
                  <p className="text-sm text-destructive">{errors.username.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <Label htmlFor="s-old-password">Current Password</Label>
                <Input
                  id="s-old-password"
                  type="password"
                  placeholder="Enter your current password"
                  {...register("oldPassword")}
                />
                {errors.oldPassword && (
                  <p className="text-sm text-destructive">{errors.oldPassword.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <Label htmlFor="s-new-password">New Password</Label>
                <Input
                  id="s-new-password"
                  type="password"
                  placeholder="Enter your new password"
                  {...register("newPassword")}
                />
                {errors.newPassword && (
                  <p className="text-sm text-destructive">{errors.newPassword.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <Label htmlFor="s-confirm-password">Confirm New Password</Label>
                <Input
                  id="s-confirm-password"
                  type="password"
                  placeholder="Re-enter your new password"
                  {...register("confirmNewPassword")}
                />
                {errors.confirmNewPassword && (
                  <p className="text-sm text-destructive">{errors.confirmNewPassword.message}</p>
                )}
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}
              {success && <p className="text-sm text-green-600">{success}</p>}

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Updating…" : "Reset Password"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
