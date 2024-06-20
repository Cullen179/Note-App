import * as React from "react";
import { useAuth } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "@/firebase/auth";
import { signInWithCustomToken } from "firebase/auth";

export default function DashboardLayout() {
  const { userId, isLoaded, getToken} = useAuth();
  const navigate = useNavigate();

  const signInWithClerk = async () => {
    const token = await getToken({ template: "integration_firebase" });
    await signInWithCustomToken(auth, token || "");
  };

  React.useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/");
    } else if (isLoaded && userId) {
      signInWithClerk();
      navigate(`/dashboard/${userId}`);
    }
  }, [isLoaded]);

  if (!isLoaded) return "Loading...";

  return (
    <div className="h-full">
      <Outlet />
    </div>
  );
}
