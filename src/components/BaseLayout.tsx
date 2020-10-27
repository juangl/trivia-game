interface BaseLayoutProps {
    children: React.ReactNode;
}
export function BaseLayout(props: BaseLayoutProps) {
    return (
        <div className="min-w-screen min-h-screen bg-contrast flex items-center justify-center">
            {props.children}
        </div>
    );
}
