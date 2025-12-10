import { ReactNode, ElementType } from "react"
import { Container } from "./Container"

export function Section({
  children,
  className,
  as: As = "section",
  id,
}: {
  children: ReactNode
  className?: string
  as?: ElementType
  id?: string
}) {
  return (
    <As id={id} className={`py-12 md:py-24 ${className ?? ""}`}>
      <Container>{children}</Container>
    </As>
  )
}

