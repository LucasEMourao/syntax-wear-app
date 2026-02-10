import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext/AuthContext";

export const GoogleAuthButton = () => {
  const [googleLoginError, setGoogleLoginError] = useState<string | null>(null);
  const [, setIsLoadingGoogle] = useState(false);

  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = async (
    credentialResponse: CredentialResponse,
  ): Promise<void> => {
    const credential = credentialResponse.credential;
    console.log(credential);
    if (!credential) {
      setGoogleLoginError(
        "Credencial do Google não encontrada. Por favor, tente novamente.",
      );
      setIsLoadingGoogle(false);
      return;
    }
    try {
      await signInWithGoogle(credential);
      navigate({ to: "/" });
    } catch (error) {
      let errorMessage = "Erro ao fazer login com o Google";
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      setGoogleLoginError(errorMessage);
    } finally {
      setIsLoadingGoogle(false);
    }
  };

  const handleGoogleLoginError = (): void => {
    setGoogleLoginError(
      "Erro ao fazer login com o Google. Por favor, tente novamente.",
    );
    setIsLoadingGoogle(false);
  };

  return (
    <>
      <GoogleLogin
        onSuccess={handleGoogleLoginSuccess}
        onError={handleGoogleLoginError}
      />
      {googleLoginError && (
        <p className="mt-3.5 text-red-500 text-center">{googleLoginError}</p>
      )}
    </>
  );
};
