export default function Section({
    id,
    children,
}: {
    id: string;
    children: React.ReactNode;
}) {
    return (
        <section id={id} className="min-h-screen flex items-center justify-center px-4 md:px-0 py-24">
            {children}
        </section>
    )
}