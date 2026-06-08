import type { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header className="border-bottom py-3">

        <div className="container px-4 d-flex flex-row align-items-center gap-2">
          <span className="d-flex align-items-center justify-content-center bg-primary rounded-3 fw-bold text-bg-secondary" style={{ height: '40px', width: '40px', fontSize: '18px' }}>G!S</span>
          <h3 className="mb-0">GitSeeker</h3>
        </div>
      </header>

      <div className="container px-4 py-3 mx-auto">

        {children}

      </div>


    </div>
  )
}