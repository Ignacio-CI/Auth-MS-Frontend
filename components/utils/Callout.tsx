import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

export default function Callout({ alert }: { alert: { error: boolean, msg: string } }) {
  return (
    <>
      <Alert>
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          {alert.msg}
        </AlertDescription>
      </Alert>
    </>
  )
}
