import 'bootstrap/dist/css/bootstrap.min.css';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/options';
import Titlebar from './titlebarAuthenticated';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <main>
          <Titlebar isAuthenticated={session!==null} />
          <div className="container">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
