interface DocumentIdPageProps {
    params : Promise<{documentId : String}>
}


export default async function DocumentIdPage({params} : DocumentIdPageProps){

    const {documentId} = await params;

    return (
       <div>
         DocumentId : {documentId}
       </div>
    )
}