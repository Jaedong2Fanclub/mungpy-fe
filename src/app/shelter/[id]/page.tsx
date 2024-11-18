export default function Page({ params }: { params: { id: string } }) {
    return <div>shelter/{params.id} 페이지</div>;
}
