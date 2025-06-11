import React from "react"

interface documentChildrenProps{
    children : React.ReactNode
}

export default function DocumentLayout({children} : documentChildrenProps){

    return (
        <div className="flex flex-col gap-y-4">
            {children}
        </div>
    )

}