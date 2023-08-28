import SplitCard from "@/components/commons/cards/splitcard";
import TypographyH1 from "@/components/typography/h1";
import GithubLogin from "./GithubLogin";
import TypographyH3 from "@/components/typography/h3";

const Login = () => {
  return (
    <div>
      <TypographyH1>Login Page</TypographyH1>
      <br />
      <SplitCard imgSrc="https://wanderfusion.fra1.cdn.digitaloceanspaces.com/public/ock_and_key_paper_pop_icon.png">
        <div className="flex flex-col place-content-around">
          <TypographyH3>Sign In With</TypographyH3>
          <GithubLogin />
        </div>
      </SplitCard>
    </div>
  );
};

export default Login;
