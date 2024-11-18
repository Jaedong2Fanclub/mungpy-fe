export default function Page({ params }: { params: { id: string } }) {
    return <div>animal/{params.id} 페이지</div>;
}
