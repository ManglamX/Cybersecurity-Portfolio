"use client"

import React from "react"
import { Button } from "@/components/ui/button"

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="max-w-md mx-auto px-4 text-center">
            <div className="mb-6">
              <div className="text-6xl font-mono text-primary mb-4">⚠️</div>
              <h1 className="text-3xl font-bold font-mono text-primary mb-2">
                &lt;SYSTEM_ERROR /&gt;
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
            </div>

            <div className="bg-black/50 border border-primary/30 rounded-lg p-6 backdrop-blur-sm mb-6">
              <p className="text-sm font-mono text-muted-foreground mb-4">
                <span className="text-accent">[ERROR_CODE]</span> An unexpected error occurred
              </p>
              {this.state.error && (
                <details className="text-left">
                  <summary className="text-xs font-mono text-primary cursor-pointer hover:text-accent transition-colors mb-2">
                    View Error Details
                  </summary>
                  <pre className="text-xs font-mono text-muted-foreground bg-black/50 p-3 rounded border border-primary/20 overflow-auto max-h-40">
                    {this.state.error.message}
                  </pre>
                </details>
              )}
            </div>

            <div className="space-y-3">
              <Button
                onClick={() => window.location.reload()}
                className="w-full bg-primary text-black hover:bg-primary/80 font-mono"
              >
                RELOAD_SYSTEM
              </Button>
              <Button
                onClick={() => (window.location.href = "/")}
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent/10 font-mono"
              >
                RETURN_HOME
              </Button>
            </div>

            <p className="mt-6 text-xs font-mono text-muted-foreground">
              <span className="text-primary">&gt;</span> If the problem persists, please contact support
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
