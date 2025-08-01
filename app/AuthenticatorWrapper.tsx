"use client";

import { Authenticator } from "@aws-amplify/ui-react";

export default function AuthenticatorWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Authenticator
      formFields={{
        signIn: {
          username: {
            dialCode: "+355",
          },
        },
        signUp: {
          phone_number: {
            dialCode: "+355",
          },
        },
      }}
    >
      {children}
    </Authenticator>
  );
}
