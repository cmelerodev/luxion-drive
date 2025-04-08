import React from "react";

export default function AuthlLayout({
    children, 
} : {
    children: React.ReactNode;
}) {
    return (
        <div className="flex items-center flex-col justify-center gap-12 h-screen">
            <h1 className="text-5xl font-bold">Luxion Drive</h1>
            <div>{children}</div>
        </div>
    )
}