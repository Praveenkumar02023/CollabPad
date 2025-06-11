'use client'

import {useEditor , EditorContent} from '@tiptap/react'
import starterKit from '@tiptap/starter-kit'

export default function Editor(){

    const editor = useEditor({
        editorProps:{
            attributes:{
                style : "padding-left : 56px ; padding-right : 56px;",
                class : "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] py-10 curser-text"
            }
        },
        extensions : [starterKit],
        content : "Hello World"
    })

    return <div className='size-full overflow-x-auto px-4 bg-[#F9FBFD]  print:p-0 print:bg-white print:overflow-visible'>
        <div className='min-w-max flex justify-center w-[816px] mx-auto py-4 print:p-0 print:w-full print:min-w-0'>
            <EditorContent editor={editor} />
        </div>
    </div>
}