"use client";

import React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Props {
    children: React.ReactNode;
}

// Clerk disabled for local UI-only preview — no auth backend configured.
const Providers = ({ children }: Props) => {

    const client = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )
};

export default Providers
