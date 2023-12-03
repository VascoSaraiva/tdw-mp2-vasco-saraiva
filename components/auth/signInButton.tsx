import { SignInButtonProps } from "@/types";
import { signIn } from "next-auth/react";
import GoogleIcon from '@mui/icons-material/Google';

const SignInButton = ({ providerId }: SignInButtonProps) => {

  return (
    <button
      type="button"
      onClick={() => signIn(providerId, { callbackUrl: "/" })}
      className="px-4 py-3 bg-indigo-500 text-white rounded-full border-gray-200 justify-center items-center gap-2 flex"
    >
      {providerId === 'google' && <GoogleIcon  />}
      Sign in with {providerId}
    </button>
  );
};

export default SignInButton;
