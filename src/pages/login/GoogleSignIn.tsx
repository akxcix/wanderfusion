import { Button } from "@/components/ui/button";
import { useGoogleLogin } from "@react-oauth/google";

const GoogleSignIn = () => {
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse.code),
    flow: "auth-code",
  });

  return (
    <div className="google-sign-in" onClick={() => login()}>
      <Button>Sign in with Google</Button>
    </div>
  );
};

export default GoogleSignIn;
