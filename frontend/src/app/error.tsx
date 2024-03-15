"use client"
export default function Error({
    error,
    reset,
  }: {
    error: Error & { digest?: string }
    reset: () => void
  }) {
    console.log("reset function",reset);
    return(
        <>
            <h2 className="text-center">Something went wrong</h2>
        </>
    )
}