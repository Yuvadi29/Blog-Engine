'use client';

import { createClient } from "@supabase/supabase-js";
import { Button } from "@ui/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@ui/components/ui/card";
import { Separator } from "@ui/components/ui/separator";
import { useState } from "react"
import { toast } from "sonner";
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { createBrowserClient } from "@supabase/ssr";



export default function LoginPage(){
    const [githubLoading, setGithubLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
    );

    async function signInWithGithub() {
        try {
            setGithubLoading(true);

            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'github',
                options: {
                    redirectTo: 'http://localhost:3000/auth/callback',
                },
            });

            if (error) {
                toast.error(error.message);
                return;
            }

        } catch (error) {
            toast.error('Error signing in with Github');
        } finally {
            setGithubLoading(false);
        }
    }

    async function signInWithGoogle() {
        try {
            setGoogleLoading(true);

            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: 'http://localhost:3000/auth/callback',
                },
            });

            if (error) {
                toast.error(error.message);
                return;
            }

        } catch (error) {
            toast.error('Error signing in with Github');
        } finally {
            setGithubLoading(false);
        }
    }

    return (
        <div className='flex min-h-screen items-center justify-center px-4'>
            <Card className='w-full max-w-md border-border/50 bg-background/95 backdrop-blur'>
                <CardHeader className='space-y-2 text-center'>
                    <div className='mx-auto flex h-14 w-14 items-center justify-cenpnpm dlx shadcn@latest initter rounded-2xl border border-border bg-muted text-xl font-bold'>
                        B
                    </div>

                    <CardTitle className='text-3xl font-bold tracking-tight'>
                        Blog Engine
                    </CardTitle>

                    <CardDescription className='text-sm text-muted-foreground'>
                        Your personal developer publishing platform.
                    </CardDescription>
                </CardHeader>

                <CardContent className='space-y-4'>
                    <Button
                        onClick={signInWithGithub}
                        disabled={githubLoading}
                        className='h-11 w-full gap-2'
                    >
                        <FaGithub className='h-4 w-4' />

                        {githubLoading
                            ? 'Redirecting...'
                            : 'Continue with GitHub'}
                    </Button>

                    <Button
                        variant='outline'
                        onClick={signInWithGoogle}
                        disabled={googleLoading}
                        className='h-11 w-full gap-2'
                    >
                        <FaGoogle className='h-4 w-4' />

                        {googleLoading
                            ? 'Redirecting...'
                            : 'Continue with Google'}
                    </Button>

                    <div className='relative py-2'>
                        <Separator />

                        <div className='absolute inset-0 flex items-center justify-center'>
                            <span className='bg-background px-2 text-xs text-muted-foreground'>
                                Secure OAuth Authentication
                            </span>
                        </div>
                    </div>

                    <p className='text-center text-xs text-muted-foreground'>
                        By continuing, you agree to authenticate using your selected
                        provider.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}