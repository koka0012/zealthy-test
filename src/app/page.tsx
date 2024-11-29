import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/atoms/card'
import { SignInForm } from '@/components/data/form/sign-in-form/component'

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center px-4">
      <Card className="w-96 max-w-full">
        <CardHeader>
          <CardTitle>Sign-In</CardTitle>
          <CardDescription>
            If you don&apos;t have an account you can also sign-up on this page.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  )
}
