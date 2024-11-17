import { Inter, Roboto, Ubuntu  } from 'next/font/google';


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})


const ubuntu = Ubuntu({
    weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ubuntu.className}>
      <body style={{height: "100vh"}}>
        <div className="main" style={{display: 'flex', height: '100%', justifyContent: "center",alignItems: 'center' }}>
        {children}
        </div>
       
        </body>
 
    </html>
  );
}
