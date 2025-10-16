import { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  footerText?: string;
  footerLink?: {
    href: string;
    text: string;
  };
}

export default function AuthLayout({
  children,
  title,
  subtitle,
  footerText,
  footerLink,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Head>
        <title>{title} | GMNH Miyabi</title>
      </Head>
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/">
          <h1 className="text-center text-4xl font-extrabold text-indigo-600">
            GMNH Miyabi
          </h1>
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-center text-sm text-gray-600">
            {subtitle}
          </p>
        )}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {children}
        </div>

        {footerText && footerLink && (
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">{footerText} </span>
            <Link href={footerLink.href} className="font-medium text-indigo-600 hover:text-indigo-500">
              {footerLink.text}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
