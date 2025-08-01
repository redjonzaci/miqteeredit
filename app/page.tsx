"use client";

import outputs from "@/amplify_outputs.json";
import { Button, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import "./../app/app.css";

Amplify.configure(outputs);

export default function App() {
  const { signOut } = useAuthenticator();

  return (
    <main>
      <Button onClick={signOut} variation="primary">
        Sign out
      </Button>
    </main>
  );
}
