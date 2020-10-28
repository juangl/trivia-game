// valid component types
type JSXElementConstructor<P> =
    | ((props: P) => React.ReactElement | null)
    | (new (props: P) => React.Component<P, any>);

// valid element type
type JSXElementType = keyof JSX.IntrinsicElements | JSXElementConstructor<any>;

// Button props extends the component `as` props
type ButtonProps<C extends JSXElementType = "button"> = React.ComponentProps<
    C
> & {
    as?: C;
    className?: string;
    rightElement?: React.ReactNode;
    text: string;
};
export function Button<
    C extends
        | keyof JSX.IntrinsicElements
        | JSXElementConstructor<any> = "button"
>(props: ButtonProps<C>) {
    let {
        as: Component = "button",
        rightElement = null,
        className = "",
        text,
        ...rest
    } = props;

    let extendedClassName = `rounded-full py-2 px-4 inline-flex items-center ${className}`;

    return (
        <Component className={extendedClassName} {...rest}>
            <span className="font-body font-semibold">{text}</span>
            {rightElement}
        </Component>
    );
}
