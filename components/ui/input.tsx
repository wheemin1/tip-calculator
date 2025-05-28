import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border-2 border-gray-300 bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-400 dark:focus-visible:ring-blue-400 dark:focus-visible:border-blue-400 transition-colors shadow-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
