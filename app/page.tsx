import Image from 'next/image';
import Logiciel from '../public/logiciel-gestion-cabinet-dentaire.png';
import Link from 'next/link';


// https://www.youtube.com/watch?v=L5JU1oR29TM&list=PLwTWj-bA3SMC4fGQhsdYKJQErd0MKHNfD&index=1


export default function Page() {
  return (
    <>
        <div className="container" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px 5%',
            border: '1px solid #a8a8a8',
            flexDirection: 'column'
        }}>
               <h1 style={{ color: '#A31C88', marginTop: 0, fontSize: '1.7rem'}}>Site bientôt en ligne</h1>

                  <div >
            <div style={{ width: '100%', textAlign: 'center', margin: '10px 0'}}>
                  <Image
                  src={Logiciel}
                  alt="Dentitop"
                  width={250} 
                   height={250}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                  />
              </div>
                  <h2 style={{margin: 0,  }}>Dentitop</h2>
                  <h3 style={{fontWeight: '400', marginTop: '10px', marginBottom: 0 }}>Un logiciel dentaire moderne et complet </h3>
                  <h4 style={{fontWeight: '500', marginTop: '10px', marginBottom: 0 }}>Phone : 06 01 37 11 24</h4>
                  <h4 style={{fontWeight: '500', marginTop: '5px' }}>Email : dentitop1@gmail.com</h4>
                  <p style={{color: '#A31C88', fontSize: '1rem', fontWeight: 500}}>Facile d'utilisation, Ergonomique, evolutif en permanence</p>
                <Link
                  style={{
                    marginTop: '25px',
                     display: 'block', 
                    background: '#A31C88', 
                    color: 'white', 
                    padding: '12px 15px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    textDecoration: 'none'
                }}
                  href='/brochure-dentitop.pdf'
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    Télécharger Brochure Dentitop
                </Link>
                  </div>

      
       
    
    </div> 
  
       
  
      </>
  );
}

