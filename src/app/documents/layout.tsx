import React from "react"

interface documentChildrenProps{
    children : React.ReactNode
}

export default function DocumentLayout({children} : documentChildrenProps){

    return (
        <div className="flex flex-col gap-y-4">
            <nav className="bg-amber-500 w-full">Document navbar</nav>
            {children}
        </div>
    )

}