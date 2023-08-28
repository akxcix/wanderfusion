import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

const GithubLogin = () => {
  return (
    <div className="flex-grow">
      <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=6f9e7c286c45c0aa4169">
        <Button>
          GitHub <GithubIcon className="ml-1.5" />
        </Button>
      </a>
    </div>
  );
};

export default GithubLogin;
