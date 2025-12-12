export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section className="text-center">
            Example Layout
            {children}
            Example Footer
        </section>
    );
}