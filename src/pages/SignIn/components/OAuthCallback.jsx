import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const OAuthCallback = () => {
  const [params] = useSearchParams();
  const code = params.get("code");

  useEffect(() => {
    if (code) {
      fetch("http://localhost:3000/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
        .then(res => res.json())
        .then(data => console.log("User:", data));
    }
  }, [code]);

  return <div>Completing sign-in…</div>;
};
