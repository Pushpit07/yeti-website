import { ReactNode, ElementType } from "react"
import { Container } from "./Container"

export function Section({
  children,
  className,
  as: As = "section",
}: {
  children: ReactNode
  className?: string
  as?: ElementType
}) {
  return (
    <As className={`py-12 md:py-16 ${className ?? ""}`}>
      <Container>{children}</Container>
    </As>
  )
}

