export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            Mero Logo
            {children}
            footer @ 2025
        </section>
    );
}