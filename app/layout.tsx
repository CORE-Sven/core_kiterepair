import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
    title: 'Kiterepair',
    description: 'Generated by Onlook',
    metadataBase: new URL('https://rf8b0xo1xeu984slf8sbu.onlook.live/'),
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="snwjbzr">
            <body className="" data-oid="_vgeujo">
                {children}
            </body>
        </html>
    );
}
