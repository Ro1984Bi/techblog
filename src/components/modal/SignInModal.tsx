"use client";
import { useModalStore } from "@/store/useModalStore";
import Modal from "./Modal";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

export default function SignInModal() {
  const { isSignInOpen, closeSignIn } = useModalStore();

  const signInWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const signInWithGithub = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };
  return (
    <Modal isOpen={isSignInOpen} onClose={closeSignIn}>
      <h2 className=" text-2xl font-semibold text-center text-white mb-2">
        Sign In to Tech Blog
      </h2>

      <p className=" text-sm text-gray-400 mb-8 text-center">
        Continue with one of the following providers
      </p>

      <div className=" space-y-4">
        {/* buttons providers */}
        <button
          className=" w-full flex items-center justify-center gap-3 py-3 rounded-full cursor-pointer bg-white text-black font-medium hover:bg-gray-200 transition"
          onClick={signInWithGoogle}
        >
          <FcGoogle size={20} /> Continue with Google
        </button>

        <button
          className=" w-full flex items-center justify-center gap-3 py-3 rounded-full cursor-pointer bg-black  text-white font-medium hover:bg-transparent  transition"
          onClick={signInWithGithub}
        >
          <FaGithub size={20} /> Continue with Github
        </button>
      </div>

      <p className=" text-sm text-gray-400 mt-8 text-center">
        By continuing, you agree to our User Agreement and Privacy Policy
      </p>
    </Modal>
  );
}
