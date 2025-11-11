import { ReactNode } from "react"

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0 ${className ?? ""}`}>
      {children}
    </div>
  )
}

