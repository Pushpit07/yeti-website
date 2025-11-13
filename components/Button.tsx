import Link from "next/link"
import { ComponentPropsWithoutRef, ReactNode } from "react"

type ButtonVariant = "outline" | "solid" | "rounded-full" | "rounded"

interface BaseButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
  icon?: ReactNode
  useGroupHover?: boolean // When true, button responds to parent group hover instead of direct hover
}

interface ButtonAsButtonProps extends BaseButtonProps, Omit<ComponentPropsWithoutRef<"button">, keyof BaseButtonProps> {
  href?: never
}

interface ButtonAsLinkProps extends BaseButtonProps, Omit<ComponentPropsWithoutRef<typeof Link>, keyof BaseButtonProps> {
  href: string
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

const variantStyles: Record<ButtonVariant, string> = {
  outline: "border-2 border-white bg-transparent text-white hover:bg-white hover:text-black",
  solid: "bg-white text-black hover:bg-primary hover:text-primary-foreground hover:shadow-xl hover:scale-105",
  "rounded-full": "rounded-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-black",
  rounded: "rounded-lg bg-white text-black hover:bg-primary hover:text-primary-foreground hover:shadow-xl hover:scale-105",
}

const groupHoverVariantStyles: Record<ButtonVariant, string> = {
  outline: "border-2 border-white bg-transparent text-white group-hover:bg-white group-hover:text-black",
  solid: "bg-white text-black group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-xl group-hover:scale-105",
  "rounded-full": "rounded-full border-2 border-white bg-transparent text-white group-hover:bg-white group-hover:text-black",
  rounded: "rounded-lg bg-white text-black group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-xl group-hover:scale-105",
}

export function Button({
  children,
  variant = "solid",
  className = "",
  icon,
  useGroupHover = false,
  ...props
}: ButtonProps) {
  const baseStyles = "group inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer md:px-6 md:py-3 md:text-base min-h-[44px]"
  const variantStyle = useGroupHover ? groupHoverVariantStyles[variant] : variantStyles[variant]
  const combinedClassName = `${baseStyles} ${variantStyle} ${className}`.trim()

  const content = (
    <>
      {children}
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  )

  if ("href" in props && props.href) {
    return (
      <Link {...props} className={combinedClassName}>
        {content}
      </Link>
    )
  }

  return (
    <button {...(props as ButtonAsButtonProps)} className={combinedClassName}>
      {content}
    </button>
  )
}
